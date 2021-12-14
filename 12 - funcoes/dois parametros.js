function soma(n1 , n2){
    return n1 + n2
}

function somaalt( n1 = 0 , n2 = 0){ // SE FALTAR PARÂMETROS SERÁ CONSIDERADO COMO 0
    return n1 + n2
}


console.log(soma( 2 , 3 ) )
console.log(soma( 1 ) )     // O RETORNO SERÁ NaN (NOT A NUMBER) PORQUE FALTOU O 2º PARÂMETRO

console.log(somaalt( 2 , 3 ) )
console.log(somaalt( 2 ) )