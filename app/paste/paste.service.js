/*global _, angular, Firebase*/
(function () {
    var PasteService = function ($firebase) {
        var _ref = new Firebase("https://yyp.firebaseio.com/pastes");
        var _messagesRef = new Firebase("https://yyp.firebaseio.com/messages");
        var _sync = $firebase(_ref);
        var _messagesSync = $firebase(_messagesRef);
        var _pastes = _sync.$asArray();
        var _messages = _messagesSync.$asArray();
        var _getPastes = function () {
            return _pastes.$loaded();
        };
        var _getMessages = function () {
            return _messages.$loaded();
        };
        var _remove = function (paste) {
            _pastes.$remove(paste);
        };
        var _add = function (paste) {
            paste.time = moment.utc().format();
            _pastes.$add(paste);
        };
        var _addMessage = function (message) {
            message.time = moment.utc().format();
            _messages.$add(message);
        };
        var _archiveMessages = function () {
            _add({
                title: "Chat " + moment().format("MM/DD/YYYY hh:mm:ss").toString(),
                message: _.reduce(_messages, function (sum, message) {
                    return sum + "[" + moment(message.time).format("MM/DD/YYYY hh:mm:ss").toString() + "] " + message.user + ": " + message.message + "\n";
                }, "")
            });
            _messagesRef.remove();
        };
        var _get = function (id) {
            return _.find(_pastes, function (x) {
                return x.$id === id;
            });
        };
        return {
            getPastes: _getPastes,
            getMessages: _getMessages,
            addMessage: _addMessage,
            archiveMessages: _archiveMessages,
            remove: _remove,
            get: _get,
            add: _add
        };
    };
    PasteService.$inject = ['$firebase'];
    angular.module('paste')
    .service('PasteService', PasteService);
}());
