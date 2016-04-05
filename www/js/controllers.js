angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $stateParams) {

    $scope.password = "";
    $scope.login = function(username, password) {
        if (username == "test") {
            if (password == "123456") {
                $scope.password = password;
                $location.path('/app/dashboard');

            } else {
                alert("ชื่อผู้ใช้หรือพาสเวิดร์ไม่ถูกต้อง");
            }
        } else {
            alert("ชื่อผู้ใช้หรือพาสเวิดร์ไม่ถูกต้อง");
        }
    }
    $scope.register = function() {
        $location.path('/register');
    }
    $scope.gotologin = function() {
        $location.path('/app/login');
    }
    $scope.menuLogin = function() {

        $scope.loginMenu = false;

    }


})
