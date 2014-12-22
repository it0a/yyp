/*global angular, Firebase*/
(function () {
    var PasteCtrl = function ($scope, PasteService) {
        $scope.submit = function () {
            PasteService.add({
                title: $scope.title,
                message: $scope.message
            });
        };
    };
    PasteCtrl.$inject = ['$scope', 'PasteService'];
    angular.module("paste")
    .controller("PasteCtrl", PasteCtrl);
}());
