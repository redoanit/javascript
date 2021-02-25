// function count(number){
    
// for(var i=0; i < number; i++){
//     console.log(i)
// }
// return number;

// }var count1 = count(40);
// console.log(count1)


function largestNumber (number){
    var larger = number[0];
    for(var i = 0; i< number; i++){
        var element = number[i];
        if ( element < larger)
        { larger = element}

    }
    return larger;
}

var fast = largestNumber([ 20, 21, 22, 23, 85, 54, 78])
console.log(fast)