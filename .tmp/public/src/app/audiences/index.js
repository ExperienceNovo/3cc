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
		},
		resolve: {
            merch: ['MerchModel', function(MerchModel) {
				return MerchModel.getSome(100,0, 'createdAt DESC');
            }]
        }
	});
}])

.controller( 'AudiencesCtrl', [ '$scope', 'config', 'titleService', 'merch', 'MerchModel', function AudiencesController( $scope, config, titleService, merch, MerchModel ) {
	titleService.setTitle('Audiences - Three Corners Collective');
	$scope.currentUser = config.currentUser;

	$scope.merch = merch;
    $scope.newMerch = {};

	$scope.createMerch = function() {
        $scope.newMerch.user = config.currentUser.id;
        MerchModel.create($scope.newMerch).then(function(model) {
            $scope.newMerch = {};
        });
    };


}]);