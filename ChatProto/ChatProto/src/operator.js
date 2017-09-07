import ngmodule from "./app"
import hub from "./hub.operator"
ngmodule.controller("operatorCtrl", ["$scope", "operatoChatService", "$location", function ($scope, operatoChatService, $location) {
    $scope.startHub = function () {
        operatoChatService.start($location.search.op);
    }
}]);