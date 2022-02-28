const grpc = require('@grpc/grpc-js');
const {
  FileTransferServiceClient,
} = require('./proto/filetransfer_service_grpc_pb');
const { ListRequestType } = require('./proto/filetransfer_service_pb');

const list = (address) => {
  const client = new FileTransferServiceClient(
    address,
    grpc.credentials.createInsecure()
  );

  const request = new ListRequestType();

  console.log('name,size,mode,modtime');

  const call = client.listFiles(request);

  call.on('data', function (response) {
    const name = response.getName();
    const size = response.getSize();
    const fileMode = response.getMode();

    const modTime = new proto.google.protobuf.Timestamp(
      response.getModtime().array
    );
    console.log(
      `"${name}","${size}","${fileMode}","${modTime.toDate().toISOString()}"`
    );
  });

  call.on('error', function (e) {
    console.log({ e });
  });
};

module.exports = list;
