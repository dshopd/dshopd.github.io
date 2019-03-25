

function random(number) {
	return  Math.ceil(Math.random() * number);
}

var name = prompt("Привет как тебя зовуть");

while (name == '' || name == null) {
	name = prompt("Привет как тебя зовуть");
}

alert('Привет, ' + name + '. Правила угадай число от 1 до 100');

var number =  random(100);


var guess = prompt(" Какое число");
var numberOfGuesses = 0;

while (guess != number) {
	if (guess > number) {
		guess = prompt("Много");
		numberOfGuesses = numberOfGuesses + 1;
	} 
	if (guess < number) {
		guess = prompt("Мало");
		numberOfGuesses = numberOfGuesses + 1;
	}
}

alert("Ты угадал " + number + ". Ты угадал за " + numberOfGuesses + ' попыток');






