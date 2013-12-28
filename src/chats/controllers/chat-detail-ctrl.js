(function (sandbox) {
    'use strict';

    function ChatDetailCtrl($scope, $stateParams) {
        console.log($stateParams);
        $scope.chat = {id: 123, title: 'Chat mit Jogga', messages: [
            {time: new Date(), body: 'Hallo'},
            {time: new Date(), body: 'Hi, wie gehts?'},
            {time: new Date(), body: 'Gut danke'}
        ]};
    }

    sandbox.angular.module('app.chats.chatDetailCtrl', [])
        .controller('ChatDetailCtrl', ChatDetailCtrl);

}(this));