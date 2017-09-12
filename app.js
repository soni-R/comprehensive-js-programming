var cars = ['SUV', 'Honda', 'Swift', 'BMW'];


/* in console
cars
(4) ["SUV", "Honda", "Swift", "BMW"]

cars.toString();
"SUV,Honda,Swift,BMW"

cars.join(" ");
"SUV Honda Swift BMW"

cars.join(", ");
"SUV, Honda, Swift, BMW"

var myVariable = cars.join(", ");
undefined

myVariable;
"SUV, Honda, Swift, BMW"

*/

//to concat two arrays
var fruits = new Array("Apple", "kiwi", "grapes", "Banana");
var veggies = ['spinach', 'carrots', 'potato'];
/*
fruits
(4) ["Apple", "kiwi", "grapes", "Banana"]

veggies
(3) ["spinach", "carrots", "potato"]

var food = fruits.concat(veggies);
undefined

food
(7) ["Apple", "kiwi", "grapes", "Banana", "spinach", "carrots", "potato"]

//to reverse the array values
food.reverse();
(7) ["potato", "carrots", "spinach", "Banana", "grapes", "kiwi", "Apple"]

food
(7) ["Apple", "kiwi", "grapes", "Banana", "spinach", "carrots", "potato"]

food.pop(); //pop() removes last array value
"potato"

food.push('beans');
7
food
(7) ["Apple", "kiwi", "grapes", "Banana", "spinach", "carrots", "beans"]

*/
