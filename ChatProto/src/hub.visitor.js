import ngmodule from "./app"

ngmodule.config(["$stateProvider", "$urlServiceProvider", function ($stateProvider, $urlServiceProvider) {
    $stateProvider.state('home', {
        url: '/vi',
        templateUrl: 'startbutton.html',
        controller: 'visitorCtrl'
    });

    $stateProvider.state('home.chat', {
        url: '/chat',
        templateUrl: 'inchat.html',
        controller: 'visitorChatCtrl'
    });

    $urlServiceProvider.rules.otherwise({ state: 'home' });
}]);

class VisitorChat {

    constructor($rootScope, $q, $timeout) {
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$timeout = $timeout;
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
    }

    start() {
       
    }

    stop() {
       
    }
}

ngmodule.factory('visitorChatService', ["$rootScope", "$q", "$timeout", function ($rootScope, $q, $timeout) {
    return new VisitorChat($rootScope, $q, $timeout);
}]);

export default VisitorChat;