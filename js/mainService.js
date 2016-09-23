angular.module('assessment').service('mainService', function($http, $q){
    this.getinfo = function(){
      var defer = $q.defer();
        $http({
          method: "GET",
          url: "http://practiceapi.devmounta.in/pets"
        }).then(function(response){
          defer.resolve(response);
        })
        return defer.promise
  }

  this.getBio = function(id){
      var defer = $q.defer();
         $http({
          method: "GET",
          url:"http://practiceapi.devmounta.in/pets/" + id
        }).then(function(response){
          defer.resolve(response);
        })
        return defer.promise;
      }

})
