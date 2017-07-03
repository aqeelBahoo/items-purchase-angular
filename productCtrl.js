var module = angular.module("myApp")
    .controller("productCtrl", function($scope, $location){
        var allProducts = localStorage.getItem("productsList");

        $scope.allProducts = JSON.parse(allProducts);
        $scope.removeProduct = function(index){
            $scope.allProducts.splice(index,1);
            localStorage.setItem("productsList", JSON.stringify($scope.allProducts))
        };
        $scope.selectProduct = function (productIndex) {
            localStorage.setItem('selectedProductIndex', productIndex);
            $location.path('products/addToCart');
        };
        $scope.addToCart = function(){
            $location.path("/products/buy")
        }
    });