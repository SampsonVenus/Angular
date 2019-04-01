var myModule = angular.module('myApp',[]);
myModule.config(function($provide){
	$provide.value("configTime", new Date());
	$provide.value("runTime", new Date());
	for(var x=0; x < 1000000000; x++){
		var y = Math.sqrt(Math.log(x));
	}
});

/* Both configTime and runTime are instances defined 
 * in config
 * The value of runTime is changed here
 */
myModule.run(function(configTime, runTime){
	runTime.setTime(new Date().getTime());
});

/* The controller is defined and injected
 * with configTime and runTime
 * which are added to the scope values:
*/
myModule.controller('controllerA',['$scope', 'configTime', 'runTime',
                                   function($scope, configTime, runTime){
	$scope.configTime 	= configTime;
	$scope.runTime 		= runTime;
	
}] );