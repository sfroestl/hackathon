(function (sandbox) {
    'use strict';

    sandbox.angular.module('app', [
        'ui.router',
        'app.chats.chatsCtrl',
        'app.chats.chatDetailCtrl'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/chats');

        $stateProvider
            .state('app', {
                'abstract': true,
                templateUrl: 'src/app/app.tpl.html'
            })
            .state('app.chats', {
                url: '/chats',
                templateUrl: 'src/chats/views/chats.tpl.html',
                controller: 'ChatsCtrl'
            })
            .state('app.chats.details', {
                url: '/:id',
                views: {
                    'details': {
                        templateUrl: 'src/chats/views/chat-details.tpl.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            });
    });

}(this));



// .state('app.chats', {
//     url: '/chats',
//     templateUrl: 'src/chats/views/chats.tpl.html',
//     controller: function ($scope) {
//         $scope.chats = [{id: 123, title: 'CHat234'}];
//     }
// })
// .state('app.chats.chat', {
//     url: '/:id',
//     templateUrl: 'src/chats/views/chat-details.tpl.html',
//     controller: function ($scope) {

//     }
// })
