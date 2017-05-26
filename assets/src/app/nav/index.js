angular.module( '3cc.nav', [
])

.controller( 'NavCtrl', ['$scope', 'config', function FooterCtrl( $scope, config ) {
	$scope.currentUser = config.currentUser;
}])