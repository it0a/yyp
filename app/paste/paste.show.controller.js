/*global angular, Firebase*/
(function () {
    var PasteShowCtrl = function ($scope, $stateParams, PasteService) {
        $scope.paste = PasteService.get($stateParams.id);
    };
    PasteShowCtrl.$inject = ['$scope', '$stateParams', 'PasteService'];
    angular.module("paste")
    .controller("PasteShowCtrl", PasteShowCtrl);
}());
