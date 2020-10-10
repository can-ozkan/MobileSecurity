'use strict'

if(Java.available){

	Java.perform(function(){
		
		try{
			console.log("+++++++++++++++++++++++++++++++++++++++++++");
			console.log("This script enumerates loaded classes for a given application.");
			Java.enumerateLoadedClasses({

				onMatch: function(className){
					console.log(className);
				},
				onComplete: function(){
					console.log("Thank you");
				}
			});
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
