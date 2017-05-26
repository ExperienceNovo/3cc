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
		},
		resolve: {
            merch: ['MerchModel', function(MerchModel) {
				return MerchModel.getSome(100,0, 'createdAt DESC');
            }], 
            venues: ['VenueModel', function(VenueModel) {
				return VenueModel.getAll();
            }]
        }
	});
}])

.controller( 'DashboardCtrl', [ '$scope', 'titleService', 'merch', 'MerchModel', 'venues', 'VenueModel', function DashboardController( $scope, titleService, merch, MerchModel, venues, VenueModel ) {
	titleService.setTitle('Dashboard - Three Corners Collective');

	$scope.merch = merch;
	$scope.newMerch = {};
    $scope.newVenue = {};
	$scope.venues = venues;

	$scope.createMerch = function() {
        $scope.newMerch.user = config.currentUser.id;
        MerchModel.create($scope.newMerch).then(function(model) {
            $scope.newMerch = {};
        });
    };

	$scope.createVenue = function() {
        $scope.newVenue.user = config.currentUser.id;
        VenueModel.create($scope.newVenue).then(function(model) {
            $scope.newVenue = {};
        });
    };




}]);