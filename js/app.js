angular.module('assessment', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./views/home.html"
            })
            .state('about',{
                url:'/about',
                templateUrl: "./views/about.html"
            })
            .state('blog',{
                url:'/blog',
                templateUrl: "./views/blog.html"
            })
            .state('pets',{
                url:'/pets',
                controller: 'mainCtrl',
                templateUrl: "./views/pets.html"
            })
            .state('bio',{
                url:'/bio/:id',
                controller: 'bioCtrl',
                templateUrl: "./views/pet-bio.html"
            })

        $urlRouterProvider.otherwise('/');

  });
