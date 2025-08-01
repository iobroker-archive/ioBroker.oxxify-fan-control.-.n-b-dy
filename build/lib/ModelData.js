"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ModelData_exports = {};
__export(ModelData_exports, {
  DataToSend: () => DataToSend,
  FanData: () => FanData,
  FanRemoteEndpoint: () => FanRemoteEndpoint,
  IoBrokerDataPoint: () => IoBrokerDataPoint,
  IoBrokerRewriteDataPoint: () => IoBrokerRewriteDataPoint,
  ParsedData: () => ParsedData,
  ParsingStatus: () => ParsingStatus,
  WriteDataModel: () => WriteDataModel
});
module.exports = __toCommonJS(ModelData_exports);
class DataToSend {
  /**
   * Constructor of the class.
   *
   * @param data The byte buffer holding the data to send.
   * @param ipAddress The IP address, to which the data is sent.
   */
  constructor(data, ipAddress) {
    this.data = data;
    this.ipAddress = ipAddress;
  }
  data;
  ipAddress;
}
var ParsingStatus = /* @__PURE__ */ ((ParsingStatus2) => {
  ParsingStatus2[ParsingStatus2["Ok"] = 1] = "Ok";
  ParsingStatus2[ParsingStatus2["WrongHeader"] = 2] = "WrongHeader";
  ParsingStatus2[ParsingStatus2["WrongVersion"] = 3] = "WrongVersion";
  ParsingStatus2[ParsingStatus2["WrongIdSize"] = 4] = "WrongIdSize";
  ParsingStatus2[ParsingStatus2["ChecksumError"] = 5] = "ChecksumError";
  ParsingStatus2[ParsingStatus2["Undefined"] = 6] = "Undefined";
  return ParsingStatus2;
})(ParsingStatus || {});
class ParsedData {
  /**
   * Default constructor to initialize the data members.
   */
  constructor() {
    this.strFanId = "";
    this.status = 6 /* Undefined */;
    this.receivedData = [];
  }
  strFanId;
  status;
  receivedData;
}
class IoBrokerDataPoint {
  /**
   * Constructor of the class.
   *
   * @param strIdentifer The unique identifier of the fan, to which the data belongs.
   * @param value The data which can be written to an ioBroker state.
   */
  constructor(strIdentifer = "", value = null) {
    this.strIdentifer = strIdentifer;
    this.value = value;
  }
  strIdentifer;
  value;
}
class IoBrokerRewriteDataPoint extends IoBrokerDataPoint {
  /**
   * Constructor of the class.
   *
   * @param strIdentifer The unique identifier of the fan, to which the data belongs.
   * @param value The data which can be written to an ioBroker state.
   */
  constructor(strIdentifer = "", value = null) {
    super(strIdentifer, value);
    this.nRetryCount = 0;
  }
  nRetryCount;
}
class FanRemoteEndpoint {
  /**
   * Constructor of the class.
   *
   * @param strIpAddress The IP address of the fan.
   * @param strPassword The password of the fan for the protocol.
   */
  constructor(strIpAddress = "", strPassword) {
    this.strIpAddress = strIpAddress;
    this.strPassword = strPassword;
  }
  /**
   * The IP address of the fan.
   */
  strIpAddress;
  /**
   * The password of the fan for the protocol.
   */
  strPassword;
}
class WriteDataModel {
  /**
   * Constructor of the class.
   *
   * @param strFanId The unique fan identifier.
   * @param fanData The remote endpoint data to access the fan.
   * @param strStateIdentifier The ioBroker related state identifier within the object tree.
   * @param value The ioBroker state, which is requested to be written.
   */
  constructor(strFanId, fanData, strStateIdentifier, value) {
    this.strFanId = strFanId;
    this.fanData = fanData;
    this.strStateIdentifier = strStateIdentifier;
    this.value = value;
  }
  strFanId;
  fanData;
  strStateIdentifier;
  value;
}
class FanData {
  /**
   * Constructor of the class.
   *
   * @param nSize The size of the state/parameter within the protocol in bytes.
   * @param strIdentifer The unique identifier from the fan (16 hex chars).
   * @param bIsReadable True means the parameter is readable from the fan, false means it can not be read.
   * @param bIsWritable True means the parameter is writable towards the fan, false means it can not be written.
   * @param strRole The role of the state within the object tree.
   * @param strType The data type of the state within the object tree.
   * @param name The name of the state within the object tree.
   * @param parseFunction The function which is used to parse the received data into the ioBroker state value.
   * @param strUnit The unit of the state, if available.
   * @param minValue The minimum value of the state, if available (e.g. in case of a number).
   * @param maxValue The maximum value of the state, if available (e.g. in case of a number).
   * @param states The availabe states in case of an enum, if available.
   */
  constructor(nSize, strIdentifer, bIsReadable, bIsWritable, strRole, strType, name, parseFunction, strUnit, minValue, maxValue, states) {
    this.nSize = nSize;
    this.strIdentifer = strIdentifer;
    this.bIsReadable = bIsReadable;
    this.bIsWritable = bIsWritable;
    this.strRole = strRole;
    this.strType = strType;
    this.strUnit = strUnit;
    this.name = name;
    this.parseFunction = parseFunction;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.states = states;
  }
  nSize;
  strIdentifer;
  bIsReadable;
  bIsWritable;
  strRole;
  strType;
  name;
  parseFunction;
  strUnit;
  minValue;
  maxValue;
  states;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataToSend,
  FanData,
  FanRemoteEndpoint,
  IoBrokerDataPoint,
  IoBrokerRewriteDataPoint,
  ParsedData,
  ParsingStatus,
  WriteDataModel
});
//# sourceMappingURL=ModelData.js.map
