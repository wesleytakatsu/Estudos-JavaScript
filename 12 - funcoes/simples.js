function parimpar(n){   //VERIFICA SE O NÚMERO É PAR OU ÍMPAR
    if( n % 2 == 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}

var res = parimpar(11)

console.log(res)

console.log(parimpar(10))
