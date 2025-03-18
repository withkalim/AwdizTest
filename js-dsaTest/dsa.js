// 1. Reverse a string
// function ReverseStr(str){
//    var storeStr = "";

//    for(let i = str.length-1; i >= 0; i--){
//        storeStr += str[i];
//    }
//   return storeStr;
// }
// console.log(ReverseStr("hello"));

// function ReverseStr(str){
//    var storeStr = "";

//    for(let i = str.length-1; i >= 0; i--){
//        storeStr += str[i];
//    }
//   return storeStr;
// }
// console.log(ReverseStr("javaScript"));

// 2. first non-repeating character
function nonRepeatingChar(x) {
  var storeUnseenChar = {};

  for (let char of x) {
    storeUnseenChar[char] = (storeUnseenChar[char] || 0) + 1;
  }
  for (let char of x) {
    if (storeUnseenChar[char] === 1) {
      return char;
    }
  }
  return "not found";
}
console.log(nonRepeatingChar("aabbccd"));

function anoternonRepeat(y) {
  var unseeStore = {};

  for (let char2 of y) {
    unseeStore[char2] = (unseeStore[char2] || 0) + 1;
  }
  for (let char2 of y) {
    if (unseeStore[char2] === 1) {
      return char2;
    }
  }
  return "not found";
}
console.log(anoternonRepeat("abcabcde"));

// 3. find the missing number
function findMissingnum(num, n) {
  var actualTotal = 0;
  var n = 3;
  var expectedTotal = (n * (n + 1)) / 2;

  for (let i = 0; i < num.length; i++) {
    actualTotal += num[i];
  }
  return actualTotal - expectedTotal;
}
console.log(findMissingnum([3, 0, 1]));

function findMissinNumber(arr, n) {
  var n = 5;
  var actualSum = 0;

  var expectSum = (n * (n + 1)) / 2;
  for (var i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return actualSum - expectSum;
}
console.log(findMissinNumber([0, 1, 2, 4, 5]));

// 4. Merge two sorted Array
function MergeAray(arr1, arr2) {
  var newArr = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
//  for add remaining element of array
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}
console.log(MergeAray([1, 3, 5], [2, 4, 6]));

function MergeAray(arr1, arr2) {
    var newArr = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i]);
        i++;
      } else {
        newArr.push(arr2[j]);
        j++;
      }
    }
  //  for add remaining element of array
    while (i < arr1.length) {
      newArr.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      newArr.push(arr2[j]);
      j++;
    }
    return newArr;
  }
  console.log(MergeAray([0, 8, 10], [1, 9, 11]));

//5. Longest substring without repeating characters
function LongestSubstr(str){
var strCount = 0;

}
console.log(LongestSubstr("abcabcbb"));

// 6. Two sum Problem
function TwoSum(num){
var indexStore = [];

for(let i=0; i<num.length; i++){
    for(let j=i+1; j<num.length; j++){

         if(num[i] + num[j] === target) {
            indexStore.push(i, j);
        }
    }
}
return indexStore;
}
var target = 9;
console.log(TwoSum([2, 7, 11, 15]));

function sunTwo2(num2){
  var storeInd = [];

  for (let i = 0; i < num2.length; i++) {
    for (let j = i+1; j < num2.length; j++) {

      if(num2[i] + num2[j] === target2){
          storeInd.push(i, j);
      }
    }
 }
 return storeInd;
}
var target2 = 6;
console.log(sunTwo2([3, 2, 4]));


// 7. find the Intersection of two array
function findIntersection(num1,num2){
var storeCommon = [];

for(let i=0; i < num1.length; i++){
  for(let j=0; j < num2.length-1; j++){

    if(num1[i] == num2[j]){
    storeCommon.push(num1[i]);
     break;
    }
  }
}
return storeCommon;
}
console.log(findIntersection([1,2,2,1],[2,2]));

function Intersection2(a, b) {
  var newArray = [];

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length - 1; j++) {
      if (a[i] == b[j]) {
        newArray.push(a[i]);
        break;
      }
    }
  }
  return newArray;
}
console.log(Intersection2([4, 9, 5], [9, 4, 9, 8, 4]));


// 8. Miximum subarray 
var numberkar = [-2,1,-3,4,-1,2,1,-5,4];
function sum(arr){
    var maxinum = 0;
    var sum = 0;

    for (let i = 0; i < numberkar.length; i++) {
        sum = sum + numberkar[i];
        
        if(maxinum < sum){
            maxinum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return maxinum;
}
console.log(sum(numberkar));