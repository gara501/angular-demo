var app = angular.module('prodigious', []);
app.controller('firstController', ['$scope', function($scope) {
   $scope.angular = 'Controladores';

    $scope.hola = function() {
        $scope.angular = 'Español';
    };

    $scope.hello = function() {
        $scope.angular = 'english';
    };
  
}]);

app.controller('secondController', ['$scope', 'notify', function($scope, notify) {
   $scope.callNotify = function(msg) {
     notify(msg);
   };
}]);

app.factory('notify', ['$window', function(win) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       win.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);
	
