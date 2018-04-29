myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


    $routeProvider
        .when('/', {
            // location of the template
            templateUrl: 'views/market.html',
            //Which controller it should use 
            controller: 'coinsController',
            //what is the alias of that controller.
            controllerAs: 'coinCtrl'
        })
        .otherwise({
            //redirectTo:'/'
            template: '<h1>404 page not found</h1>'
        });

    $locationProvider.html5Mode(true);
}]);