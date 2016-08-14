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
        .when('/readPost/:id',{
          templateUrl:'partials/readPost',
          controller:'ReadPostCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);

}]);
app.controller('ReadPostCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  $http.get('/api/post/'+$routeParams.id);

}]);

app.controller('IndexCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.test = 'aaaa';
    $http.get('/api/posts').then(function(res) {
        console.log(res);
        $scope.posts = res.data;
    });
}]);

app.controller('AddPostCtrl', ['$scope', '$http','$location', function($scope, $http,$location) {
    $scope.submitPost = function() {
        $http.post('/api/post', $scope.form)
            .success(function(data) {
                $location.path('/');
            });
    };
}]);
