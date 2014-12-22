/*global angular*/
(function () {
    angular.module("paste", ["ui.bootstrap", "ui.router", "angularSpinner", "ngSanitize", "hljs", "firebase"]);
    angular.module("paste")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/messages");
        $stateProvider
        .state('messages', {
            url: "/messages",
            templateUrl: "paste/partials/messages.html"
        })
        .state('show', {
            url: "/show/:id",
            templateUrl: "paste/partials/show.html",
            controller: "PasteShowCtrl"
        })
        .state('create', {
            url: "/create",
            templateUrl: "paste/partials/create.html"
        });
    })
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });
}());
