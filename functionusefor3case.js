

count = [45,89,9585,65,56,4,45,54,78,87]
loop(count);

numo = [5,9,89,78,4,41,52];
loop(numo);

function loop (count){
    for (let i = 0; i < count.length; i++) {
        const element = count[i];
    
       
        evenify(element)
    }
}


function evenify (num){
    if(num % 2 == 0){
        console.log(num,": Its an even Number")

    }
    else{
        console.log(num * 2,": Its an Odd from even Number")
    }
}