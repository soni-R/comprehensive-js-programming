var  x = prompt('Guess a number between 1 and 50');

while(x != 'n' && x != 'N'){
	if(x <= 24){
		alert('Nope, guess higher');
	}else if(x >= 26){
		alert('Nope, guess lower');
	}else{
		alert('You got it!');
		break;
	}

	x = prompt('Guess a number between 1 and 50 or type n to quit the game');
}