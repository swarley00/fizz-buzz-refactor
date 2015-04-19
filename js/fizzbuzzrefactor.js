$(document).ready(function() {
	var aNumber = Number(window.prompt("Please enter a number"));
	if (isNaN(aNumber)) {
    	alert("Please use a number.");
  	} 
  	else if (aNumber%1 != 0) {
    	alert("Please use a whole number."); 
  	}
  	else {
     	fizzbuzz(aNumber);
  	}
});

function fizzbuzz(max) {
	var myBody = $("body");
	for (var i = 1; i <= max; i++) {
		if (i%3 === 0 && i%5 === 0) {
			myBody.append(" FizzBuzz" + " ");
		}
		else if (i%3 === 0) {
			myBody.append("Fizz" + " ");
		}	
		else if (i%5 === 0) {
			myBody.append("Buzz" + " ");
		}	
		else {
			myBody.append(i + " ");
		}
	}
}