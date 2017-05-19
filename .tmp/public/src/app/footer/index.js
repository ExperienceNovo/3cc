angular.module( '3cc.footer', [
])

.controller( 'FooterCtrl', ['$scope', function FooterCtrl( $scope ) {
   	$scope.date = new Date();
}])