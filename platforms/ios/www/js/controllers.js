angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $ionicModal, Home) {
    // Form data
    $scope.profileData = {};
    
    $scope.today = Home.getToday();
    $scope.Name = localStorage.getItem('Name');
    if ($scope.Name===null || $scope.Name==="") $scope.Name = "John Doe";
    $scope.BirthDate = localStorage.getItem('BirthDate');
    $scope.birthstone = Home.getBirthstone($scope.BirthDate);
    $scope.numerology = Home.getNumerology($scope.BirthDate);

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/profile.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeProfile = function() {
        $scope.modal.hide();
    };
    // Open the login modal
    $scope.openProfile = function() {
        $scope.modal.show();
    };
    $scope.saveProfile = function(Name, BirthDate) {
        BirthDate = +new Date(BirthDate);
        localStorage.setItem('Name',Name);
        localStorage.setItem('BirthDate',BirthDate);
        $scope.Name = Name;
        $scope.BirthDate = BirthDate;
        $scope.birthstone = Home.getBirthstone($scope.BirthDate);
        $scope.numerology = Home.getNumerology($scope.BirthDate);
        $scope.closeProfile();
    }    
})

.controller('DiamondsCtrl', function($scope, Diamonds) {
    $scope.diamonds = Diamonds.all();
})

.controller('DiamondsPageCtrl', function($scope, $stateParams, Diamonds) {
    $scope.diamond = Diamonds.get($stateParams.diamondId);
})

.controller('GemstonesCtrl', function($scope, Gemstones) {
    $scope.gemstones = Gemstones.all();
})

.controller('GemstonesPageCtrl', function($scope, $stateParams, Gemstones) {
    $scope.gemstone = Gemstones.get($stateParams.gemstoneId);
    $scope.browser = function(query){
        window.open('http://classicjewellerygroup.com/index.php/catalogsearch/result/?q='+query, '_system');
    }
})

.controller('ApplicationsCtrl', function($scope, Applications) {
    $scope.applications = Applications.all();
})

.controller('ApplicationsPageCtrl', function($scope, $stateParams, Home, Applications) {
    $scope.application = Applications.get($stateParams.applicationId);
    $scope.birthstones = Home.allBirthstone();
    $scope.today = Home.allToday();
    $scope.numerology = Home.allNumerology();
})

.controller('AboutCtrl', function($scope, $cordovaInAppBrowser) {
    
  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  document.addEventListener(function () {
    $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });


    $cordovaInAppBrowser.close();

  }, false);

  $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert CSS via code / file
    $cordovaInAppBrowser.insertCSS({
      code: 'body {background-color:blue;}'
    });

    // insert Javascript via code / file
    $cordovaInAppBrowser.executeScript({
      file: 'script.js'
    });
  });

  $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){

  });    
    
});
