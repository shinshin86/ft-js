const grpc = require('@grpc/grpc-js');
const {
  FileTransferServiceService,
} = require('./proto/filetransfer_service_grpc_pb');
const {
  ListResponseType,
  DownloadResponseType,
} = require('./proto/filetransfer_service_pb');
const { readdir, stat } = require('fs/promises');
const path = require('path');
const fs = require('fs/promises');

const showFiles = async (dirpath, callback) => {
  try {
    const dirents = await readdir(dirpath, { withFileTypes: true });

    for (const dirent of dirents) {
      const fp = path.join(dirpath, dirent.name);

      if (dirent.isDirectory()) {
        await showFiles(fp, callback);
      } else {
        const response = new ListResponseType();
        response.setName(fp);

        const { size, mode, mtime } = await stat(fp);
        response.setSize(size);
        response.setMode(mode);

        const date = proto.google.protobuf.Timestamp.fromDate(mtime);
        response.setModtime(date);

        callback.write(response);
      }
    }
  } catch (err) {
    console.error(err);
  }

  return;
};

const listFiles = (call) => {
  console.log('[ft-js] listFiles');
  showFiles('.', call)
    .then((_) => call.end())
    .catch((err) => console.error(err));
};

const download = async (call) => {
  console.log('[ft-js: download] Request file: ', call.request.getName());
  const response = new DownloadResponseType();

  const fileContent = await fs.readFile(call.request.getName());

  const bytes = Buffer.from(fileContent, 'base64');
  response.setData(bytes);
  call.write(response);
  call.end();
};

const serve = (address) => {
  const server = new grpc.Server();
  server.addService(FileTransferServiceService, {
    listFiles: listFiles,
    download: download,
  });
  server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Server: Start');
  });
};

module.exports = serve;
