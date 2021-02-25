function fivonacci (n){
    var fivo = [0,1]
    for ( var i = 2; i <= n; i++){
        fivo[i]= fivo[i-1]+fivo[i-2];
    
        // console.log(fivo[i], fivo[i-1], fivo[i-2])
        
    }
    return fivo;
    }
    var result = fivonacci(30);
    console.log(result)