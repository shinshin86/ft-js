const grpc = require('@grpc/grpc-js');
const {
  FileTransferServiceClient,
} = require('./proto/filetransfer_service_grpc_pb');
const {
  DownloadRequestType,
  ListRequestType,
} = require('./proto/filetransfer_service_pb');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const MAX_RECEIVE_MEASSAGE_LENGTH = 20971520;

const download = async (client, data) => {
  const { name } = data;

  const downloadRequest = new DownloadRequestType();
  downloadRequest.setName(name);

  const downloadCall = client.download(downloadRequest);

  downloadCall.on('data', function (downloadRespnose) {
    const data = downloadRespnose.getData();
    const fileContent = Buffer.from(data, 'base64');

    const pathList = path.normalize(name).split(path.sep);
    if (pathList.length === 1) {
      fs.writeFile(name, fileContent, () => {
        console.log('[ft-js] download: Save file ==> ', name);
      });
    } else {
      mkdirp(path.dirname(name)).then((made) => {
        console.log('[ft-js] download: make dir ==> ', made);

        fs.writeFile(name, fileContent, () => {
          console.log('[ft-js] download: Save file ==> ', name);
        });
      });
    }

    return;
  });

  downloadCall.on('error', function (e) {
    console.log('[ft-js] download: Error file: ', name);
    console.log({ e });
  });
};
const downloadFiles = (address) => {
  const client = new FileTransferServiceClient(
    address,
    grpc.credentials.createInsecure(),
    { 'grpc.max_receive_message_length': MAX_RECEIVE_MEASSAGE_LENGTH }
  );

  const request = new ListRequestType();
  const call = client.listFiles(request);

  const dataList = [];
  call.on('data', function (response) {
    dataList.push({
      name: response.getName(),
      size: response.getSize(),
      fileMode: response.getMode(),
      modTime: response.getModtime(),
    });
  });

  call.on('end', function () {
    for (const data of dataList) {
      download(client, data);
    }
  });

  call.on('error', function (e) {
    console.log({ e });
  });
};

module.exports = downloadFiles;
