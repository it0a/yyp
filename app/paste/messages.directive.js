/*global angular*/
(function () {
    var MessagesDirective = function (PasteService) {
        return {
            scope: {},
            link: function (scope, element, attrs) {
                scope.user = '';
                scope.message = '';
                scope.loaded = false;
                scope.messages = [];
                PasteService.getMessages().then(function (data) {
                    scope.messages = data;
                    scope.loaded = true;
                });
                scope.add = function () {
                    PasteService.addMessage({
                        user: scope.user,
                        message: scope.message
                    });
                    scope.message = '';
                };
            },
            templateUrl: 'paste/views/messages.html'
        };
    };
    MessagesDirective.$inject = ['PasteService'];
    angular.module('paste')
    .directive('pasteMessages', MessagesDirective);
}());

