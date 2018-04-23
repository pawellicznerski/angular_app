
(function(){
  
  angular.module('myapp');

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

})
