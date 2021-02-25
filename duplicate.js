var number = [4, 5, 4, 5, 9, 7, 65, 65, 6, 8, 7]

var unique = [];

for(var i = 0; i < number.length; i++){

    var element = number[i];
    var index = unique.indexOf(element);
    if( index == -1){
        unique.push(element)
        
    }
}
console.log(unique)