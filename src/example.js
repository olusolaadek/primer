// import additionFunction from "./sum";
//import sumArrays from "./sum";
import oddOnly, { sumValues } from "./sum";
// import { multiply, subtract as deduct } from "./operations";
import * as ops from "./operations";
import { asyncAdd } from "./async";

console.log("Hello");
const myFunc1 = function () {
  console.log("This statement is inside the function");
};
// function myFunc(name, weather, ...others) {
//   console.log("Hello " + name + ".");
//   console.log("It is " + weather + " today.");
//   for (let i = 0; i < others.length; i++)
//     console.log("Extra arg: " + others[i]);
// };

// console.log("This statement is outside the function");
// myFunc1();
// myFunc("Olusola");
// myFunc("Adeola", "sunny", "one", "two", "three");
function myFunc(nameFunction) {
  return ("Hello " + nameFunction() + ".")
}
console.log(myFunc(function () {
  return "Adams";
}));
// chaining functions
function printName(nameFunction, printFunction) {
  printFunction(myFunc(nameFunction));
}
printName(function () { return "Adam" }, console.log);

function messageFunction(name, weather) {
  let message = "Hello, Adam";
  if (weather === 'sunny') {
    let message = "It is a nice day";
    console.log(message);
  }
  else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}

// messageFunction('Olu', 'raining');
// messageFunction('Olu', 'hot');
// console.log("Olusola".slice(2));
let firstVal = "51";
let secondVal = "5.1";
const result = Number(firstVal) + Number(secondVal);
const result2 = parseInt(firstVal) + parseInt(secondVal);
const result3 = parseFloat(firstVal) + parseFloat(secondVal);
// console.log(result2);
// console.log(result3);
/// Arrays
// let myArray = new Array();
let newArray2 = [];
let myArray = [100, "Adam", true];

// console.log(myArray[0], myArray[1], myArray[2]);

// Enumerate array content
// myArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));
// destructuring of array
let [age, nm, isCold] = myArray;
console.log(`Age: ${age}, name: ${nm} `)
// Array functions
let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayat", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];
// get products whose stock value > 0
console.log(products.filter(item => item.stock > 0))
// get products whose stock value > 0 and get the total cost of such products

let totalValue = products.filter(item => item.stock > 0)
  .reduce((prev, item) => prev + item.price * item.stock, 0);
console.log(`Total stock value: ${totalValue}`);

// Working with Objects
let myData = new Object();
myData.name = "Olusola";
myData.weather = "sunny";
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);
//
let name = "Festus";
myData = {
  name,
  weather: 'sunny',
  printMessages: () => {
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  }
}
myData.printMessages();

class MyData {
  constructor() {
    this.name = "Olusola";
    this.weather = "wet";
  }
  printMessages = () => {
    console.log(`Hello ${this.name}.`);
    console.log(`Today is ${this.weather}.`);
  }

}
let myObj = new MyData();
myObj.printMessages();
// copying properties from one object to another
let secondObj = {};
Object.assign(secondObj, myObj);
secondObj.printMessages();

// Capturing parameter names from objects
const myEmployee = {
  name: "Bob",
  location: {
    city: "Paris",
    country: "France"
  },
  employment: {
    title: 'Manager',
    dept: 'Sales'
  }
}
function printDetails(data) {
  console.log(`Name: ${data.name}, City: ${data.location.city},
   Country: ${data.location.country}, 
   Role: ${data.employment.title}`);
}
printDetails(myEmployee);
function printDetails2({ name, location: { city, country }, employment: { title } }) {
  console.log(`Name: ${name}, City: ${city},
  Country: ${country}, 
  Role: ${title}`);
}
printDetails2(myEmployee);

// Modules
let values = [10, 20, 30, 40, 50];
let total2 = sumValues(values);
// console.log(total2);
// console.log("Total: ", sumValues(values));
// console.log("Odd Total: ", oddOnly(values));
// console.log(`Multiply: ${ops.multiply(values)}`);
// console.log(`Subtract: ${ops.subtract(1000, values)}`);

let res = asyncAdd(values)
  .then((data) => { console.log("Total Sum: ", data); })
  .catch(err => { console.log(err); });
// simplify async using await

async function doTask(task) {
  let total = await asyncAdd(values);
  console.log("Main Total: ", total);
}
doTask();





