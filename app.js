var module = angular.module("myApp", ["ngRoute"])
module.config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
    $routeProvider.otherwise({redirectTo: "/"});
    $routeProvider
        .when("/invoices", {
            templateUrl: "invoices.html",
            controller: 'invoiceCtrl'
        })
        .when("/products", {
            templateUrl: "products.html",
            controller: "productCtrl"
        })
        .when("/products/create",{
            templateUrl: "createProducts.html",
            controller: "createProductsCtrl"
        })
        .when("/products/addToCart", {
            templateUrl : "addToCart.html",
            controller: "addToCartCtrl"
        })
        .when("/products/buy", {
            templateUrl : "productsBuyItem.html",
            controller: "productsBuyItemsCtrl"
        })
        .when("/customer", {
            templateUrl: "customer.html",
            controller: "customerCtrl"
        })

})
/*
module.directive('collapse', function (){
  return {
      restrict: 'AE',
      link: function (scope, elem, attr){

          elem.collapse({toggle: true, parent: '#collapse-'+attr.target

          })
         /!* elem.on('click', function (){
              elem.collapse('toggle')

          })*!/
      }
  }
})*/
