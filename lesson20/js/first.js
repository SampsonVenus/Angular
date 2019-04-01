/* Define Angularjs application module */
var firstApp = angular.module('firstApp', []);
/* Define the controller in the module
 * Controllers augment the scope by setting up the initial state or value
 * in the scope and by adding behavior (i.e. function as argument)
 * 
 * After the controller has been defined, you can implement the
 * score, which values linking HTML elements to scope variable,
 * initializing the variable in the scope, and providing 
 * functionality to handle changes to the scope values.
 * When the value in the input changes so does the values in the 
 * scope and vice versa
*/ 
firstApp.controller('FirstController', function($scope) {
	$scope.first='Some';
	$scope.last='One';
	$scope.heading='Message: ';
	$scope.updateMessage = function() {
		$scope.message = 'Hello ' + $scope.first + ' ' + $scope.last + '!';
	};
});  