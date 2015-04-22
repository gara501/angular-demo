 var app = angular.module("prodigious", []);
 app.controller("firstCtrl", function( $scope ){
    $scope.name = "Andres";
    $scope.color = "#333333";
    $scope.reverseName = function(){
     $scope.name = $scope.name.split("").reverse().join("");
    };
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };
});
app.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: {
            name: "@",
            color: "=",
            reverse: "&",
            random: "&"
        },
        template: [
            "<div class='form-group'>",
            "Change name:<input  class='form-control' type='text' ng-model='name' />",
            "<input type='button' class='btn btn-default' ng-click='reverse()' value='Reverse Name'/></div>",
            "<div class='form-group'>",
            "Change color:<input type='text' class='form-control' ng-model='color' />",
            "<input type='button' class='btn btn-default' ng-click='random()' value='Random Color'/></div>"
        ].join("")
    };
});