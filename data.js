//varable
// 1. Declare variables using let, var, and const to store a name, age, and favorite color.

// let Name = "Arjun";
// var Age = 19;
// const Color = "Red";
// console.log(Name, Age, Color);


// 2. Create variables inside and outside a block ({}) using let and const.

// let a = 10;
// let b = 10; b
// console.log(a);
// console.log(a);

// {
//     let Block = 20;
//     const Block2 = 20;
//     console.log(Block);
//     console.log(Block2);

//   }
 
// 3. Follow JavaScript naming conventions to create variables for a username, email address,
// and password.

//  let UsernName = "Arjun";
//  let Email = "ak6483424@gmail.coim";
// let Password = 367386736;

// 4. Use let to declare a variable inside a block ({}) and try accessing it outside. Explain the
// result.

// {
//     let InsideBlock = "Result"
// }

// console.log(InsideBlock);

// 5. Declare a constant variable for the value of Pi (π). Attempt to reassign a new value to it and
// write the error.

// const PiValue = 3.14;

// PiValue = 4.99

// console.log(PiValue);

// 6. Create a global variable named count and a local variable with the same name inside a block
// ({}). Output both values to observe variable .

//  var count = 10;
//  {
    //  let count = 5;
    //  console.log("Inside block (local count):", count);

//  }
 



// 7. Declare a variable with let for a number. Then assign it a string value and console.
//  let value = 42;
//  value = "Hello"
//  console.log = (value);


// 8. Try creating variables with names that start with numbers or contain special characters.
// Discuss why some names are invalid
// let Name = "Arjun";
// console.log(Name); invalid


// 9. Declare variables with let and const in different scopes (e.g., global scope, block scope).
// Discuss their visibility and scope.

// let globalLet = "global let variable.";
// const globalConst = "global const variable.";
// console.log(global);
// console.log(globalConst); 

// 10. Declare a variable without assigning a value.

// let a;

// 11. Create variables for a first name, last name, and age. Apply camelCase naming convention .
// let firstName = "Sanjay";
// let lastName = "kumar";
// let age = 17;
// console.log(firstName1, lastName, age);





// 1. What are the two main categories of data types in JavaScript?


// 1. Primitive Data Types:
// 2. Non-Primitive (or Reference) Data Types:

// 2. What is a primitive data type? List all the primitive data types in JavaScript.

// Primitive Data Types:
// = number
// = bigint
// = Boolean
// = string
// = Symbol
// = null
// = undefined



// 3. What is the difference between `null` and `undefined` in JavaScript?

// let x = null;
// null is a diffind but not value null
// undefined is a varible note diffind 


// 4. How do you check the type of a variable in JavaScript?**

// let a = 10;
// console.log(typeof(a));

// 5. What will the following code output?

// console.log(typeof 42); //number

// console.log(typeiof 'Hello'); //string

// console.log(typeof true); // Boolean

// console.log(typeof { name: 'John' }); // object

// console.log(typeof [1, 2, 3]); //object 

// 6. What data type is returned by the expression `3 + '3'`?
// let a = 3;
// let b = "3";
// let c = a + b;
// console.log(c);
// console.log(typeof(c));


// 7. What will be the result of the following code?
// let num = 10;
// let str = '10';
// console.log(num == str); //true
// console.log(num === str); //false

// 8. Explain the difference between `==` and `===` in JavaScript.

//let num = 10; 
//let str = '10'; 
//console.log(num == str); //true 
//console.log(num === str); //false stricequal type

 
// 9. What data type is used to represent a sequence of characters in JavaScript?
// let name = "Arjun";
// let Age = 19;
// let info = 'My name is {Arjun}';
// console.log(name,Age,info);

// 10. What will be the output of the following code?
// let obj = { a: 1, b: 2 };
// console.log(typeof obj);
// console.log(typeof obj.a);


// 11.What are the datatypes of `a`, `b`, `c`, `d`, `e`, `f`, and `g`?Identify the datatype:

// let a = 42;//number

// let b = "JavaScript"; //string

// let c = false;// boolean

// let d = undefined;//unefined

// let e = null;//object

// let f = { key: "value" }; //object

// let g = [1, 2, 3];// object



// 12.What is the datatype of the following values?

// console.log(typeof "Hello World"); //string

// console.log(typeof 12345);//number

// console.log(typeof true); // boolean

// console.log(typeof { foo: "bar" }); //object

// console.log(typeof [1, 2, 3]);//object

// console.log(typeof function() {});// function

// console.log(typeof undefined);// undefined


// 13.What will be the result of the following code?
// let x = 10;
// let y = "10";
// console.log(typeof x); //number
// console.log(typeof y); // string


// 14.Determine the datatype of the result of these expressions:

// console.log(typeof (10 + 20));//number

// console.log(typeof (10 - "2"));//string
// console.log(typeof ("5" * 3));// string
// console.log(typeof ("hello" / 2));//string


// 1. Assign `a = 10` and `b = 5`. Log the result of `a + b` to the console.
// let a = 10;
// let b = 5;
// console.log(a + b);
//output =>15;

// 2. Assign `a = 20` and `b = 8`. Log the result of `a - b` to the console.
// let a = 20;
// let b = 8;
// console.log(a - b);
//output => 12;

// 3. Assign `a = 4` and `b = 7`. Log the result of `a * b` to the console.
// // 
// et a = 4;
// let b = 7;
// console.log(a * b);
//output => 28;

// 4. Assign `a = 16` and `b = 4`. Log the result of `a / b` to the console.
// let a = 16;
// let b = 4;
// console.log(a / b);
//output => 4;

// 5. Assign `a = 13` and `b = 4`. Log the result of `a % b` to the console.
// // 
// let a = 13;
// let b = 4;
// console.log(a % b);
//output => 1;

// 6. Assign `num = 10`. Use `num += 7`, `num -= 3`, `num *= 2`, and `num /= 5`, logging the value
// of `num` after each operation.
// let num = 10;
// num += 7;
// console.log(num);
//output => 17;
// num -= 3;
// console.log(num);
// let num;
//   num *=2;
// console.log(num);
//output =>NAN
// let num;
// num /= 5;
// console.log(num);
//output => NAN


// 7. Assign `a = 10` and `b = 10`. Log `a == b` to the console.
let a = 10;
let b = 10;
console.log(a == b);
// 8. Assign `a = 10` and `b = '10'`. Log `a === b` to the console.
// let a = 10;
// let b = '10';
// console.log(a === b);
// 9. Assign `a = 15` and `b = 20`. Log whether `a` is greater than, less than, or equal to `b`. let
// a = 15;
// let b = 20;
// if (a > b) {
// console.log('greater than');
// } else if (a < b) {
// console.log('less than');
// } else {
// console.log('equal to');
// }

//(Bitwise AND)
// a = 5;
// b = 1;
// console.log(a|b)

// a = 5;
// b = 1;
// console.log(a^b)

// a = 5;
// b = 1;
// console.log(5>>>1)