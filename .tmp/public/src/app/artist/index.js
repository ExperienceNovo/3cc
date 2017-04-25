angular.module( '3cc.artist', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'artist', {
		url: '/artist/:path',
		views: {
			"main": {
				controller: 'ArtistCtrl',
				templateUrl: 'artist/index.tpl.html'
			}
		}
	});
}])

.controller( 'ArtistCtrl', [ '$scope', 'titleService', function ArtistController( $scope, titleService ) {
	titleService.setTitle('Artist - Three Corners Collective');
	$scope.date = new Date();
}]);