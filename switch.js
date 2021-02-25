var a =1;
var b = 2;
console.log("before swap",a,b)
var tamp = a;
a =b;
b = tamp;
console.log('after swap',a,b)


var x = 2;
var y = 4;

x = x+y;
y= (x+y) - y;
x = x-y;