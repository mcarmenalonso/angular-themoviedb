miAppAngular.controller('generos', function($scope, configuracionGlobal , $http, $location,$routeParams,tipogeneros){
	
	$scope.generos_url = configuracionGlobal.url_website + "/discover/tv?with_genres=" +$routeParams.idGenero+"&api_key=99b4c3070137e46945a47d68eb4d49f3&language=es";
	$scope.config = configuracionGlobal;
	$scope.nombreGenero=tipogeneros.nombreGenero;
	
	$scope.listadoSeries = [];

	$http.get($scope.generos_url)
	.then(function(respuesta){
			$scope.listadoSeries.push.apply( $scope.listadoSeries, respuesta.data.results );
	})

	$scope.verDetalles = function(_serieId){
		
		$location.path("/detalles/" +_serieId);
	}	
});