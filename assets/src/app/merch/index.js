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
		},
		resolve: {
            merch: ['$stateParams','MerchModel', function($stateParams, MerchModel) {
				return MerchModel.getSome(1, 0, 'createdAt DESC', {urlTitle: $stateParams.path});
            }]
        }
	});
}])

.controller( 'MerchCtrl', [ '$scope', 'titleService', 'merch', function MerchController( $scope, titleService, merch ) {
	titleService.setTitle('Artist - Three Corners Collective');
	$scope.merch = merch[0];
	console.log(merch);
}]);