var myapp = angular.module('myapp',['ngRoute','ngAnimate','ui.bootstrap']);


myapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller:'myappController',
    })
    .when("/page1", {
        templateUrl : "views/page1.html"
    })
    .when("/page2", {
        templateUrl : "views/page2.html",
        controller:'myappController'
    })
    .when("/page3", {
        templateUrl : "views/page3.html"

    });
});

angular.module('myModule', ['ui.bootstrap']);

myapp.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});

myapp.directive('mainManu',function(){
  return {
    restrict:'E',
    scope:{
      data:'=',
      title:'='
    },
    templateUrl:"mainMenu.html"
    // controller: function($scope){}
  }
})

myapp.directive('projectBlock',function(){
  return {
    restrict:'E',
    scope:{
      data:'=',
      title:'='
    },
    templateUrl:"projectBlock.html"
    // controller: function($scope){}
  }
})

myapp.controller('myappController',['$scope',function($scope){
  $scope.data = [
    {
      project: "ping-pong",
      url:'ksowkpos'
    },
    {
      project: "ping-pong",
      url:'ksowkpos'
    }
  ]

  $scope.animateBlocks= function(){
    console.log('animation will start');
  }
}])
