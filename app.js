//Creating objects

/*
car = new object();
car.make = "Toyota";
car.model "Camry";
car.year = 2017;
car.color = "white";
*/

// other way of creating objects

car  = {
	make : "Maruti",
	model:"swift",
	year: 2017,
	color:"silver"
}

//accessing the values and assigning them to a variable

var make = car.make;
var model = car.model;
var year = car.year;
var color = car.color;

alert("Your " + make + " " + model + " is a " + year + " and has a color of " + color);