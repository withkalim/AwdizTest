// 1. Reverse a number
// function reverseNumber(num){
//  var reverseNumcheck = 0;

//  while(num !== 0){
//    let lastDigit = num % 10;   //for get last digit like 4 first
//    reverseNumcheck = reverseNumcheck * 10 + lastDigit;   //will get 0 * 10 + 4 = 4 

//    num = (num / 10) | 0; //remove last digit for not consider it last digit of element
//  }

// return reverseNumcheck;
// }
// // console.log(reverseNumber(1234));
// console.log(reverseNumber(-567)); //minus number reverse bcs number are reverse but their signs are same like (- minus) in our question


// 2. check if two string are anagram
// function isAnagram(str1, str2){
//  var check1 = str1.split("").sort().join();
//  var check2 = str2.split("").sort().join();

//  if(check1 == check2){
//     return true
//  }else {
//    return false
//  }
// }
// console.log(isAnagram("listen", "silent"));



// 3. Find the longest word in sentence
// function longestWord(sentence){
//     var tempStore = "";
//     var checkFinal = "";

//     for(let i=0; i<sentence.length; i++){
//         tempStore += sentence[i];

//         if(tempStore )

//     }
// }
// console.log(longestWord("javaScript is an amazing language"));
// console.log(longestWord("i love coding"));



// 4. Find the third largest number in an array
// function thirdLargest(arr){
//   var largest = Infinity;
//   var secondLargest = Infinity;

//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > largest){
//       largest = arr[i];
//       arr[i]++;
//       if()
//     }
//   }
// }
// console.log(thirdLargest([4,1,6,8,10]));



// first non-repeat word [simple solve look once]
function firstNonRepatingChar(str){
var checkCharRepeat = {};

// loop for count char count
for(let char of str){
  checkCharRepeat[char] = (checkCharRepeat[char] || 0) + 1; 
  // if char seen first time add in char 1 and it seen before already +1
}

//loop for check non repear char
for(let char of str){
  if(checkCharRepeat[char] === 1){
    return char;
  }
}
return null;
}
console.log(firstNonRepatingChar("hello"));