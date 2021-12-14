let numeros = []
function adicionar(){

    //numeros.push(5)
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let lista = document.getElementById('lista')
    
    if(num.value.length < 1){
        alert (`Digite um número!`)
    }else if(Number(num.value) < 1 || Number(num.value) > 100){
        alert (`O valor não está entre 1 e 100!`)
    }else{
        //alert('passo 1')
        if(numeros.indexOf(Number(num.value)) != -1 ){
            alert(`O número ${num.value} já está na lista`)
        }else{
            numeros.push(Number(num.value))
            //alert(`O número ${numeros[numeros.length-1]} foi adicionado com sucesso!)
            let item = document.createElement('option')
            item.text = num.value
            lista.appendChild(item)
            //alert('Número adicionado!')
        }
    }
    res.innerHTML = ''
    num.value = ''      //LIMPA O CAMPO
    num.focus()         //FOCA NO CAMPO PRA DIGITAR
}

function finalizar(){
    if (numeros.length < 1){
        alert('Adicione algum valor a tabela antes de finalizar!')
    }else{
        let posicoes = numeros.length
        let ordenado = numeros
        ordenado.sort()
        let maior = ordenado [ ordenado.length - 1 ]
        let menor = ordenado [0]
        let soma = 0
        for (let x in numeros){
            soma += numeros[x]
        }
        let media = soma / numeros.length
        res.innerHTML = `<p>Ao todo temos ${posicoes} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${media}</p>`
    }
}