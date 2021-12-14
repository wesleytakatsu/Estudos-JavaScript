function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    

    if(num.value.length == 0){
        alert('Digite um número!')
    }else{
        let n = Number(num.value)

        tab.innerHTML = ``

        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = `tab${c}`  //SOMENTE PARA APRENDER A COLOCAR VALORES NO ITEM
                                    //NÃO ESTÁ SENDO USADO AGORA NO PROGRAMA
                                    //OS OPTIONS EM FORMULÁRIOS PRECISAM DESSE VALOR PRA PASSAR
                                    //O RESULTADO  PASSADO É tab1 tab2 tab3 E ASSIM POR DIANTE
            tab.appendChild(item)
            c++
        }

    }
}