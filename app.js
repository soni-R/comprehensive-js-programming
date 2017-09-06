// JSFIDDLE - Allows us to test Html, Css, JavaScript code - https://jsfiddle.net/

//var name = prompt('What is your name?', 'Put your name in here'); 
//"put your name in here" this displays in the prompt box
/* this is not good practice as we are using string literal in the prompt function, instead 
 declare the separate variable and assign string literal to that.*/

var greeting = 'What is your name?';
var name = prompt(greeting);
alert(name);