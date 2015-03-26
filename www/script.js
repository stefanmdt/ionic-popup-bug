angular.module('myApp', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    })
    .state('app.tabs', {
      url: '/',
      views: {
        'menuContent':{
          templateUrl: 'tabs.html'
        }
      }
    })
    .state('app.tabs.home', {
      url: '/home',
      views: {
        'home-tab':{
          templateUrl: 'home.html',
          controller: 'HomeController'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent':{
          templateUrl: 'about.html',
          controller: 'AboutController'
        }
      }
    });
    $urlRouterProvider.otherwise('/app/');
})
.controller('AppCtrl',function($scope, $location) {
  console.log("App Ctrl");
})
.controller('HomeController',function($scope, $location, $ionicPopup, $timeout) {
    console.log('HomeController');
    $scope.title = "Home Page";
  $scope.entries = [
    {name:"entry one"},
    {name:"entry two"},
    {name:"entry three"},
    {name:"entry four"},
    {name:"entry five"},
    {name:"entry six"},
    {name:"entry seven"},
    {name:"entry eight"}
  ];  
  $scope.data = {};
  $scope.openPopup = function(entry) {
    var myPopup = $ionicPopup.show({
      templateUrl: 'popup.html',
      title: 'Popup',
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          onTap: function (e) {
          } 
        }
      ]
    });
	}
})
.controller('AboutController',function($scope, $location) {
    console.log('AboutController');
    $scope.title = "About Page";
});