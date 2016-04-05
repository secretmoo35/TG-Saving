myApp.controller('dashboardCtrl', function($scope, $ionicModal, $timeout, $location, $http) {

    $scope.deposit = true;
    $scope.deposits = function() {
        $scope.deposit = true;

        $scope.interment = false;
        $scope.share = false;
        $scope.loan = false;
        $scope.guaratee = false;
    }
    $scope.interments = function() {
        $scope.interment = true;

        $scope.deposit = false;
        $scope.share = false;
        $scope.loan = false;
        $scope.guaratee = false;
    }
    $scope.loans = function() {
        $scope.loan = true;

        $scope.interment = false;
        $scope.deposit = false;
        $scope.share = false;
        $scope.guaratee = false;
    }
    $scope.shares = function() {
        $scope.share = true;

        $scope.interment = false;
        $scope.deposit = false;
        $scope.loan = false;
        $scope.guaratee = false;
    }
    $scope.guaratees = function() {
    	$scope.guaratee = true;

        $scope.interment = false;
        $scope.deposit = false;
        $scope.share = false;
        $scope.loan = false;
    }
})
