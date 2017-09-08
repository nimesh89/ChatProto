import ngmodule from "./app"
import hub from "./hub.visitor"

ngmodule.controller("visitorCtrl", ["$scope", "visitorChatService", "$state", function ($scope, visitorChatService, $state) {
    $scope.vi = {};
    $scope.startHub = function () {
        visitorChatService.start($scope.vi.viname)
            .then(function () {
                $state.go("home.chat", { name: $scope.vi.viname })
                $scope.vi.ChatService = true;;
            });
    }

    $scope.stopHub = function () {
        visitorChatService.stop()
            .then(function () {
                $scope.op = {};
                $state.go("home");
            });
    }
}]);

ngmodule.controller("visitorChatCtrl", ["$scope", "operatoChatService", "$state", function ($scope, operatoChatService, $state) {

}]);