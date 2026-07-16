const numbers = new Set([1, 2, 3, 2, 5]);


//there are no duplicates in a set

// for adding a new element in a set we use add() method

numbers.add(6);
Console.log(numbers); // Set(5) { 1, 2, 3, 5, 6 }

// you can also add multiple elements in a set using add() method
// you can know the size of a set using size property

numbers.size;

Console.log(numbers.size); // 5

// You can list all the elements of a set using  for..of loop

const letters = new Set(['a', 'b', 'c', 'd', 'e']);

for (const letter of letters) {
  console.log(letter);
}

// methods has() - specify if an element is present in a set or not 

// Exemple of use :

const letters2 = new Set(['a', 'b', 'c', 'd', 'e']);

answer = letters2.has('h'); // false


// *********************************ForEach() method in Set


const vegetables = new Set(['potato', 'tomato', 'cucumber', 'carrot']);

let var1=""
// modern way to iterate over a set is to use forEach() method
vegetables.forEach((value) => {
  var1 += value + " ";
})   
// traditional way to iterate over a set is to use ForEach() method


const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})

// values to get the Interator object of the set, which contains all the values in the set. You can then use a for...of loop to iterate over the values.