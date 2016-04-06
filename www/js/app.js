// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var myApp = angular.module('starter', ['ionic', 'starter.controllers'])

myApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

myApp.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('login', {
            url: '/login',

            templateUrl: 'templates/login.html',
            controller: 'AppCtrl'

        })
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                'menuContent': {
                    templateUrl: 'templates/dashboard.html',
                    controller: 'dashboardCtrl'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'menuContent': {
                    templateUrl: 'templates/about.html'
                }
            }
        })
        .state('app.calculator', {
            url: '/calculator',
            views: {
                'menuContent': {
                    templateUrl: 'templates/calculator.html'
                }
            }
        })
        .state('app.capital-stock', {
            url: '/capital-stock',
            views: {
                'menuContent': {
                    templateUrl: 'templates/capital-stock.html'
                }
            }
        })
        .state('app.deposit', {
            url: '/deposit',
            views: {
                'menuContent': {
                    templateUrl: 'templates/deposit.html'
                }
            }
        })
        .state('app.download', {
            url: '/download',
            views: {
                'menuContent': {
                    templateUrl: 'templates/download.html'
                }
            }
        })
        .state('app.evalu', {
            url: '/evalu',
            views: {
                'menuContent': {
                    templateUrl: 'templates/evalu.html',
                    controller: 'EvaluCtrl'
                }
            }
        })
        .state('app.faq', {
            url: '/faq',
            views: {
                'menuContent': {
                    templateUrl: 'templates/faq.html'
                }
            }
        })
        .state('app.feed', {
            url: '/feed',
            views: {
                'menuContent': {
                    templateUrl: 'templates/feed.html',
                    controller: 'FeedCtrl'
                }
            }
        })
        .state('app.guarantee', {
            url: '/guarantee',
            views: {
                'menuContent': {
                    templateUrl: 'templates/guarantee.html'
                }
            }
        })
        .state('app.interment', {
            url: '/interment',
            views: {
                'menuContent': {
                    templateUrl: 'templates/interment.html'
                }
            }
        })
        .state('app.loan', {
            url: '/loan',
            views: {
                'menuContent': {
                    templateUrl: 'templates/loan.html'
                }
            }
        })
        .state('app.setting', {
            url: '/setting',
            views: {
                'menuContent': {
                    templateUrl: 'templates/setting.html'
                }
            }
        })
        .state('register', {
            url: '/register',

            templateUrl: 'templates/register.html',
            controller: 'AppCtrl'


        })
        .state('app.depositdetail', {
            url: '/depositdetail',
            views: {
                'menuContent': {
                    templateUrl: 'templates/depositdetail.html',
                    controller: 'moneyCtrl'
                }
            }
        })
        .state('app.evalu-do', {
            url: '/evalu-do:ans',
            views: {
                'menuContent': {
                    templateUrl: 'templates/evalu-do.html',
                    controller: 'EvaluCtrl'
                }
            }
        })
        .state('app.evalu-ans', {
            url: '/evalu-ans:answer',
            views: {
                'menuContent': {
                    templateUrl: 'templates/evalu-ans.html',
                    controller: 'EvaluCtrl'
                }
            }
        })
        .state('app.pdf', {
            url: '/pdf',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pdf.html',
                }
            }
        })
        .state('app.map', {
            url: '/map',
            views: {
                'menuContent': {
                    templateUrl: 'templates/map.html',
                    controller: 'mapCtrl'
                }
            }
        })
        .state('app.capital-stockdetail', {
            url: '/capital-stockdetail',
            views: {
                'menuContent': {
                    templateUrl: 'templates/capital-stockdetail.html',
                    controller: 'moneyCtrl'
                }
            }
        })
        .state('app.loandetail', {
            url: '/loandetail',
            views: {
                'menuContent': {
                    templateUrl: 'templates/loandetail.html',
                    controller: 'moneyCtrl'
                }
            }
        })
        .state('app.guaranteedetail', {
            url: '/guaranteedetail',
            views: {
                'menuContent': {
                    templateUrl: 'templates/guaranteedetail.html',
                    controller: 'moneyCtrl'
                }
            }
        })
        .state('app.intermentdetail', {
            url: '/intermentdetail',
            views: {
                'menuContent': {
                    templateUrl: 'templates/intermentdetail.html',
                    controller: 'moneyCtrl'
                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');


    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
});
