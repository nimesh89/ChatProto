import ngmodule from "./app"

angular.module("app").config(["$stateProvider", "$urlServiceProvider", function ($stateProvider, $urlServiceProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'startbutton.html',
        controller: 'operatorCtrl'
    });

    $urlServiceProvider.rules.otherwise({ state: 'home' });
}]);

class OperatorChat {

    constructor($rootScope) {
        this.$rootScope = $rootScope;
        var chatHubProxy = $.connection.chatHub;

        chatHubProxy.client.visitorConnected = function (vid, name, time) {

        }

        chatHubProxy.client.visitorWentOffline = function (vid, name, time) {

        }

        chatHubProxy.client.visitorCameOnline = function (vid, name, time) {

        }

        chatHubProxy.client.recievedMessage = function (vid, sourceid, sourceName, sourcetime, messagetype, message) {

        }
    }

    start(name) {
        $.connection.hub.qs = { 'op': 'Nimesh' };

        $.connection.hub.start().done(function () {

        });
    }
}

ngmodule.factory('operatoChatService', ["$rootScope", function ($rootScope) {
    return new OperatorChat($rootScope);
}]);

export default OperatorChat;