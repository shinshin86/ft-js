const grpc = require('@grpc/grpc-js');
const {
  FileTransferServiceClient,
} = require('./proto/filetransfer_service_grpc_pb');
const { ListRequestType } = require('./proto/filetransfer_service_pb');
const { EXCLUDE_PATHS } = require('./constants');

const list = (address, format) => {
  const client = new FileTransferServiceClient(
    address,
    grpc.credentials.createInsecure()
  );

  const request = new ListRequestType();

  if (format === 'csv') {
    console.log('name,size,mode,modtime');
  }

  const call = client.listFiles(request);

  let fileList = [];

  call.on('data', function (response) {
    const name = response.getName();

    if (EXCLUDE_PATHS.includes(name)) {
      return;
    }

    const size = response.getSize();
    const fileMode = response.getMode();

    const modTime = new proto.google.protobuf.Timestamp(
      response.getModtime().array
    );

    if (format === 'csv') {
      console.log(
        `"${name}","${size}","${fileMode}","${modTime.toDate().toISOString()}"`
      );
    } else if (format === 'json') {
      fileList.push({
        name,
        size,
        mode: fileMode,
        modtime: modTime.toDate().toISOString(),
      });
    } else {
      throw new Error('Not found valid file foromat');
    }
  });

  call.on('close', function () {
    if (format === 'json') {
      const json = { files: fileList };
      console.log(JSON.stringify(json));
    }
  });

  call.on('error', function (e) {
    console.log({ e });
  });
};

module.exports = list;
