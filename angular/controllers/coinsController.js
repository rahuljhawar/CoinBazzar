myApp.controller('coinsController', ['$scope', '$interval', 'ModalService', 'apiService', 'currencyService', function ($scope, $interval, ModalService, apiService, currencyService) {

    let vm = this;
    //all the fetched coins will be stored in this array
    this.coins = [];
    //all the global coin data will stored in this array
    this.globalData = [];
    //get the currently selcted currency from the local storage and if it is empty select USD
    this.selectedCurrency = localStorage.getItem('currency') ? localStorage.getItem('currency') : 'USD';
    //selected currency symbol
    this.selectedCurrencySymbol = '';
    //watch for any change in selected Currency
    $scope.$watch(function () {
        return vm.selectedCurrency
    }, function (newVal, oldVal) {
        vm.getAllGlobalData();
        //turn the selected currency into lowercase becausse the keys are defined as price_usd....
        vm.selectedCurrencyLowerCase = newVal.toLowerCase();
        //and store it into the local storage
        localStorage.setItem('currency', vm.selectedCurrency);
    }, true);

    //page controllers
    this.start = 0;
    //get the next 100 cryptocurencies
    this.getNext100 = () =>{
        vm.start=vm.start  + 100;
        //get the coins
        vm.getAllCoins();
    }
    //get the prev 100 cryptocurencies
    this.getPrev100 = () =>{
        vm.start=vm.start  - 100;
        //get the coins
        vm.getAllCoins();
    }

    this.getAllCoins = () => {
        //use the apiservice
        apiService.getALlCoinsWithACurrency(vm.selectedCurrency,vm.start).then(function successCallback(response) {
                //on success store the response into coins array
                vm.coins = response.data;
                 //use the currency service to get the symbol of the selected currency
                vm.selectedCurrencySymbol = currencyService.getCurrencySymbol(vm.selectedCurrency);
            },
            //handling the error
            function errorCallback(response) {
                alert("some error occurred. Check the console.");
                console.log(response);
            });

    }
    //call the getAllCoins functions on load of the controler
    this.getAllCoins();

    this.getAllGlobalData = () => {
         //use the apiservice
        apiService.globalCoinData(vm.selectedCurrency).then(function successCallback(response) {
                   //on success store the response into globalData array
                vm.globalData = response.data;
               // console.log(vm.globalData);
            },
            //handling the error
            function errorCallback(response) {
                alert("some error occurred. Check the console.");
                console.log(response);
            });
    }
     //call the getAllGlobalData functions on load of the controler
    this.getAllGlobalData();

    //call the getAllCoins and getAllGlobalData functions after 5 min so that the data could be refreshed
    $interval(vm.getAllCoins, 300000);
    $interval(vm.getAllGlobalData, 300000);

    //shows the custom modal using the modalservice
    this.showCustom = function (data) {

        ModalService.showModal({
            templateUrl: "views/modalContent.html",
            controller: "modalController",
            controllerAs: "modalCtrl"
        }).then(function (modal) {
            //store the retrieved from the coinController 
            modal.controller.coinDetail = data;
            modal.element.modal();
        });

    };


}]); // end controller