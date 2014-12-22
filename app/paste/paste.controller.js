/*global angular, Firebase*/
(function () {
    var PasteCtrl = function ($scope, PasteService) {
    };
    PasteCtrl.$inject = ['$scope', 'PasteService'];
    angular.module("paste")
    .controller("PasteCtrl", PasteCtrl);
}());
