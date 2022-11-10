let name = 'Baraka';
let age = 30;
let isApproved = false;
let lastName = 'Sammy';
let selectedColor = null;

console.log("First name: " + lastName);
console.log("Last name: " + name);
console.log("My age: " + age);

/*
let person = {
    firstName: 'Samuel',
    lastName: 'Baraka',
    age: '22',
    Goal: 'To become a front-end developer'

};
//Dot notation
person.firstName='John';

//Bracket Notation
person['name']= 'Mary';

console.log('person');
*/

//Arrays(object)- a data structure to represent a list of items.
let selectedTurbos = ['K03', 'K04', 'EFR', 'Garret'];
selectedTurbos[4] = 'Borgwanner'
console.log(selectedTurbos[1]);

//functions
//perform a task to display something on the console
function logs(boost, metric) {
    console.log('How much boost does your car hold? ' + boost + ' ' + metric);
}

logs('1.80', 'bar');

//Arithmetic operators

let x = 50;
let y = 70;



// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);x to the power of y

//Increment
console.log(++x);//The answer here will be 51
console.log(x++);//the answer will first be 50
console.log(x);//The answer here will now display 52

//Assignment operators

let s = 10;

s = s + 5;
s += 5;
console.log(s);

//ternary operators

let capacity = 2000;
let engine = capacity > 1400 ? 'GTI' : 'Base-model';

//logical operators
//Logical and (&&)-> It returns true if both operands are true
console.log(true && true);

// // Gets user input
// var name = prompt("What is your name?");
// var num = prompt("What is your favorite number? ");

// // Uses user input to print out information
// println("Hello " + name + "!");
// println(num + "?! That's my favorite number too!");

// // Prints out the variable type
// println("Name is a " + typeof name);
// println("Num is a " + typeof num);
