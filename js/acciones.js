// JavaScript Document
$(document).ready(function() { // llave principal ready
  	document.addEventListener("deviceready",function () { //llave del device ready
         $('#B1').tap(function () { //lave tap
		  navigator.notification.beep (1); //sonido en el disposito
    	 });//llave tap b1
	}); //llave del device ready
}); // llave principal ready
