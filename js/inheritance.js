function ParentScope(){
    this.aString = "This is the parent string";
    this.aNumber = 100;
    this.anArray = [10,20,30];
    this.anObject = {'property1': 'parent prop1', 'property2': 'parent prop2' };
    this.aFunction = function(){ console.log('parent output'); }
}

function ChildScope(){};
ChildScope.prototype = new ParentScope();

document.getElementById('actionButton').addEventListener('click', function(e){
	var childScope = new ChildScope();
	
	console.group('Example 1');
	console.warn('Original Childscope:', childScope );
	console.log( 'Parent property found "childScope.aString": ', childScope.aString );   //not in child, prototype chain followed... parent's property found.
	childScope.aString = 'child string'; //when doing a primitive like this, it creates a new property on child object (vs if thought it would update the parent object's aString property)
	console.log( childScope.aString );
	console.warn('Modified ChildScope:', childScope );
	console.groupEnd();
	
	console.group('Example 2');
	console.log('Array first Element Value: ', childScope.anArray[1] ); //updates the parent object's property
	console.log( childScope.anObject.property1 );//updates the parent object's property
	console.warn('Original Childscope:', childScope );
	childScope.anArray[1] = 22;
	childScope.anObject.property1 = 'child prop1';
	console.log( 'Array first Element Value Modified: ', childScope.anArray[1] );
	console.log( childScope.anObject.property1 );
	console.warn('Modified ChildScope:', childScope );
	console.groupEnd();

	console.group('Example 3');
	console.dir( childScope.anArray );
	console.dir( childScope.anObject );
	console.warn('Original Childscope:', childScope );
	childScope.anArray = [100, 555]; //creates a new object on child object
	childScope.anObject = { name: 'Mark', country: 'USA' };
	console.warn('Modified ChildScope:', childScope );
	console.dir( childScope.anArray );
	console.dir( childScope.anObject );
	console.groupEnd();

	console.group('Example 4');
	delete childScope.anArray; //child's property deleted, parent's property still remains and 'shines' through though
	console.log(childScope.anArray[1] === 22);  // true, parent's property looked at
	console.groupEnd();	
});
	

var app = angular.module('prodigious', []);
app.controller('firstCtrl', function($scope) {
  $scope.myPrimitive = 50;
	$scope.myObject    = {aNumber: 11};

	$scope.showChanges = function(){
		console.log('Scope:', $scope);
	};
});