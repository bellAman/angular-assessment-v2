angular.module('assessment').controller('mainCtrl', function($scope, mainService){
//  $scope.test= "This is Amanda"
    $scope.getPets = mainService.getinfo()
    .then(function(data){
      $scope.pets = data.data
    })
    
    $scope.revealer = function(){
        $scope.show = !$scope.show;
        $scope.hide = !$scope.hide;
      }
})
