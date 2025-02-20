// Find the target of index element
// var arr = [1,2,3,4,5,6];
// var target = 1;

// function findTarget(){
// var left = 0;
// var right = arr.length-1;

// while(left <= right){
//     var midIndex = Math.floor((left + right)/2);
//     var indexEle = arr[midIndex];
    
//     if(target == indexEle){
//         return arr[midIndex];
//     }else if(target > indexEle){
//         left = midIndex + 1;
//     }else {
//         right = midIndex - 1;
//     }
// }
// return "Not found";
// }
// console.log(findTarget()); 


// Find the second smallest number of array 

// function smaller(arr){
//   let lower = secondSmaller = arr[0];

//   for(let i=0; i<arr.length; i++){

//       if(arr[i] < lower){
//           secondSmaller = lower;
//           lower = arr[i];
//       } else if(secondSmaller !== 0 && arr[i] < secondSmaller){
//           secondSmaller = arr[i];
//       }
//   }
//   return secondSmaller;
// }



//Reverse words in sentence
// function reverseWords(sentence){
// var word = ""; //for store each charachter of sentence temporary
// var result = ""; //store reversed sentence

// for(var i=0; i<=sentence.length; i++){
  
//   if(i < sentence.length && sentence[i] !== ' '){
//     word = sentence[i] + word;
//   }else {
//     result += word + (i < sentence.length ? ' ' : '');
//     word = "";
//   }
// }
// return result;
// } 
// console.log(reverseWords("hello world"));

// reverse words with another input
// function reverseTwo(sentence2){
// var tempStore = "";
// var reverseWord = "";

// for(var i=0; i<=sentence2.length; i++){

//   if(i < sentence2.length && sentence2[i] !== ' '){
//     tempStore = sentence2[i] + tempStore;
//   }else {
//       reverseWord += tempStore + (i < sentence2.length ? ' ': '');
//       tempStore = "";
// }
// }
// return reverseWord;
// }
// console.log(reverseTwo("javaScript is fun"));



// find the missing Number 
// function findMissinNumber(arr, n, l){
//     var l = arr.length;
//     var n = 5;
//     var actualSum = 0;

//  var expectSum = (n *(n+1))/2;
// //  console.log(expectSum);
// for(var i=0; i<l; i++){
//    actualSum += arr[i];
// }
// return actualSum - expectSum;
// }
// console.log(findMissinNumber([1,2,4,5]));




// implement a string compression algorithm to count the repeat character 
// function compressString(str){
// var compressed = "";
// var count = 1;

// for(var i=0; i<str.length; i++){
//   if(str[i] === str[i + 1]){
//     count++;
  
//   }else {
//   compressed += str[i] + (count > 1 ? count : '');
//   count = 1;
//   }
// }
// return compressed.length < str.length ? compressed : str;
// }
// console.log(compressString("aaabbcddd"));



// again with another input value
// function compressedCount(str){
// var compressed = "";
// var strCount = 1;

// for(var i=0; i<str.length; i++){
//   if(str[i] === str[i + 1]){
//     strCount++;
  
//   }else {
//     compressed += str[i] + (strCount > 1 ? strCount : '');
//     strCount = 1;
//   }
// }
// return compressed.length < str.length ? compressed : str;
// }
// console.log(compressedCount("aaaaccbbdff"));
// a4c2b2df2  aaaaccbbdff