/*global angular*/
(function () {
    var CreateDirective = function (PasteService) {
        return {
            scope: {},
            link: function (scope, element, attrs) {
                scope.title = '';
                scope.message = '';
                scope.submit = function () {
                    PasteService.add({
                        title: scope.title,
                        message: scope.message
                    });
                };
            },
            templateUrl: 'paste/views/create.html'
        };
    };
    CreateDirective.$inject = ['PasteService'];
    angular.module('paste')
    .directive('pasteCreate', CreateDirective);
}());

