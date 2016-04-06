myApp.controller('EvaluCtrl',
    function($scope, $ionicModal, $timeout, $location, $http, $state, $stateParams, $filter) {

        $scope.answers = [{
                "ID": 1,
                "question": "1. คุณอายุเท่าไหร่",
                "answer": ["ก. 20 - 30", "ข. 31 - 40", "ค. 41 - 50", "ง. 51 ขึ้นไป"]
            // }, {
            //     "ID": 2,
            //     "question": "2. คุณมีรายได้ต่อเดือนเท่าไหร่",
            //     "answer": ["ก. 9,000 - 15,000", "ข. 15,001 - 20,000", "ค. 20,001 - 30,000", "ง. 31,000 ขึ้นไป"]
            }],
            // console.log($scope.answers);
        $scope.selectAns = function(ans) {
            $scope.ans = ans;
            $state.go('app.evalu-do', { ans: $scope.ans });
        }
        $scope.showAns = function() {

            $scope.answerS = $stateParams;

        }
        $scope.sendAnswer = function(item) {
            $state.go('app.evalu-ans', { answer: item.ID });
        }
        $scope.getAnswer = function() {

            var IDs =  parseInt($stateParams.answer);
            $scope.getAnswerByID = $filter('filter')($scope.answers, function(e) {
                return e.ID === IDs; });

            // If you want to see the result, just check the log
            console.log($scope.getAnswerByID[0].question);
        }
    })
