'use strict'

if(Java.available){

	Java.perform(function(){
		
		try{
			var target_class = Java.use("className");
			console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
			
  			target_class.isDeviceRooted.implementation = function () {
    				return false;
  			};
		}
		catch(error){
			console.log("Error occured!!");
			console.log(String(error.stack));
		}
	});
}
else{
	console.log("[-]  Java is not available.");
}
