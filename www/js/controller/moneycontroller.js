myApp.controller('moneyCtrl', function($scope, $ionicModal, $timeout, $location, $http) {

    $scope.onemonth = true;
    $scope.onemonthz = function() {
        $scope.onemonth = true;
        $scope.threemonths = false;
        $scope.sixmonths = false;
    }
        $scope.threemonthsz = function() {
        $scope.onemonth = false;
        $scope.threemonths = true;
        $scope.sixmonths = false;
    }
        $scope.sixmonthsz = function() {
        $scope.onemonth = false;
        $scope.threemonths = false;
        $scope.sixmonths = true;
    }
})


