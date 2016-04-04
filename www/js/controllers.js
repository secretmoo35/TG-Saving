angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {


    $scope.login = function() {
        $location.path('/app/dashboard');
    }
    $scope.register = function(){
    	$location.path('/register');	
    }
        $scope.gotologin = function(){
    	$location.path('/app/login');	
    }
})
