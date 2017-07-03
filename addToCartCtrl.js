var module = angular.module("myApp");
module.controller("addToCartCtrl", function($scope,$location){
    $scope.addToCart= function(event) {
        event.preventDefault();
        if ($scope.quantity && $scope.material) {
            var allProducts = localStorage.getItem("productsList");
            allProducts = JSON.parse(allProducts);
            var productIndex = localStorage.getItem("selectedProductIndex");  //get index
            delete localStorage.selectedProductIndex;       //delete index
            productIndex = parseInt(productIndex);
            var selectedItem = allProducts.slice(productIndex, productIndex + 1)[0];
            selectedItem.quantity = $scope.quantity;
            selectedItem.material = $scope.material;
            // selected.perItemPrice = selectedItem.perItemPrice;
            selectedItem.total = selectedItem.quantity * selectedItem.perItemPrice;
            setItemInLocalStorage(selectedItem);
            clearFilter();
            $location.path("products/")
        }
    }

    function setItemInLocalStorage(item){
        var userSelectedItems = localStorage.getItem("userSelectedItems")
        if(userSelectedItems){
            userSelectedItems = JSON.parse(userSelectedItems);
        }
        else{
            userSelectedItems = [];
        }
        userSelectedItems.push(item);
        localStorage.setItem("userSelectedItems", JSON.stringify(userSelectedItems));
    }
    function clearFilter(){
        $scope.quantity = ""
        $scope.material = ""
    }
});