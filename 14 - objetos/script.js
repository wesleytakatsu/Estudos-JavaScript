let amigo = {
    nome: 'Pirata',
    idade: 17,
    peso: 65,
    engordou(p){
        this.peso += p
    }
}

console.log(`O peso do ${amigo.nome} é ${amigo.peso}`)
amigo.engordou(10)
console.log(`O novo peso é ${amigo.peso}`)