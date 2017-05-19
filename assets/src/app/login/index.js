angular.module( '3cc.login', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/index.tpl.html'
			}
		}
	});
}])

.controller( 'LoginCtrl', ['$scope', 'config', 'titleService', function LoginController( $scope, config, titleService ) {
	titleService.setTitle('Login - Three Corners Collective');
	$scope.currentUser = config.currentUser;
}]);
