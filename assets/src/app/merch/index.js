angular.module( '3cc.merch', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'merch', {
		url: '/merch/:path',
		views: {
			"main": {
				controller: 'MerchCtrl',
				templateUrl: 'merch/index.tpl.html'
			}
		}
	});
}])

.controller( 'MerchCtrl', [ '$scope', 'titleService', function MerchController( $scope, titleService ) {
	titleService.setTitle('Artist - Three Corners Collective');
	$scope.date = new Date();
}]);