angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

    $scope.loginMenu = "";
    $scope.login = function() {
        $location.path('/app/dashboard');
        $scope.loginMenu = true;
    }
    $scope.register = function() {
        $location.path('/register');
    }
    $scope.gotologin = function() {
        $location.path('/app/login');
    }
    $scope.menuLogin = function() {
        $scope.loginMenu;
    }
})
