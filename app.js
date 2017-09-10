for(var x = prompt("Guess a number between 1 and 50"); x != "n" && x != "N"; 
	x = prompt("Guess a number between 1 and 50, type n if you want to quit the game"))
{
	if(x <= 24){
		alert("Nope, Guess higher");
	}else if(x >= 26){
		alert("Nope, Guess lower");
	}else{
		alert("You Got It!!");
		break;
	}
}
