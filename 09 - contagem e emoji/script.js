function calcular(){
    let inicio = document.getElementById('inicio')  //LET É O MESMO Q VAR
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    var finicio = Number(inicio.value)
    var ffim = Number(fim.value)
    var fpasso = Number(passo.value)

    //alert(`Início é ${finicio}, fim é ${ffim} e passo é ${fpasso}.`)

    if (inicio.value.length < 1 || fim.value.length < 1 || passo.value.length < 1){
        alert('Nenhum campo pode estar vazio!')
    }else{
        if (fpasso < 1){
            alert('Passo inválido. Considerando passo com valor 1!')
            fpasso = 1
        }

        resultado.innerHTML = `Início: `

        if(finicio < ffim){     //CONTAGEM CRESCENTE
            for(var x = finicio ; x <= ffim ; x += fpasso){
                resultado.innerHTML += ` \u{1F449} ${Number(x)}, `
            }
        }
        if(finicio > ffim){     //CONTAGEM DECRESCENTE
            for(var x = finicio ; x >= ffim ; x -= fpasso){
                resultado.innerHTML += ` \u{1F449} ${Number(x)}, `
            }
        }
        resultado.innerHTML += `Fim! \u{1F3F4}` //COM SÍMBOLO DA BANDEIRINHA
    }



    //resultado.innerHTML = `Início é ${finicio}, fim é ${ffim} e passo é ${fpasso}.`

}