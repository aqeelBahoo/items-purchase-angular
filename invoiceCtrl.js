var module = angular.module("myApp");
module.controller("invoiceCtrl", function ($scope) {
    var buyItems = localStorage.getItem("buyItems");
    if (buyItems) {
        makeUI();
    }
    $scope.removeItems = function (objectId) {
        //$scope.products.splice(index, index + 1);
        buyItems = localStorage.getItem("buyItems");
        buyItems = JSON.parse(buyItems);
        buyItems.some(function (userInvoice) {
            return userInvoice.products.some(function (product, index) {
                if (product.id == objectId) {
                    userInvoice.products.splice(index, 1);
                    console.log("local storage " + product.id)
                    console.log("UI " + objectId)
                    return true;
                }
                ;
            })
        })
        localStorage.setItem("buyItems", JSON.stringify(buyItems));
        buyItems = localStorage.getItem("buyItems");
        makeUI();
    }
    function makeUI() {
        $scope.buyItems = JSON.parse(buyItems);
        $scope.products = [];
        $scope.buyItems.forEach(function (userData) {
            userData.products.forEach(function (itemsDetails) {
                itemsDetails.userName = userData.userName;
                itemsDetails.date = userData.date;
                $scope.products.push(itemsDetails);
            })
        })
    }
})