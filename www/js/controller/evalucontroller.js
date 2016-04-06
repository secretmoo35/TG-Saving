myApp.controller('EvaluCtrl', function($scope, $ionicModal, $timeout, $location, $http,$state,$stateParams) {

	$scope.ans = "s";
    $scope.answers = { "question ": "1.คุณอายุเท่าไหร่", "answer": ["ก. 20 - 30","ข. 31 - 40","ค. 41 - 50","ง. 51 ขึ้นไป"] },
    
    $scope.selectAns = function(ans){
    	$scope.ans = ans;
    	$state.go('app.evalu-do',{ans : $scope.ans});
    }
    $scope.showAns = function(){

    	$scope.answer = $stateParams;

    }
    $scope.showAns();
})
