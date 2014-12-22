/*global angular*/
(function () {
    angular.module("paste", ["ui.bootstrap", "ui.router", "firebase"]);
    angular.module("paste")
    .config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/show");
        //
        // Now set up the states
        $stateProvider
        .state('show', {
            url: "/show",
            templateUrl: "paste/partials/show.html"
        })
        .state('create', {
            url: "/create",
            templateUrl: "paste/partials/create.html"
        });
    });
}());
