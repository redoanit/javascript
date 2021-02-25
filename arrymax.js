var marks = [10, 61, 65, 56, 326, 65, 65, 748, 41, 74];

var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max)