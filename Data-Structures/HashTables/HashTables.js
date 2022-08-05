/* 
Some Info About Hash Tables 
1- lookup => O(1)
2- push =>  O(1)
3- insert => O(1)
4- delete => O(1)
*/

let user = {
  name: "omar",
  age: 18,
  magic: true,
  sayHello: () => console.log("Hello!"),
};

//ACCESSING
user.age; // O(1)

// INSERT
user.gender = "MALE"; // O(1)

/*
! REMEMBER THE KEYS IN THE OBJECTS IS ALWAYS STRING
! YOU CAN STORE KEYS IN DIFFRENT DATATYPES USING MAP
*/

let MAP = new Map(); // MAP
