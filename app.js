// Log to console
/*console.log('Hello World');
console.log(123);
console.log(true);

var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2, c: 3 });
console.table({ a: 1, b: 2, c: 3 });

console.error('This is some error');
console.clear();
console.warn('This is a warning');

console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello')*/

/***************************************************************************************/


// //var, let, const
// var fullName = 'John Doe';
// console.log(fullName);
// fullName = 'Steve Smith';
// console.log(fullName);

// //Initialize var
// var greeting;
// console.log(greeting); // will log 'undefined' because greeting wasn't declare as anthing.
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers _, $
// // Can not start with number

// //CONST - Cannot just initialize, has to be declared, cannot re-assign value. It's constant.
// const firstName = 'John';
// console.log(firstName);
// firstName = 'Sara';

// // Constant object - can re-assign properties of the object, just can't set the whole object equal to something new.
// const person = {
//     name: 'Sara',
//     age: 31
// }

// person.name = 'Emily'; // You can do this.

// person = {
//     name: 'Sara',
//     age: 45
// } // Cannot do this.

// console.log(person); // this will print {'Sara', 31}

// const numbers = [1, 2, 3, 4, 5];
// numbers = [1, 2, 3, 4, 5, 6]; // Cannot do this.
// numbers.push(6); // You can do this. push() is a method to add to an array.

/***************************************************************************************/


// //PRIMITIVE DATATYPES
// // String
// const firstName = 'John Doe';

// // Number
// const age = 45;

// // Boolean
// const hasKids = false;

// // Undefined
// let test; // Cannot do const for undefined datatype.

// // Null
// const car = null;

// // Symbol
// const sym = Symbol();


// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies', 'music'];

// // Object Literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }

// // Date
// const today = new Date();

/***************************************************************************************/


// let val;

// // Number to string
// val = 5;

// val = String(5); // this converts the number to a string
// val = String(4+4); // this will calculate 4 + 4 and then convert to a string, so '8' as a string.

// val = (5).toString(); // this does the same thing.

// // String to number
// val = '5';
// val = Number('5'); // this converts the string to a number.

// val = true; // turned it into a bool
// val = Number(true); // this will make it 1. true = 1, false = 0.
// val = 'Trevor';
// val = Number('Trevor'); // this will print NaN to the console. Not a number.

// val = parseInt('100.5'); // this will just give us 100. it's an int.
// val = parseFloat('100.5'); // this will give us 100.5. it's a float.

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2; // this will give us 11

// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2; // this will give us '56' as a string.

/***************************************************************************************/


// const numOne = 100;
// const numTwo = 50;

// let val;

// //Simple math with numbers
// val = numOne + numTwo;
// val = numOne - numTwo;
// val = numOne / numTwo;
// val = numOne % numTwo; //modulus

// //Math Object
// val = Math.PI;
// val = Math.E; //Euler's number
// val = Math.round(2.8); // this will round to 2.
// val = Math.ceil(2.2); // this will give us 3. it rounds down
// val = Math.floor(2.8); // this will give us 2. it rounds down
// val = Math.sqrt(64); // this will give us 8. square root
// val = Math.abs(-4); // 4. absolute value
// val = Math.pow(8, 2); // 8 to the power of 2 equals 64
// val = Math.min(2, 4, 7, 1, 8, 3); // 1. gives us the minimum number.
// val = Math.max(2, 4, 7, 1, 8, 3); // gives us the max
// val = Math.random(); // gives us a random decimal.
// val = Math.floor(Math.random() * 20 + 1); //this will give us a random between 0 and 20

// console.log(val);

/***************************************************************************************/


// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'hello there general kenobi'

// let val;

// // Concat
// val = firstName + lastName; // squishes them together
// val = firstName + ' ' + lastName; // concatatenates with a space

// //Appending
// val = 'Brad ';
// val += 'Traversy' // appends Traversy on to Brad. 'Brad Traversey'
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //Escaping
// val = 'That\'s awesome, I can\'t wait'; //backslash is an escape char.

// // Length
// val = firstName.length; // counts the number of chars in a string

// // Concat
// val = firstName.concat(' ', lastName); //concatenates firstName and lastName with a space

// // Change case
// val = firstName.toLowerCase();
// val = firstName.toUpperCase();

// //Index
// val = firstName[2]; //gives us the index char
// val = firstName.indexOf('w'); // gives us the number where 'w' appears in the string. if there are more than one 'w', it gives us the first 'w'
// val = firstName.lastIndexOf('l'); //finds the last 'l'
// val = firstName.charAt(val.length -1); // this will give us the last char

// // substring
// val = firstName.substring(0, 4); // gets the 0 - 4 index chars of a string
// val = firstName.slice(0, 4); // very similar to substring()
// val = firstName.slice(-3); // gets the last three chars. very handy

// //Split
// val = str.split(' '); // will split the string into an array delimited by spaces.

// // Replace
// val = str.replace('Brad', 'Jack'); // replace Brad with Jack

// // Includes
// val = str.includes('Hello'); // returns a bool. this will return true.

// console.log(val);

/***************************************************************************************/


// const firstName = 'John';
// const age = 90;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// function hello(){
//     return 'hello';
// }

// // Without template strings (ES5)
// html = '<ul><li>Name: ' + firstName + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>Name: ' + city + '</li></ul>';

// html = '<ul>'+
//         '<li>Name: ' + firstName + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>Name: ' + city + '</li>' +
//         '</ul>';

// // With template strings (ES6)
// html = `
//     <ul>
//         <li>Name: ${firstName}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>Four: ${2+2}</li>
//         <li>Hello: ${hello()}</li>
//         <li>${age >= 30 ? 'Old' : 'Young'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

/***************************************************************************************/


// //Create some arrays
// const numbersOne = [43, 56, 33, 23, 44];
// const numbersTwo = new Array[43, 56, 33, 23, 44];
// const fruit = ['apple', 'butt', 'pizza', 'party'];
// const mixedTypeArray = [22, 'Hello', null, undefined, new Date()];

// let val;

// //Get array length
// val = numbersOne.length;
// //Check if something is an array;
// val = Array.isArray(numberOne); //returns a bool T or F if the thing is an array or not.
// //Get single value from array
// val = numbersOne[3];
// val = numbersOne[0]; // will give us the first thing in the array
// //Insert something into an array
// numbersOne[2] = 100; //this changes the value of the third thing to 100
// //Find the index of a value
// val = numbersOne.indexOf(33); // this will give us 2. 33 is at the 2 position

// //Mutating Arrays
// //Add to the end of array
// numbersOne.push(20);
// //Add to the front of array
// numbersOne.unshift(89);
// //Take off from the end of array
// numbersOne.pop();
// //Take off from the front
// numbersOne.shift();
// //Splice values 
// numbersOne.splice(1,3); //indexes - take out the values from index 1 to 3
// //Reverse the array
// numbersOne.reverse(); //reverses the order of the array

// //Concatenate array
// val = numbersOne.concat(numbersTwo); // combines the two arrays

// //Sorting arrays
// val = fruit.sort(); //sorts the string array in alpha order
// val = numbersOne.sort(); // sorts the numbers by the first digit

// //Sort number array
// val = numbersOne.sort(function(a, b){
//     return a - b;
// }); // Ascending

// val = numbersOne.sort(function(a, b){
//     return b - a;
// }); // Descending

// // Find
// function under50(num) {
//     return num < 50;
// }

// val = numbersOne.find(under50);

// console.log(numbersOne);
// console.log(val);

/***************************************************************************************/


// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 34,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 2021 - this.age;
//     }
// }

// let val;
// val = person;

// //Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.address.city;
// val = person.hobbies[1];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 32},
//     {name: 'Nancy', age: 45}
// ]

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

/***************************************************************************************/


// let val;

// const today = new Date(); //if you don't give it a date, it returns today's date.
// let birthday = new Date('2-3-1987')
// birthday = new Date('October 12 1956');
// birthday = new Date('3/8/1961')

// val = birthday.getMonth(); // zero based index of month
// val = birthday.getDate(); // returns the number of the day of the month
// val = birthday.getFullYear();
// val = birthday.getDay();

// birthday.setMonth('11'); // changes the month to December.

// console.log(birthday);

/***************************************************************************************/


// const id = '100';

// //Equal to
// if (id == 100){
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// // Not Equal to
// if (id != 100){
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// // Test the type AND the value
// if (id === 100){
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// if (id !== 100){
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// //Test if undefined
// if(typeof id !== undefined){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID');
// }

// // Greater or Less than
// if (id > 200){
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// //if else
// const color = 'red';

// if(color === 'red'){
//     console.log('Color is red');
// } else if (color === 'blue') {
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// //logical operators
// const firstName = 'Steve';
// const age = 34;

// // AND &&
// if (age > 0 && age < 12){
//     console.log(`${firstName} is a child.`);
// } else if (age >= 13 && age <= 19){
//     console.log(`${firstName} is a teenager.`);
// } else {
//     console.log(`${firstName} is an adult.`);
// }

// // OR ||
// if (age < 16 || age > 65){
//     console.log('They get a discount');
// } else {
//     console.log('They don\'t get a discount');
// }

// // Ternary operator
// console.log(id === 100 ? 'correct' : 'incorrect');

/***************************************************************************************/


// //Switch cases

// const color = 'blue';

// switch (color) {
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);

/***************************************************************************************/


// // Function declarations

// function greet(firstName = 'John', lastName = 'Doe'){
//     //console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// } // can set defaults in params in case no params are passed

// console.log(greet('John', 'Denver'));
// console.log(greet()); //this will print the defaults - John Doe

// //Function Expressions
// const square = function(x = 3){
//     return x * x;
// }; // x = 3 sets the default if no params are passed.

// console.log(square(8)); // prints 64.

// //Immediately invokable function expressions - IIFEs
// (function(){
//     console.log('IIFE ran...');
// })();

// (function(name){
//     console.log(`IIFE ran...Hello ${name}`);
// })('Sarah');

// //Property Method
// const todo = {
//     add: function(){
//         console.log('Add todo...')
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`)
//     }
// }

// todo.add();

/***************************************************************************************/


