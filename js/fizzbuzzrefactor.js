$(document).ready(function() {
	var message = prompt("Please enter a number");
	var inputValue = +message;
	fizzbuzz(inputValue); // pass the input value from the user's input box to the fizzbuzz function
});

function fizzbuzz (max) {
	var myBody = $("body");
	for (var i; i <= max; i++) {
		if (i%3 === 0 && i%5 === 0) {
			myBody.append("FizzBuzz");
		}
		else if (i%3 === 0) {
			myBody.append("Fizz");
		}	
		else if (i%5 === 0) {
			myBody.append("Buzz");
		}	
		else {
			myBody.append(i);
		}
	}
}