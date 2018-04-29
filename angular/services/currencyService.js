myApp.factory('currencyService', function () {

    let currency = {};
    //all the currencysymbols
    let currencySymbols = [{
            code: 'INR',
            symbol: '₹'
        },
        {
            code: 'USD',
            symbol: '$'
        },
        {
            code: 'EUR',
            symbol: '€'
        },
        {
            code: 'AUD',
            symbol: '$'
        },
        {
            code: 'BRL',
            symbol: 'R$'
        },
        {
            code: 'ZAR',
            symbol: 'R'
        },
        {
            code: 'TWD',
            symbol: '$'
        },
        {
            code: 'TRY',
            symbol: '₺'
        },
        {
            code: 'THB',
            symbol: '฿'
        },
        {
            code: 'SGD',
            symbol: '$'
        },
        {
            code: 'SEK',
            symbol: 'kr'
        },
        {
            code: 'PHP',
            symbol: '₱'
        },
        {
            code: 'PKR',
            symbol: 'Rs'
        },
        {
            code: 'PLN',
            symbol: 'zł'
        },
        {
            code: 'RUB',
            symbol: '₽'
        },
        {
            code: 'NZD',
            symbol: '$'
        },
        {
            code: 'NOK',
            symbol: 'kr'
        },
        {
            code: 'MYR',
            symbol: 'RM'
        },
        {
            code: 'MXN',
            symbol: '$'
        },
        {
            code: 'KRW',
            symbol: '₩'
        },
        {
            code: 'JPY',
            symbol: '¥'
        },
        {
            code: 'ILS',
            symbol: '₪'
        },
        {
            code: 'IDR',
            symbol: 'Rp'
        },
        {
            code: 'HUF',
            symbol: 'Ft'
        },
        {
            code: 'HKD',
            symbol: '$'
        },
        {
            code: 'GBP',
            symbol: '£'
        },
        {
            code: 'DKK',
            symbol: 'Kr.'
        },
        {
            code: 'CZK',
            symbol: 'Kč'
        },
        {
            code: 'CNY',
            symbol: '¥'
        },
        {
            code: 'CLP',
            symbol: '$'
        },
        {
            code: 'CHF',
            symbol: 'Fr.'
        },
        {
            code: 'CAD',
            symbol: '$'
        },
    ];

    //getCurrencySymbol will return the symbol for the currrently selected currency
    currency.getCurrencySymbol = (code) => {
       // console.log(code);
        let symbol = '';
        angular.forEach(currencySymbols,function(key){
            if(key.code === code){
                symbol=key.symbol;
            }
        });
        //console.log(symbol);
        return symbol;
    }
    return currency;
}); // end api service