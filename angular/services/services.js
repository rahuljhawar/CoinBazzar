myApp.service('apiService',  function ($http){

    let baseUrl = 'https://api.coinmarketcap.com/v1/';

    this.getALlCoinsWithACurrency =  (currency,start) =>{
        return $http.get(baseUrl +'/ticker/?start='+ start  + '&limit=100&convert=' + currency);
    };
    this.getDetailsOfACoin =  (data) =>{
        return $http.get(baseUrl + '/ticker/' + data.id + '/?convert=' + data.currency);
    };

    this.globalCoinData = (currency) => {
        return $http.get('https://api.coinmarketcap.com/v1/global/?convert=' + currency);
    }
}); // end api service