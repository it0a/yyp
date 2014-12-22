/*global angular*/
(function () {
    var ShowDirective = function () {
        return {
            templateUrl: 'paste/views/show.html'
        };
    };
    angular.module('paste')
    .directive('pasteShow', ShowDirective);
}());

