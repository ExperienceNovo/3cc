angular.module( '3cc.register', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'register', {
		url: '/register',
		views: {
			"main": {
				controller: 'RegisterCtrl',
				templateUrl: 'register/index.tpl.html'
			}
		}
	});
}])

.controller( 'RegisterCtrl', ['$scope', 'config', 'titleService', function RegisterController( $scope, config, titleService ) {
	titleService.setTitle('Register - Three Corners Collective');
	$scope.currentUser = config.currentUser;
}]);
