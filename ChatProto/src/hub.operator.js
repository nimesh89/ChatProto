import ngmodule from "./app"

ngmodule.config(["$stateProvider", "$urlServiceProvider", function ($stateProvider, $urlServiceProvider) {
    $stateProvider.state('home', {
        url: '/op',
        templateUrl: 'startbutton.html',
        controller: 'operatorCtrl'
    });

    $stateProvider.state('home.chat', {
        url: '/chat',
        templateUrl: 'opchat.html',
        controller: 'opChatCtrl'
    });

    $urlServiceProvider.rules.otherwise({ state: 'home' });
}]);

class OperatorChat {

    constructor($rootScope, $q, $timeout) {
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$timeout = $timeout;
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
        $.connection.hub.qs = { 'op': name };
        var deffered = this.$q.defer();

        $.connection.hub.start().done(function () {
            deffered.resolve(true);
        }).fail(function (err) { deffered.reject(err); });

        return deffered.promise
    }

    stop() {
        var deffered = this.$q.defer();

        $.connection.hub.stop();

        this.$timeout(function () {
            deffered.resolve();
        }, 100, false);

        return deffered.promise
    }
}

ngmodule.factory('operatoChatService', ["$rootScope", "$q", "$timeout", function ($rootScope, $q, $timeout) {
    return new OperatorChat($rootScope, $q, $timeout);
}]);

export default OperatorChat;