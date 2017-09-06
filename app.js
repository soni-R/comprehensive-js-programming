var greeting = "what's your age?";
var greeting2 = "Do you have your driver's license?";

var age = prompt(greeting);
var license = prompt(greeting2);

if(age >= 25){
	if(license == 'yes')
	{
		alert("you qualify for insurance and it will be cheaper than if u were younger");
	}else{
		alert("you can't get insurance without license");
	}
}else if( age >= 18){
	if(license == 'yes'){
		alert("you qualify for insurance, but it will be expensive");
	}else{
		alert("you can't get insurance without license");
	}
}
