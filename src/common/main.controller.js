/*global angular, Firebase*/
(function () {
    var MainCtrl = function ($scope, $firebase) {
        var ref = new Firebase("https://yyp.firebaseio.com/pastes");
        var sync = $firebase(ref);
        $scope.pastes = sync.$asArray();
        $scope.title = '';
        $scope.message = '';
        $scope.submit = function () {
            $scope.pastes.$add({
                title: $scope.title,
                message: $scope.message
            });
        };
        $scope.remove = function (paste) {
            $scope.pastes.$remove(paste);
        };
    };
    MainCtrl.$inject = ['$scope', '$firebase'];
    angular.module("yyp")
    .controller("MainCtrl", MainCtrl);
}());
