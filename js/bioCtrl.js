angular.module('assessment').controller('bioCtrl', function($scope, mainService, $state){
      $scope.fetch = mainService.getBio($state.params.id)
        .then(function(data){
            $scope.bio = data.data;
          });
})
