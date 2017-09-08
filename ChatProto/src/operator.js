import ngmodule from "./app"
import hub from "./hub.operator"

ngmodule.controller("operatorCtrl", ["$scope", "operatoChatService", "$state", function ($scope, operatoChatService, $state) {
    $scope.op = {};
    $scope.startHub = function () {
        operatoChatService.start($scope.op.opname)
            .then(function () {
                $state.go("home.chat", { name: $scope.op.opname })
                $scope.op.hubStarted = true;;
            });
    }

    $scope.stopHub = function () {
        operatoChatService.stop()
            .then(function () {
                $scope.op = {};
                $state.go("home");
            });
    }
}]);

ngmodule.controller("opChatCtrl", ["$scope", "operatoChatService", "$state", function ($scope, operatoChatService, $state) {
    
}]);