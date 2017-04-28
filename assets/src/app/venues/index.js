angular.module( '3cc.venues', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'venues', {
		url: '/venues',
		views: {
			"main": {
				controller: 'VenuesCtrl',
				templateUrl: 'venues/index.tpl.html'
			}
		}
	});
}])

.controller( 'VenuesCtrl', [ '$scope', 'titleService', function VenuesController( $scope, titleService ) {
	titleService.setTitle('Venues - Three Corners Collective');
	$scope.date = new Date();
}]);