angular.module( '3cc.artists', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'artists', {
		url: '/artists',
		views: {
			"main": {
				controller: 'ArtistsCtrl',
				templateUrl: 'artists/index.tpl.html'
			}
		}
	});
}])

.controller( 'ArtistsCtrl', [ '$scope', 'titleService', function ArtistsController( $scope, titleService ) {
	titleService.setTitle('Artists - Three Corners Collective');
	$scope.date = new Date();
}]);