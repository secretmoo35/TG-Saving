myApp.controller('FeedCtrl', function($scope, $ionicModal, $timeout, $location, $http) {


    $scope.loadFeed = function() {
        $scope.feedData = "";
        $http.get('database.json')
            .then(function(response) {
                $scope.feedData = response.data.posts;
                console.log($scope.feedData);
            });
    }

})
