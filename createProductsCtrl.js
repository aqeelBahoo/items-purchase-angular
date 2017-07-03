var module = angular.module("myApp")
module.controller("createProductsCtrl", function($scope,$location){
    $scope.saveProducts = function(event){
        event.preventDefault()
        var name = $scope.name;
        var productColor = $scope.productColor;
        var productSize = $scope.productSize;
        var perItemPrice = $scope.perItemPrice
        if(name && productSize && perItemPrice && productColor){
            setLocalStorage({'name': name, 'perItemPrice': perItemPrice,'productSize': productSize, 'productColor' : productColor});
        }
        clearAllFilter();
        $location.path('/products');

    }
    function setLocalStorage(list) {
        var getLocalStorage = localStorage.getItem("productsList");
        if (getLocalStorage) {
            getLocalStorage = JSON.parse(getLocalStorage);
        }
        else {
            getLocalStorage = [];
        };
        getLocalStorage.push(list);
        localStorage.setItem("productsList", JSON.stringify(getLocalStorage));

    }
    function clearAllFilter(){
        $scope.name = "";
        $scope.discount  = "";
        $scope.total  = "";
    }

})