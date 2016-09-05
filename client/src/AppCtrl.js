module.exports = function ($scope, $http) {
	$http.get('api/hello').then(function (resp) {
		$scope.message = resp.data.message;
	});
};
