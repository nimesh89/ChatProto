import ngmodule from "./app"

var chatHubProxy = $.connection.chatHub;

chatHubProxy.client.visitorConnected = function (vid, name, time) {

}

chatHubProxy.client.visitorWentOffline = function (vid, name, time) {

}

chatHubProxy.client.visitorCameOnline = function (vid, name, time) {

}

chatHubProxy.client.recievedMessage = function (vid, sourceid, sourceName, sourcetime, messagetype, message) {

}

$.connection.hub.start().done(function () {

});

export default chatHubProxy;