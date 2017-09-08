var greeting = "what's your age?";
var greeting2 = "Do you have your driver's license?";

var age = prompt(greeting);
var license = prompt(greeting2);

if(age >= 25 && license == 'yes'){
	
		alert("You qualify for insurance and it will be cheaper than if you were younger");

}else if(age >= 18 && license == 'yes'){
	
		alert("you qualify for insurance, but it will be expensive");

}else if(license == 'no'){

		alert("you can't get insurance without license");
}
else{
		alert("you can't get insurance");
}