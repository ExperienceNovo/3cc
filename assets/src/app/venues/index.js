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
		},
		resolve: {
            venues: ['VenueModel', function(VenueModel) {
				return VenueModel.getSome(100, 0, 'createdAt DESC', {});
            }]
        }
	});
}])

.controller( 'VenuesCtrl', [ '$scope', 'config', 'titleService', 'VenueModel', 'venues', function VenuesController( $scope, config, titleService, VenueModel, venues ) {
	titleService.setTitle('Venues - Three Corners Collective');
	$scope.currentUser = config.currentUser;
	$scope.venues = venues;
    $scope.newVenue = {};

    console.log(venues)

	$scope.createVenue = function() {
        $scope.newVenue.user = config.currentUser.id;
        VenueModel.create($scope.newVenue).then(function(model) {
            $scope.newVenue = {};
        });
    };

}]);