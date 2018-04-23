(function() {

angular
  .module('myapp')
  .controller('myappController',['$scope']);

  function myappController($scope){
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
  };

});
