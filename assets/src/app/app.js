angular.module( '3cc', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'duScroll',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    '3cc.home',
    '3cc.about',
    '3cc.artist',
    '3cc.artists',
    '3cc.audiences',
    '3cc.dashboard',
    '3cc.event',
    '3cc.footer',
    '3cc.login',
    '3cc.nav',
    '3cc.register',
    '3cc.venue',
    '3cc.venues',
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            // pass through to let the web server handle this request
            window.location = $location.$$absUrl;
        }
    });
    $locationProvider.html5Mode(true);
}])

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl',['$scope', 'config', '$rootScope', function AppCtrl ( $scope, config, $rootScope) {
    config.currentUser = window.currentUser;
}]);

