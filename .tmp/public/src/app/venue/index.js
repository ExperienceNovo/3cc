angular.module( '3cc.venue', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'venue', {
		url: '/venue/:path',
		views: {
			"main": {
				controller: 'VenueCtrl',
				templateUrl: 'venue/index.tpl.html'
			}
		}
	});
}])

.controller( 'VenueCtrl', [ '$scope', 'titleService', function VenueController( $scope, titleService ) {
	titleService.setTitle('Venue - Three Corners Collective');
	$scope.date = new Date();
}]);