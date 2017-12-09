angular.module("myApp")
    .controller("customerCtrl", function($scope){
        var allUsers = localStorage.getItem("buyItems");
        allUsers = JSON.parse(allUsers);
         console.log(allUsers)
        $scope.allUser = allUsers;

    })

function handleCollapse(){
    console.trace("cutomer controller");
    $('[data-toggle]').each(function(val, elem){
        var e = $(elem);
        $(e).on('click', function (){
            e.attr('data-target');
            $('#' + e.attr('data-target')).collapse('toggle')
        })
    });
}

