function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')

    var res = document.getElementById('res')
    // var res = document.querySelector('div#res')
    // MESMO QUE O COMANDO ANTERIOR, SÓ PARA DEIXAR DE EXEMPLO

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('ERRO! Veifique o ano escrito no formulário!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerText = `A idade da pessoa digitada é ${idade}!`
        //alert(`${idade}`)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        var genero = ''
        if(fsex[0].checked){
            genero = 'masculino'
            if(idade < 18){
                // CRIANÇA
                img.setAttribute('src' , 'homem-crianca.png')
            }else if (idade < 50){
                // ADULTO
                img.setAttribute('src' , 'homem-adulto.png')
            }else{
                // IDOSO
                img.setAttribute('src' , 'homem-idoso.png')
            }

        }else if(fsex[1].checked){
            genero = 'feminino'
            if(idade < 18){
                // CRIANÇA
                img.setAttribute('src' , 'mulher-crianca.png')
            }else if (idade < 50){
                // ADULTO
                img.setAttribute('src' , 'mulher-adulta.png')
            }else{
                // IDOSO
                img.setAttribute('src' , 'mulher-idosa.png')
            }
        }
        res.innerHTML = `Detectamos pessoa do gênero ${genero} com idade de ${idade} anos.<br>`
        
        res.appendChild(img)
        
        res.style.textAlign = 'center'  // MUDANÇA DE ESTILO EM JAVA SCRIPT
    }
}