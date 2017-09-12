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

/*
food
(7) ["Apple", "kiwi", "grapes", "Banana", "spinach", "carrots", "potato"]

food.shift();  // shift() function will remove first value from array 
"Apple"

food
(6) ["kiwi", "grapes", "Banana", "spinach", "carrots", "potato"]

food.unshift('strawberries');  // ushift will add value at the begining of array
7

food
(7) ["strawberries", "kiwi", "grapes", "Banana", "spinach", "carrots", "potato"]

 var myItems = food.slice(0, 3);
undefined

myItems
(3) ["Apple", "kiwi", "grapes"]

food.slice(0, 2);
(2) ["Apple", "kiwi"]

food.slice(-1, -3);
[]length: 0__proto__: Array(0)

food.slice(-3, -1);
(2) ["spinach", "carrots"]

food.slice(-3, -2);
["spinach"]

food.slice(-3, -4);
[]

food.slice(-4, -3);
["Banana"]

food
(7) ["Apple", "kiwi", "grapes", "Banana", "spinach", "carrots", "potato"]

food.sort() //sorts in alphabetical order
(7) ["Apple", "Banana", "carrots", "grapes", "kiwi", "potato", "spinach"]

food.sort().reverse();
(7) ["spinach", "potato", "kiwi", "grapes", "carrots", "Banana", "Apple"]

food
(7) ["spinach", "potato", "kiwi", "grapes", "carrots", "Banana", "Apple"]

food.sort();
(7) ["Apple", "Banana", "carrots", "grapes", "kiwi", "potato", "spinach"]

food.splice(2, 0, 'pears'); //splice() removes array item and replace it with specified value or values
[]
food
(8) ["Apple", "Banana", "pears", "carrots", "grapes", "kiwi", "potato", "spinach"]

food.splice(6,1,'mango','tomato');
["potato"]

food
(9) ["Apple", "Banana", "pears", "carrots", "grapes", "kiwi", "mango", "tomato", "spinach"]
*/
