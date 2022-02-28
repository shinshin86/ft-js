// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// This code is quote from here.
// https://github.com/mattn/ft/blob/master/proto/filetransfer_service.proto
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_filetransfer_service_pb = require('../proto/filetransfer_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_proto_DownloadRequestType(arg) {
  if (!(arg instanceof proto_filetransfer_service_pb.DownloadRequestType)) {
    throw new Error('Expected argument of type proto.DownloadRequestType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DownloadRequestType(buffer_arg) {
  return proto_filetransfer_service_pb.DownloadRequestType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DownloadResponseType(arg) {
  if (!(arg instanceof proto_filetransfer_service_pb.DownloadResponseType)) {
    throw new Error('Expected argument of type proto.DownloadResponseType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DownloadResponseType(buffer_arg) {
  return proto_filetransfer_service_pb.DownloadResponseType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListRequestType(arg) {
  if (!(arg instanceof proto_filetransfer_service_pb.ListRequestType)) {
    throw new Error('Expected argument of type proto.ListRequestType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListRequestType(buffer_arg) {
  return proto_filetransfer_service_pb.ListRequestType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ListResponseType(arg) {
  if (!(arg instanceof proto_filetransfer_service_pb.ListResponseType)) {
    throw new Error('Expected argument of type proto.ListResponseType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ListResponseType(buffer_arg) {
  return proto_filetransfer_service_pb.ListResponseType.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileTransferServiceService = exports.FileTransferServiceService = {
  listFiles: {
    path: '/proto.FileTransferService/ListFiles',
    requestStream: false,
    responseStream: true,
    requestType: proto_filetransfer_service_pb.ListRequestType,
    responseType: proto_filetransfer_service_pb.ListResponseType,
    requestSerialize: serialize_proto_ListRequestType,
    requestDeserialize: deserialize_proto_ListRequestType,
    responseSerialize: serialize_proto_ListResponseType,
    responseDeserialize: deserialize_proto_ListResponseType,
  },
  download: {
    path: '/proto.FileTransferService/Download',
    requestStream: false,
    responseStream: true,
    requestType: proto_filetransfer_service_pb.DownloadRequestType,
    responseType: proto_filetransfer_service_pb.DownloadResponseType,
    requestSerialize: serialize_proto_DownloadRequestType,
    requestDeserialize: deserialize_proto_DownloadRequestType,
    responseSerialize: serialize_proto_DownloadResponseType,
    responseDeserialize: deserialize_proto_DownloadResponseType,
  },
};

exports.FileTransferServiceClient = grpc.makeGenericClientConstructor(FileTransferServiceService);
