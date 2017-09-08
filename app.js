var guess = prompt('Guess a number betwen 1 - 5');

var num1 = '1';
var num2 = '2';
var num3 = '3';
var num4 = '4';
var num5 = '5';

switch(guess){
	case num1:
	case num2:
	case num3:
	case num4:
		alert("you missed the number");
		break;

	case num5:
		alert("you guessed it!");
		break;

	default:
		alert("you didn't give a number between 1-5");	
}