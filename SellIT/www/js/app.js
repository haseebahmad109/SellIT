var app = angular.module('sellit', ['ionic', 'controllers', 'services','models'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: "/login",
      controller: 'LoginCtrl',
      templateUrl: "templates/login.html"
    });

  $urlRouterProvider.otherwise('/login');

});

