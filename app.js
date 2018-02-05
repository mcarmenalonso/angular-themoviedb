var miAppAngular = angular.module('series', ['ngRoute'] );

miAppAngular.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'plantillas/inicio.html',
        controller: 'inicio'
    })
    .when('/404', {
        templateUrl: 'plantillas/404.html',
        controller: 'inicio'
    })
    .when('/detalles/:serieId' ,{
        templateUrl: 'plantillas/detalles.html',
        controller: 'detalles'
    })
    .when('/generos/:idGenero' ,{
        templateUrl: 'plantillas/generos.html',
        controller: 'generos'
    })
   
    .otherwise({        
        redirectTo: '/404'        
    })
    
} ] );


miAppAngular.constant('configuracionGlobal' , {
 
    'nombreDelSitio':'DiferenZink',
    'url_website' : 'https://api.themoviedb.org/3',
    'api_url': 'https://api.themoviedb.org/3/tv/top_rated?api_key=99b4c3070137e46945a47d68eb4d49f3&language=es',
    'imagenes': 'https://image.tmdb.org/t/p/w500/',

})

