let num = [5 , 8 , 3 , 2 , 7]

console.log(num)

num.sort()  //ORDENA EM ORDEM CRESCENTE

console.log(num)

num.push(1) //CRIA MAIS UMA POSIÇÃO E ACRESCENTA O 1

console.log(num)

console.log(`O vetor tem ${num.length} posições`)

console.log(`A primeira posição do vetor é ${num[0]}.`)


// FAZEMDO A VARREDURA COM O FOR COMUM
for(pos = 0 ; pos < num.length ; pos++ ){
    console.log(`A posição ${pos} do vetor é ${num[pos]}`)
}

//FAZENDO A VARREDURA COM O FOR ESPECIAL
//A VARIAVEL pos FOI CRIADA DENTRO DO FOR
//FUNCIONA PARA VETORES E OBJETOS
for (let pos in num){
    console.log(num[pos])
}