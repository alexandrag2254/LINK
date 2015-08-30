'use strict';

// Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        // Application routing definition
        $routeProvider.
        when('/', {
            // templateUrl: 'views/index.html',
            // controller: 'IndexController'
            templateUrl: 'views/chapter_profile.html',
            controller: 'ChapterProfileController'
        }).
        when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'AuthenticationController'
        }).
        when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'AuthenticationController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);