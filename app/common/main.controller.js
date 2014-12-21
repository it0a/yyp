/*global angular, Firebase*/
(function () {
    var MainCtrl = function ($scope) {
        $scope.test = "Test";
    };
    MainCtrl.$inject = ['$scope'];
    angular.module("yyp")
    .controller("MainCtrl", MainCtrl);
}());
