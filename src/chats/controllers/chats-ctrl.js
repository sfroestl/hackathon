(function (sandbox) {
    'use strict';

    function ChatsCtrl($scope) {
        $scope.chats = [
            {id: 123, title: 'Chat mit Jogga'},
            {id: 123, title: 'Chat mit Franzi'}
        ];
    }

    sandbox.angular.module('app.chats.chatsCtrl', [])
        .controller('ChatsCtrl', ChatsCtrl);
}(this));