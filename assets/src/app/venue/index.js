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
		},
		resolve: {
            venue: ['VenueModel', function(VenueModel) {
				//return VenueModel.getByUrl();
				return null;
            }]
        }
	});
}])

.controller( 'VenueCtrl', [ '$scope', 'titleService', 'venue', function VenueController( $scope, titleService, venue ) {
	$scope.venue = venue;
	titleService.setTitle('Venue - Three Corners Collective');
}]);