angular.module( '3cc.dashboard', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		views: {
			"main": {
				controller: 'DashboardCtrl',
				templateUrl: 'dashboard/index.tpl.html'
			}
		}
	});
}])

.controller( 'DashboardCtrl', [ '$scope', 'titleService', function DashboardController( $scope, titleService ) {
	titleService.setTitle('Dashboard - Three Corners Collective');
}]);