// // 1. multipy two number without using * operatprs
// function multiply(a, b){
//         if (b === 0) return 0;
//         return b > 0 ? a + multiply(a, b - 1) : -multiply(a, -b);
// }
// console.log(multiply(3, 4));

// // 2. find the smallest of three number
// function findSmallest(a, b, c){
//     if(a <= b && a <= c){
//         console.log(a);
//     }else if(b <= a && b <= c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// console.log(findSmallest(3, 7, 5));


// // 3. reverse a string without using buildIn function
// function reverseString(str){
//      for(let i= str.length-1; i >= 0; i--){
//         console.log(str[i]);
//      }
// }
// console.log(reverseString("hello"));


// // 4. count the occurences of each character
// function charCount(str){
// var object = {};
// var counter = 0;

// for(let char of str){
//    if(char[str] !== 0){
//       counter++;
//    }
//    object.push(char[str]);
// }
// return object;
// }
// console.log(charCount("hello"));


// 5. Find the intersection of two arrays
function arrayIntersections(arr1, arr2){
    var counElement = 0;
    var newArr = [];
  for(let i=0; i<=arr1.length; i++){
    for(let j=0; j <= arr2.length; j++){
         
        if(arr1[i] === arr2[j]){
            counElement++;
            break;
        }
        newArr.push(counElement);
    }
  }
  return newArr;
}
console.log(arrayIntersections([1,2,3,4],[3,4,5,6]));
