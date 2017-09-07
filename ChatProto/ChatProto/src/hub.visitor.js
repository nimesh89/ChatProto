import ngmodule from "./app"

var chatHubProxy = $.connection.chatHub;

chatHubProxy.client.recievedMessage = function (vid, sourceid, sourceName, sourcetime, messagetype, message) {

}

chatHubProxy.client.opJoined = function (vid, opid, opname, time) {

}

chatHubProxy.client.opWentOffline = function (vid, opid, opname, time) {

}

chatHubProxy.client.opCameOnline = function (vid, opid, opname, time) {

}

chatHubProxy.client.chatClosed = function (vid, opid, opname, time) {

}

$.connection.hub.start().done(function () {

});

export default chatHubProxy;