function confirmar1(){
    const num1 = document.getElementById('num1')
    const lista = document.getElementById('lista1')

    const n1 = Number(num1.value)
    const matris = []

    //Confirmação:
    if (n1 > 100 || n1 < 1 || n1 == 0){
        window.alert('Por favor, digite um número entre 1 e 100.')
    } else{
        
        matris.sort()

        //console.log(matris)

        if(matris.includes(n1) == false){

            matris.push(n1)
            var item = document.createElement('option')
            item.text = `Adicionado ${n1}`
            lista.appendChild(item)

        } else{

            window.alert('O valor já está na lista, adicione outro.')

        }

    }
}

function confirmar2(){

    var p1 = document.getElementById('res1')

    if (n1 > 100 || n1 < 1 || n1 == 0){
        window.alert('Por favor, digite um número entre 1 e 100.')
    } else{
        var res2 = document.createElement('p')
        res2.text = `Ao todo, temos ${matris.length} números cadastrados.`
        res2.text = `O maior valor informado foi ${Math.max(matris)}.`
        res2.text = `O menor valor informado foi ${matris[0]}.`
        res2.text = `Somando todos os valores, temos ${matris.reduce()}.`
        res2.text = `A média dos valores digitados é ${matris}.`
        p1.appendChild(res2)
    }

}