miAppAngular.controller('inicio', function($scope, configuracionGlobal , $http, $location){
	$scope.config = configuracionGlobal;
	$scope.listadoSeries = [];
	$http.get(configuracionGlobal.api_url)
		.then(function(respuesta){
			$scope.listadoSeries.push.apply( $scope.listadoSeries, respuesta.data.results );
		})

	$scope.verDetalles = function(_serieId){
		
		$location.path("/detalles/" +_serieId);
	}

	
});