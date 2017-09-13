function car(make, model, year, color, damage)
{
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.damage = damage;

	this.setDamage = setDamage;
	function setDamage(newstatus)
	{
		this.damage = newstatus;
	};

	this.getDamage = getDamage;
	function getDamage()
	{
		return this.damage;
	}
}

myCar = new car("Toyota", "camry", 2017, "white", null);
var getPrompt = prompt("what is the updated damage on the car?");

myCar.setDamage(getPrompt);
alert(myCar.getDamage() + " has been added to the history");