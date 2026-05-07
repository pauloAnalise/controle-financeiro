let entradas = 0 
let saidas = 0 
let saldo = 0 
let transacoes = []

function adicionar(){
    let descricao= document.getElementById('text1').value
    let valor = Number(document.getElementById('val1').value)
    let categoria = document.getElementById('categoria').value

    let entrada = document.getElementById('entr1')
    let saida = document.getElementById('said1')
    let res = document.getElementById('res')

    if ( !descricao || isNaN(valor) || !entrada.checked && !saida.checked) {
        alert("Preencha todos os campos corretamente!")
        return
    }


    let transacao = {
        descricao,
        valor,
        categoria,
        tipo: entrada.checked ? "entrada" : "saida"
    }
    transacoes.push(transacao)

    if (entrada.checked) {
        entradas += valor
        saldo += valor 
    } else if (saida.checked) {
        saidas += valor 
        saldo -= valor
    }
     
    document.getElementById('saldo').innerHTML = saldo.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})
    document.getElementById('Entradas').innerHTML = entradas.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})
    document.getElementById('Saidas').innerHTML = saidas.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})


        let item = document.createElement("p")

        if (entrada.checked) {
            item.textContent =  `[ENTRADA] ${descricao} - ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} (${categoria}). 🟩 `
        } else if (saida.checked) {
            item.textContent = `[SAÍDA] ${descricao} - ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} (${categoria}).🟥 ` 
        }
         res.appendChild(item)

         document.getElementById('text1').value = ""
         document.getElementById('val1').value = ""
         document.getElementById('categoria').value = ""

}