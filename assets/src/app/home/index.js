angular.module( '3cc.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
}])

.controller( 'HomeCtrl', [ '$location', '$scope', 'config', 'titleService', function HomeController( $location, $scope, config, titleService ) {
	titleService.setTitle('Three Corners Collective');
	$scope.currentUser = config.currentUser;
}]);