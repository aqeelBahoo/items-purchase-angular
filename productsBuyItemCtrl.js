var module = angular.module("myApp")
module.controller("productsBuyItemsCtrl", function ($scope, $location) {
    var selectedItems = localStorage.getItem("userSelectedItems");
    if (selectedItems) {
        putDataOnUI();
    }
    $scope.removeItems = function (index) {
        selectedItems.splice(index, index + 1);
        $scope.items = selectedItems;
        localStorage.setItem("userSelectedItems", JSON.stringify(selectedItems));
        putDataOnUI();
    }

    function putDataOnUI() {
        selectedItems = localStorage.getItem("userSelectedItems");
        selectedItems = JSON.parse(selectedItems);
        $scope.items = selectedItems;
        var totalItemsPrice = 0;
        selectedItems.forEach(function (object) {
            totalItemsPrice += object.total;
        })
        $scope.totalItemsPrice = totalItemsPrice;
    }

    $scope.buy = function () {
        selectedItems = localStorage.getItem("userSelectedItems");
        selectedItems = JSON.parse(selectedItems);
        var buyItems = localStorage.getItem("buyItems");
        buyItems = JSON.parse(buyItems);
        var userName = prompt("whats your name");
        if (selectedItems && selectedItems.length !== 0 && userName) {
            if (buyItems) {
            }
            else {
                buyItems = [];
            }
            var totalItemsPrice = 0;
            selectedItems.forEach(function (item) {
                totalItemsPrice += item.total;
                item.id = getRandomNumber(99, 999);

            })
            buyItems.push({
                'products': selectedItems,
                'userName': userName,
                'date': new Date().toLocaleString(),
                'totalItemsPrice': totalItemsPrice
            });
            localStorage.setItem("buyItems", JSON.stringify(buyItems));
            localStorage.removeItem("userSelectedItems");
            $location.path("/invoices");
        }
    }
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
})