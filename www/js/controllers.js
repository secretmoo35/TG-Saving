angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {


    $scope.login = function() {
        $location.path('/app/dashboard');
    }
})
