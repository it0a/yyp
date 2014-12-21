/*global angular, Firebase*/
(function () {
    var PasteCtrl = function ($scope, PasteService) {
        $scope.pastes = PasteService.getPastes();
        $scope.title = '';
        $scope.message = '';
        $scope.submit = function () {
            PasteService.add({
                title: $scope.title,
                message: $scope.message
            });
        };
        $scope.remove = function (paste) {
            PasteService.remove(paste);
        };
    };
    PasteCtrl.$inject = ['$scope', 'PasteService'];
    angular.module("paste")
    .controller("PasteCtrl", PasteCtrl);
}());
