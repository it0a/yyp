/*global _, angular, Firebase*/
(function () {
    var PasteService = function ($firebase) {
        var _ref = new Firebase("https://yyp.firebaseio.com/pastes");
        var _sync = $firebase(_ref);
        var _pastes = _sync.$asArray();
        var _getPastes = function () {
            return _pastes.$loaded();
        };
        var _remove = function (paste) {
            _pastes.$remove(paste);
        };
        var _add = function (paste) {
            _pastes.$add(paste);
        };
        var _get = function (id) {
            return _.find(_pastes, function (x) {
                return x.$id === id;
            });
        };
        return {
            getPastes: _getPastes,
            remove: _remove,
            get: _get,
            add: _add
        };
    };
    PasteService.$inject = ['$firebase'];
    angular.module('paste')
    .service('PasteService', PasteService);
}());
