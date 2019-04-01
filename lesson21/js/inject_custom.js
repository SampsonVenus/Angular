var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'Hello from My Module'); //value service provider
myMod.controller('controllerB', ['$scope', 'modMsg',
                                 function($scope, msg){
	$scope.message = msg;
	
}]);

// MyMod as an injectable provider in myApp
var myApp = angular.module('myApp', ['myMod']);
myApp.value('appMsg', 'Hello from My App');  // value service provider
myApp.controller('controllerA', ['$scope', 'appMsg',
                                 function($scope, msg){
	$scope.message = msg;
}]);
