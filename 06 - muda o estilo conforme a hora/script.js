function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 23     // use para forçar hora para testes

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora <= 12){
        //BOM DIA!
        imagem.src = 'manha.png'
        document.body.style.background = '#F5DEB3'
    }else if(hora <= 18){
        //BOA TARDE
        imagem.src = 'tarde.png'
        document.body.style.background = '#DEB887'
    }else{
        //BOA NOITE
        imagem.src = 'noite.png'
        document.body.style.background = '#4B0082'
    }

}