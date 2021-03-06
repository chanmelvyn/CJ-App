// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
    });
})

//$ionicPlatform.ready(function() {
//  $cordovaPlugin.someFunction().then(success, error);
//});

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.diamonds', {
      url: '/diamonds',
      views: {
        'tab-diamonds': {
          templateUrl: 'templates/tab-diamonds.html',
          controller: 'DiamondsCtrl'
        }
      }
    })
    .state('tab.diamonds-page', {
      url: '/diamonds/:diamondId',
      views: {
        'tab-diamonds': {
          templateUrl: 'templates/page-diamonds.html',
          controller: 'DiamondsPageCtrl'
        }
      }
    })

  .state('tab.gemstones', {
      url: '/gemstones',
      views: {
        'tab-gemstones': {
          templateUrl: 'templates/tab-gemstones.html',
          controller: 'GemstonesCtrl'
        }
      }
    })
    .state('tab.gemstones-page', {
      url: '/gemstones/:gemstoneId',
      views: {
        'tab-gemstones': {
          templateUrl: 'templates/page-gemstones.html',
          controller: 'GemstonesPageCtrl'
        }
      }
    })

  .state('tab.applications', {
      url: '/applications',
      views: {
        'tab-applications': {
          templateUrl: 'templates/tab-applications.html',
          controller: 'ApplicationsCtrl'
        }
      }
    })
    .state('tab.applications-page', {
      url: '/applications/:applicationId',
      views: {
        'tab-applications': {
          templateUrl: 'templates/page-applications.html',
          controller: 'ApplicationsPageCtrl'
        }
      }
    })
    
  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
