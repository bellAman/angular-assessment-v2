angular.module('assessment').directive('pets', function(){
  return {
    restrict:'AE',
    templateUrl:"./views/pet-tmpl.html",
    scope: {
      pet:"=pets"
    },
    controller:'mainCtrl'
  }
})
