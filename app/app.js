var myapp = angular.module('myapp',['ngRoute']);

myapp.config(['$routeProvider',function($routeProvider){

  $routeProvider.when('/!',{
      templateurl:'views/home.html',
      controller:'myappController'
    }).when('#!page1',{
      templateurl:'views/page1.html'
    }).when('#!page2',{
      templateurl:'views/page2.html'
    }).when('#!page3',{
      templateurl:'views/page3.html'
    }).when('#!page4',{
      templateurl:'views/page4.html'
    }).otherwise({
      redirectTo:'/home'
    });

}]);

myapp.controller('myappController',['$scope',function($scope){

}])
