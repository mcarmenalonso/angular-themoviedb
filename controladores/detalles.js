miAppAngular.controller('detalles',function($scope,configuracionGlobal,$http,$routeParams,$location, tipogeneros) {
	$scope.new_url = configuracionGlobal.url_website + "/tv/" +$routeParams.serieId+"?api_key=99b4c3070137e46945a47d68eb4d49f3&language=es";
	$scope.config =  configuracionGlobal;
	$scope.listadoGeneros = [];
	$http.get($scope.new_url)
	.then(function(respuesta){
		$scope.serie = respuesta.data;
		$scope.listadoGeneros.push.apply( $scope.listadoGeneros, respuesta.data.genres );
	})

	$scope.verGeneros = function(_idGenero,_nombreGenero){
		
		$location.path("/generos/" +_idGenero);

		tipogeneros.nombreGenero=_nombreGenero;
		
		
	}

})
