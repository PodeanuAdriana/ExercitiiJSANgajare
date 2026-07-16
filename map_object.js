// is an objdect that can store collections of 
/* key values pairs, similar to a dicionary
Characteristics:
 Key Type
 - one type
 Insertion Order
 -remebers the origial insertion order of the keys
 Size 
 -the number of itmes in a Map 
 Performance
 -optimized for frequent additions and removals of key value pairs
 Interations

*/
// Create a new Map 

const fruits = new Map();

fruits.set('apple', 200);
fruits.set('banana', 100);

console.log(fruits.get('apple')); // 200


// with an Array of arrays

const fruits2 = new Map([
    ['mango', 200],
    ['rodie', 100]
]);

// map methods get(), set() si size

// weakmap - a collection of key-value pairs where the keys must be objects

 let myMap = new WeakMap();

 let myObj= {name: 'John', age: 30};

 myMap.set(myObj, 'player');
 let type = myMap.get(myObj); // 'player'
 