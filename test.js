console.log("Hello World");


// Sets : It is the collection of unique elements , we can never ever have duplicate elements

let num = [1,2,3,1,1,2,3];
console.log(num);


// Set looks like objects, we need to understand the difference in the structure
// create a set : Alwys use costructor function

let numbers = new Set();
console.log("", numbers);

let obj = {};
console.log(obj);


// Most important question : Remove the duplicate elements from an array.
let value = new Set("harsha");
let value2 = new Set(num);


console.log(value);
console.log(value2);


let newNum = [];
newNum = [...value2, ...value]    //spread opertor to do the destructing of a set, creating array from a set
console.log(newNum);



// Basic functions which set provides.

// add, has, size is a property, has, clear, delete


// add funtion 
let mySet = new Set();
console.log("My set", mySet);

mySet.add(12)   // numeric value
mySet.add("student")   // string value
mySet.add([1,2,3,4,5])   // array value
mySet.add(true)   // boolean value
mySet.add({id:1, name:"john"})   // obj value


console.log(mySet);


// has function == checks if the element exists or not
// returns you boolean value

console.log("has function", mySet.has(12));
console.log("has function2", mySet.has("elevation"));
console.log("has function2", mySet.has(true));


// size == how many elements are present in the set
console.log(mySet.size);


// delete
mySet.delete(12)
console.log(mySet);


// clear == deletes all the elements from the set 
mySet.clear();
console.log(mySet);