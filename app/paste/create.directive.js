/*global angular*/
(function () {
    var CreateDirective = function () {
        return {
            templateUrl: 'paste/views/create.html'
        };
    };
    angular.module('paste')
    .directive('pasteCreate', CreateDirective);
}());

