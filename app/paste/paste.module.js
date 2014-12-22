/*global angular*/
(function () {
    angular.module("paste", ["ui.bootstrap", "ui.router", "angularSpinner", "firebase"]);
    angular.module("paste")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/create");
        $stateProvider
        .state('show', {
            url: "/show/:id",
            templateUrl: "paste/partials/show.html",
            controller: "PasteShowCtrl"
        })
        .state('create', {
            url: "/create",
            templateUrl: "paste/partials/create.html"
        });
    });
}());
