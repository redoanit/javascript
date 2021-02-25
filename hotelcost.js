function hotelCost (day){
    
var tk = 0;
if(day <= 10){
    tk = day * 100;
}
else if (day <= 20){
    var fast10 = 100 *10;
    var remaining = day - 10;
    var second10 = remaining * 50;
    tk = fast10 + second10;
}
else{
    fast10 = 100 *10;
    second10 = 50 * 10;
    remaining = day - 20;
    var thirdpart = remaining * 40;
}
return tk;

}
var totalCoast = hotelCost(15);
console.log(totalCoast)