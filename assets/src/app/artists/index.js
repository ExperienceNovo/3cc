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
		},
		resolve: {
            artists: ['ArtistModel', function(ArtistModel) {
				//return ArtistModel.getSome(100, 0, 'createdAt DESC', {});
				return null;
            }]
        }
	});
}])

.controller( 'ArtistsCtrl', [ '$scope', 'artists', 'titleService', function ArtistsController( $scope, artists, titleService ) {
	titleService.setTitle('Artists - Three Corners Collective');
	$scope.artists = ['matt phillips', 'Drug Store Ghost', 'Age of Sages', 'Biscuits & Groovy', 'the oblations', 'These Weak Lips', 'ty lake', 'Dan Page', 'Jess M']
}]);