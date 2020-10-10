'use strict'

if(Java.available){

	Java.perform(function(){
		
		try{
			var target_class = Java.use("className");
			console.log("+++++++++++++++++++++++++++++++++++++++++++++");
			
  			target_class.encrypt.overload("java.lang.String", "java.lang.String").implementation = function (a,b) {
  				console.log("Argument 1 : ", a.toString());
  				console.log("Argument 2 : ", b.toString());
    				return a;
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
