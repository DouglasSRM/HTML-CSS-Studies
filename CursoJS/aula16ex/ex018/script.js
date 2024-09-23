const num = document.querySelector('input#num')
const sel = document.querySelector('select#selnum')
const res = document.querySelector('div#res')
let list = []

function add(){
    try {
    let n = Number.parseInt(num.value)
    
    if (num.value.length === 0)
        n = 0

    if (n < 1 || n > 100) {
        alert('Valor inválido!')
        return;
    }
    if (list.indexOf(n) !== -1) {
        alert('Número já encontrado na lista!')
        return;
    }
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado.`
    sel.appendChild(item)
    list.push(n)
    res.innerHTML = ''
    } finally {
        num.value = ''
    }
}

function analisar() {

    if (list.length == 0) {
        alert('Adicione valores antes de finalizar!')
        return;
    }

    let size = list.length
    list.sort()
    let maior = list[size-1]
    let menor = list[0]
    let soma = 0
    for (let c in list) {
        soma += list[c]
    }

    res.innerHTML = `<p>Ao todo, temos ${size} números cadastrados.
                    <p>O maior valor informado foi ${maior}.
                    <p>O menor valor informado foi ${menor}.
                    <p>Somando todos os valores, temos ${soma}.
                    <p>A média dos valores digitados é ${soma/size}`

}

/* CÓDIGO DESCARTADO -- anotações para estudo

for (let c in list) {
    if (n === list[c]) {
        window.alert('Número já inserido!')
        return;
    }
}

substituido por

if (list.indexOf(n) !== (-1)) {
    window.alert('Número já inserido!')
    return;
}

*/