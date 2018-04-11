var myapp = angular.module('myapp',['ngRoute']);


myapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/page1.html"
    })
    .when("/page1", {
        templateUrl : "views/page2.html"
    })
    .when("/page2", {
        templateUrl : "views/page3.html"
    })
    .when("/page3", {
        templateUrl : "views/page4.html"
    });
});


myapp.controller('myappController',['$scope',function($scope){
  $scope.data = {
    {
      project: "ping-pong",
      url:'ksowkpos'
    },
    {
      project: "ping-pong",
      url:'ksowkpos'
    }
  }

  $scope.animateBlocks= function(){
    console.log('animation will start');
  }
}])
