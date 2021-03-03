function main(name, age, task){
    console.log("hello", name);
    console.log('your age', age);
    task();
}

function gosol(){
    console.log('Tomer gosol korte hobe')
}

function dhoa(){
    console.log('Tomer hat poriskar korte hobe')
}

main('Redoan Ahmed',21,gosol)
main('Manik Mia',30,dhoa)