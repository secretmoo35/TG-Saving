myApp.controller('AboutCtrl', function($scope, $ionicModal, $timeout, $location, $http, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/about-condition.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.about_condition_modal = modal;
    });


    $scope.showCondition = function() {
        $scope.about_condition_modal.show();
    };
})
