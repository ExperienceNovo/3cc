angular.module( '3cc.event', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'event', {
		url: '/event/:path',
		views: {
			"main": {
				controller: 'EventCtrl',
				templateUrl: 'event/index.tpl.html'
			}
		}
	});
}])

.controller( 'EventCtrl', [ '$scope', 'titleService', function EventController( $scope, titleService ) {
	titleService.setTitle('Event - Three Corners Collective');
}]);