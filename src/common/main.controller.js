/*global angular*/
(function () {
    var MainCtrl = function ($scope) {
        $scope.text = '';
        $scope.submit = function () {
            console.log("OK");
        };
    };
    MainCtrl.$inject = ['$scope'];
    angular.module("yyp")
    .controller("MainCtrl", MainCtrl);
}());
