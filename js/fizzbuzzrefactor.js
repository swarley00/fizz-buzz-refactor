$(document).ready(function() {
	// var inputValue = .val();
	prompt("Please enter a number");
	// fizzbuzz(inputValue);
	// pass the input value from the user's input box to the fizzbuzz function
});

function fizzbuzz (max) {
	for (var i; i <= max; i++) {
		if (i%3 === 0 && i%5 === 0) {
			console.log("FizzBuzz");
		}
		else if (i%3 === 0) {
			console.log("Fizz");
		}	
		else if (i%5 === 0) {
			console.log("BUzz");
		}	
		else {
			console.log(i);
		}
	}
}