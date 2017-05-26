angular.module( '3cc.audiences', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'audiences', {
		url: '/audiences',
		views: {
			"main": {
				controller: 'AudiencesCtrl',
				templateUrl: 'audiences/index.tpl.html'
			}
		}
	});
}])

.controller( 'AudiencesCtrl', [ '$scope', 'titleService', function AudiencesController( $scope, titleService ) {
	titleService.setTitle('Audiences - Three Corners Collective');
}]);