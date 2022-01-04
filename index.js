
var numbers = [1,2,3,4,5,2,5,6];

var mySet = new Set(numbers);
var myMap = new Map();
console.log(numbers);
console.log(mySet);

//Remove the duplicate elements from the array [1,1,1,2,3,5,4,5,6,6]
//and return a new array having unique values

var arr = [1,1,1,2,3,5,4,5];
var tempSet = new Set(arr);
console.log(arr);
console.log(tempSet);
var newArr = [...tempSet];
console.log(newArr);

//spread operator in JS => ...

var arr =[1,2,3,4,5]
arr[0] = 1;
console.log(arr);
var mySet2 = new Set();

mySet2.add(12);
mySet2.add("hello");
mySet2.add([1,2]);
mySet2.add({name:"john"});
console.log(mySet2);
mySet2.delete("hello")
mySet2.clear()
console.log(mySet.has());

// add, delete, has, clear, size

// const str = 'abcadeecfb';
// const mySet = new Set(str);
// const strArray = [...mySet];
// console.log(strArray.join(''));