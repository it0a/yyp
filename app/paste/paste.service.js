/*global angular, Firebase*/
(function () {
    var PasteService = function ($firebase) {
        var _ref = new Firebase("https://yyp.firebaseio.com/pastes");
        var _sync = $firebase(_ref);
        var _pastes = _sync.$asArray();
        var _getPastes = function () {
            return _pastes;
        };
        var _remove = function (paste) {
            _pastes.$remove(paste);
        };
        var _add = function (paste) {
            _pastes.$add(paste);
        };
        return {
            getPastes: _getPastes,
            remove: _remove,
            add: _add
        };
    };
    PasteService.$inject = ['$firebase'];
    angular.module('paste')
    .service('PasteService', PasteService);
}());
