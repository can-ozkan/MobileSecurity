'use strict'

if(Java.available){

	Java.perform(function(){
		
		try{
			console.log("++++++++++++++++++++++++++++++++++++++++++");
			var target_class = Java.use("className");
			console.log(Object.getOwnPropertyNames(target_class).join('\n'));
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
