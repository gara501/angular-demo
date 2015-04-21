// var app = angular.module('prodigious',[]);

// app.controller('firstCtrl', ['$scope', function($scope){
//    $scope.items = ['one','two','three','four'];
//    $scope.hey = 'Hey Directive!';
//    $scope.newHeyData = 'Its me again!';
//    $scope.heyObject = { name: 'Igor', address: '123 Somewhere' };
   
//    $scope.updateParams = function(newParams) {
//    	$scope.hey = newParams;
//    	console.log('Params Changed');
//    }
// }]); //Isolated Scope
// app.directive('directiveOne', function () {
//     return {
//     		restrict:'E',
//         scope:{
//           attributeDir:'@'
//         },
//         link:function (scope, element, attrs) {
//           console.log(scope);
//         }        
//     };
// }); //Isolated Scope Two Binding mode
// app.directive('directiveTwo', function () {
//     return {
//     		restrict:'E',
//         scope:{
//           attributeTwo:'=attributeDir',
//           newHey : '&'
//         },
//         controller:function ($scope, $attrs) {
//           $scope.updateParams = function (newParams) {
//             $scope.newHey({newParams:newParams});
//             console.log('DATA');
//           }
//           console.log($scope);
//         }
//     };
// });


var app = angular.module('prodigious', []);
app.controller('MainCtrl', function($scope) {
  var initialImg = "http://images.nationalgeographic.com/wpf/media-live/photos/000/135/overrides/fish-crow-01_13589_600x450.jpg";
  $scope.mainImgUrl = initialImg;
  $scope.mainImg = { url: initialImg }; 
  $scope.images = [
      "http://globe-views.com/dcim/dreams/hawk/hawk-05.jpg",
      "http://www.choosecagefree.org/sites/all/themes/btbt/images/chicken.png"
  ];
  
});
