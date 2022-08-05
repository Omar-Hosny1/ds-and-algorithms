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
! IMPORTANT FUNCTIONS IN OBJECT CLASS =>    https://www.linkedin.com/posts/slobodan-gajic_object-methods-in-javascript-activity-6961205130729799680-cBS9?utm_source=linkedin_share&utm_medium=member_desktop_web
*/

let MAP = new Map(); // MAP
