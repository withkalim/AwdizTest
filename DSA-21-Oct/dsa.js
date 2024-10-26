// 1. Print number from 10 to 20 with gap of 2
var i = 10;
while (i <= 20) {
    console.log(i);
    i+=2;
}


// 2. Print even number from 1 to 10
for(var i = 0; i <= 10; i++){
   if(i % 2 == 0){
    console.log(i);
   } 
}


// 3 Print sum of numbers from 1 to 5
var sum = 0;
for(var i = 0; i <= 5; i++){
    sum += i;
}
console.log(sum);



// 4. Print numbers in reverse from 5 to 1
for(var i = 5; i >= 1; i--){
    console.log(i);
}


// 5. check if a number is positive or negative
var num = 3;

if(num > 0){
    console.log("Positive");
}else {
    console.log("Negative");
}


// 6. Print first 3 multiplies of 3
for(var i = 1; i <= 3; i++){
    console.log(i * 3);
}


// 7. Print largest of two numbers
var num = 5;
var num2 = 9;

if(num > num2){
    console.log(num + " is greater then " + num2);
}else {
    console.log(num2 + " is greater then " + num);
}


// 8. check if number is even or odd
var numbers = 4;

if(numbers % 2 === 0){
    console.log(numbers + " is even number");
}else {
    console.log(numbers + " is odd number");
}


// 9. Print all the number from 1 to n is (4)
var num = 1;
while (num <= 4) {
    console.log(num);
    num++;
}


// 10. Find the two number
var num1 = 3;
var num2 = 8;

var num3 = num1 + num2;
console.log(num3);


// 12 . check if number is greater then 10
var x = 12;

if(x > 10){
    console.log(x + " is greater then 10");
}else {
    console.log(x+ " is less then 10");
}



// 13.Print first 4 odd numbers
for(var i = 1; i <=8; i++){

    if(i % 2 == 1){
        console.log(i);
    }
}



// 14. Print the product of two numbers
var num = 4;
var num2 = 5;

var sum = num * num2;
console.log(sum);



// 15. check number is zero or not
var num = 0;
if(num <= 0){
    console.log("Yes");
}else {
    console.log("No");
}


16.Print first 3 multiples of 5
for(var i =1; i <= 3; i++){
    console.log(i * 5);
}



// 17. Print the sum of 3 positive numbers
var sum = 0;

for(var i = 1; i <= 3; i++){
    //  console.log(i);
    sum += i;
}
console.log(sum);



// 18. check number is less then 100
var a = 46;

if(a > 100){
    console.log("No");
}else {
    console.log("Yes it less then 100");
}


// 19. Print the difference between two number
var first = 10;
var second = 4;

var diff = first - second;
console.log(diff);

// 20. Print numbers from 1 to 10
var starting  = 1;
var end =  10;

while (starting <= end) {
    console.log(starting);
    starting++;
}