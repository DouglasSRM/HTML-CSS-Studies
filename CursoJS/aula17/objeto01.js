let amigo = {
nome: 'João',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}

function showAmigo(){
    console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
}

showAmigo()

amigo.engordar(3)

showAmigo()
