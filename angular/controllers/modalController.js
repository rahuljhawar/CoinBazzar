myApp.controller('modalController', ['apiService', 'currencyService', '$scope', function (apiService, currencyService, $scope) {

    let vm = this;

    //watch for change when new currency gets selected
    $scope.$watch(function () {
        return vm.coinDetail
    }, function (newVal, oldVal) {
        //get the complete details
        vm.getCompleteDetails();
        //turn the selected currency into lowercase becausse the keys are defined as price_usd....
        vm.selectedCurrencyLowerCase = newVal.currency.toLowerCase();
    }, true);

    this.getCompleteDetails = () => {
       //use the apiService
        apiService.getDetailsOfACoin(vm.coinDetail).then(function successCallback(response) {
                //on successful resonse we get
                vm.detailView = response.data[0];
                //use the currency service to get the symbol of the selected currency
                vm.selectedCurrencySymbol = currencyService.getCurrencySymbol(vm.coinDetail.currency);
            },
            //handling the error 
            function errorCallback(response) {
                alert("some error occurred. Check the console.");
                console.log(response);
            });
           

    }
}]);//end of the controller