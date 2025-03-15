// Move all zeros to end of an array 
function moveZeros(){
var nonZeros = 0;

for(let i=0; i < mixArray.length; i++){
    if(mixArray[i] !== 0){
        mixArray[nonZeros] =  mixArray[i];
       nonZeros++;
    }
}
for(let i= nonZeros; i < mixArray.length; i++){
    mixArray[i] = 0;
}
return mixArray;
}
// var mixArray = [0, 1, 0, 3, 12];
// var mixArray = [0, 0, 1, 0, 5];
var mixArray = [4, 2, 0, 0, 1];

console.log(moveZeros());



// Convert roman number to integer
function ConvertRoman(){
    const romanObj = {
        // , II, III, , V, VI, VII, VIII, IX, and 
        "I": 1, "V": 5, "X":10, "L": 50, "C": 100, "M": 1000, 
    }
    var count = 0;
    for(let i =0; i < romanNum.length; i++){
        let current = romanObj[romanNum[i]];
        let next = romanObj[romanNum[i + 1]];

        if(current < next){
        count += (next - current);
        count++;
        }
    }
}
var romanNum = "XII";
