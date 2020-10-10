'use strict'

if(Java.available){

	Java.perform(function(){
		
		try{
			var target_class = Java.use("android.webkit.WebView");
			console.log("+++++++++++++++++++++++++++++++++++++++++++++");
			console.log("Tracing web view calls");
			
  			target_class.loadUrl.overload("java.lang.String").implementation = function (a) {
  				console.log("Calling web view : ", a.toString());
  				
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
