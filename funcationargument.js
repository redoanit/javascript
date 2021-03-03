function add(number1, number2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const numb = arguments[i];
        sum = sum + numb;
    }
    return sum;
}

var result = add(10,10,10,10,10,10);
console.log(result)