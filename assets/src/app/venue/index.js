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
            venue: ['$stateParams','VenueModel', function($stateParams, VenueModel) {
				return VenueModel.getSome(1, 0, 'createdAt DESC', {urlTitle: $stateParams.path});
				//return null;
            }]
        }
	});
}])

.controller( 'VenueCtrl', [ '$scope', 'titleService', 'venue', function VenueController( $scope, titleService, venue ) {
	$scope.venue = venue[0];
	titleService.setTitle($scope.venue.title + ' - Three Corners Collective');
}]);