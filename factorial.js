// function fact (number){
    
// var factorial = 1;
// for ( var i = 1; i<number; i++ ){
    
//     factorial = factorial*i;

 
// }
// return factorial;
// }

// var facto = fact(5);
// console.log(facto)


function factorial (num){
    var fact = 1;
var i = 1;
while ( i < num)
{  
    // console.log(i);
    fact = fact*i;
    i++;
    
}
return fact;
}
var result = factorial(10);
console.log(result)