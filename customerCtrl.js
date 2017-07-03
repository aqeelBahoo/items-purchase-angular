angular.module("myApp")
    .controller("customerCtrl", function($scope){
        var allUsers = localStorage.getItem("buyItems");
        allUsers = JSON.parse(allUsers);
        $scope.allUser = allUsers;
        /*
         if(customersDetails){
         $scope.customers = [];
         customersDetails = JSON.parse(customersDetails);
         customersDetails.forEach(function(userDetail){
         $scope.customers.push({'userName' : userDetail.userName,
         'date': userDetail.date,
         'totalPrice': userDetail.totalItemsPrice});
         })
         }*/
    })

function handleCollapse(){
    $('[data-toggle]').each(function(val, elem){
        var e = $(elem);
        $(e).on('click', function (){
            e.attr('data-target');
            $('#' + e.attr('data-target')).collapse('toggle')
        })
    });
}

