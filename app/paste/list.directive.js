/*global angular*/
(function () {
    var ListDirective = function (PasteService) {
        return {
            scope: {},
            link: function (scope, element, attrs) {
                scope.loaded = false;
                PasteService.getPastes().then(function (data) {
                    scope.pastes = data;
                    scope.loaded = true;
                });
                scope.remove = function (paste) {
                    PasteService.remove(paste);
                };
            },
            templateUrl: 'paste/views/list.html'
        };
    };
    ListDirective.$inject = ['PasteService'];
    angular.module('paste')
    .directive('pasteList', ListDirective);
}());
