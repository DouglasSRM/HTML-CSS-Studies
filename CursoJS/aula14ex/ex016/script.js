function contar() {
    const txtinicio = document.querySelector('input#txtinicio')
    const txtfim = document.querySelector('input#txtfim')
    const txtpasso = document.querySelector('input#txtpasso')
    const res = document.querySelector('div#res')
    let i = 0
    let f = 0
    let p = 1

    if (txtinicio.value.length == 0 || txtfim.value.length == 0) {
        window.alert('[ERRO] Valor não identificado')
        return;
    }

    i = Number.parseInt(txtinicio.value)
    f = Number.parseInt(txtfim.value)
    if (txtpasso.value.length != 0 && txtpasso.value > 0) {
        p = Number.parseInt(txtpasso.value)
    } else {
        alert('[ALERTA] Passo inválido. Utilizando passo "1"')
    }
    
    res.innerHTML = 'Contando: <br>'
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}