// 1. Print an array
var array = [1,2,3]
// console.log(array);
for(var i =0; i <= array.length; i++){
    console.log(array[i]);
}
console.log("_____________________________________________________");

// 2. Print numbers from 1 to n 
var n = 1;
while (n <= 5) {
    console.log(n);
    n++;
}
console.log("_____________________________________________________");

// 3. Find the sum of two numbers
var a = 2;
var b = 3;
var c = a + b;

console.log(c);
console.log("_____________________________________________________");

// 4. Check if number is even or odd 
var num = 3;

if(num % 2 == 0){
    console.log(num , " is even number");
}else {
    console.log(num, " is odd number");
}
console.log("_____________________________________________________");



// 5 .find the smallest of two number 
var a = 3;
var b = 5;

if (a > b) {
    console.log(a, " is greather then ", b);
} else if (a < b) {
    console.log(a, " is less then ", b);
} else {
    console.log("None of them match");
}
console.log("_____________________________________________________");



// 6. Check if string is empty 
var name = "";

if(name == ""){
    console.log(" true");
}else {
    console.log("false");
}
console.log("_____________________________________________________");



// 7. count the element in array 
var newArray = [1,2,3,4];
var count = 0;

for(var i=0; i < newArray.length; i++){
    // console.log(newArray[i]);
    count++;
}
console.log(count);
console.log("_____________________________________________________");


// 8. Print first character of a string 
var str = "Hello";

console.log(str[0]);
console.log("_____________________________________________________");



// 9. Swap two numbers 
var a = 3;
var b = 4;

a = 4;
b = 3;

console.log("a = ", a ,",", "b = ", b);
console.log("_____________________________________________________");



// 10. Find the difference of two numbers 
var a = 10;
var b = 6;

var result = (a - b);
console.log(result);
console.log("_____________________________________________________");


// 11. Find the last element of an array 
var newArr = [5,6,7,8];

console.log(newArr[3]);
console.log("_____________________________________________________");



// 12. convert a string to upparcase
var string = "hello";

console.log(string.toUpperCase());
console.log("_____________________________________________________");


// 13. check if number is positive or not 
var number = 7;

if(number > 0){
    console.log(number, " is Positive");
}else if(number < 0){
    console.log(number, " is Negative");
}
console.log("_____________________________________________________");





// 14. Print first n even number 
var numbers = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);

    if(numbers % 2 == 0){
        console.log(numbers[i]);
    }
}
console.log("_____________________________________________________");



// 15. Find the length of string 
var string2 = "Apple";

console.log(string2.length);
console.log("_____________________________________________________");




// 16. Check if all the element of array is positive 
var positiveArr = [1,2,3];

for(var i= 0; i <= positiveArr.length; i++){
if(positiveArr > 0){
    return true;
}else{
    return false;
}
}
console.log("_____________________________________________________");



// 17.Print a string multiple times 
var string3 = "Hi";

for(var i=0; i < 3; i++){
    console.log(string3);
}
console.log("_____________________________________________________");

// 18. Find the remainder when dividing two numbers
var a = 10;
var b = 3;

var results = (a % b);
console.log(results);


// // 19. Reverse the string 
// var string4 = "car";


// console.log(string4);