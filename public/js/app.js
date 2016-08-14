var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index',
            controller: 'IndexCtrl'
        })
        .when('/addPost', {
            templateUrl: 'partials/addPost',
            controller: 'AddPostCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);

}]);

app.controller('AddPostCtrl', ['$scope', function($scope) {

}]);
