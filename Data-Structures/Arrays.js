/* 
Some Info About Arrays 
1- lookup => O(1)
2- push =>  O(1)
3- insert => O(n)
4- delete => O(n)
*/

const Strings = ["a", "b", "c", "d"];

//Accessing
Strings[0]; // O(1)

// push
Strings.push("e"); // O(1)

// pop
Strings.pop(); // O(1)

//unshifting
Strings.unshift("x"); // O(n)

//insert
Strings.splice(2, 0, "e"); // O(n)

//delete
Strings.splice(2, 1); // O(n)

console.log(Strings);
