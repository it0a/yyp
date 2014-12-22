/*global angular*/
(function () {
    var ListDirective = function () {
        return {
            templateUrl: 'paste/views/list.html'
        };
    };
    angular.module('paste')
    .directive('pasteList', ListDirective);
}());
