// How to create a new array

new Array(); // creates an empty array

const fruits =["Banana", "Orange", "Apple", "Mango"]; // creates an array with 4 elements
let fruit=fruits[2]; // accesses the first element of the array, which is "Banana"
console.log(fruit); // outputs "Apple"
v1=fruits.at("Orange"); // accesses the first element of the array, which is "Banana"
console.log(v1); // outputs "Apple"

 index= fruits.indexOf("Apple"); // returns the index of "Apple" in the array, which is 2
Console.log(index); // outputs 2
// Type of sort 

// array.sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// array.reverse()

// daca combin array.sort() with array.reverse(), you can sort the array in descending order.
// toSorted() - creates a new array with the elements sorted in ascending order, without modifying the original array.
// toReversed() - creates a new array with the elements in reverse order, without modifying the original array. 



// Looping through an array
 const cars = ["BMW", "Volvo", "Saab", "Ford"];

 //Interate over the Array values

 let text = "";

 for (let x of cars) {
    text += x + "<br>";
 }

 document.getElementById("demo").innerHTML = text;

 const numbers = [45, 4, 9, 16, 25];

 let txt = "";

 numbers.forEach(functiunta);

 function functiunta(value, index, array) {
    txt += value + "<br>";
 }