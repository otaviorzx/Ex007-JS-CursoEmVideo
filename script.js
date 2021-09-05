const matriz = [] //Criando a matriz aqui, pois ela é só 1, se fosse dentro da função ela ficaria sendo reinicializada.
const num1 = document.getElementById('num1')
const p1 = document.getElementById('res1')                      //Criando váriaveis fundamentais para o programa.
const lista = document.getElementById('lista1')

function confirmar1(){

    p1.innerHTML = '<br>Após adicionar os valores, valide para vê-los em diferentes aplicações.'

    var n1 = Number(num1.value)

    //Confirmação:
    if (n1 > 100 || n1 < 1 || n1 == 0){
        window.alert('Por favor, digite um número entre 1 e 100.')     //Erros 1
    } else{

        if(matriz.includes(n1) == false){

            matriz.push(n1)                                 //Se não houver um número já listado, esse número vai ser adicionado na matriz e
            let item = document.createElement('option')     //então aparecer na lista, como child da option.
            item.text = `Adicionado ${n1}`
            lista.appendChild(item)

        } else{

            window.alert('O valor já está na lista, adicione outro.')   //Erros 2

        }

    }
}

function confirmar2(){

    let n1 = Number(num1.value)

    if (n1 > 100 || n1 < 1 || n1 == 0){
        window.alert('Por favor, digite um número entre 1 e 100.')
    } else{
        let tot = matriz.length
        let maior = matriz[0]       //Essas váriaveis serão úteis na hora do "for" abaixo.
        let menor = matriz[0]
        let soma = 0
        let media = 0

        for(let pos in matriz){
            soma += matriz[pos]             //Nesse for, estamos usando o pos para fazer todas as contas. (posição)
            if (matriz[pos] > maior)        
            maior = matriz[pos]         //Se a posição for maior que o número de maior (0), a váriavel maior vai receber o pos.
            if (matriz[pos] < menor)
            menor = matriz[pos]         //A mesma coisa dita acima acontece aqui, só que o contrário.
        }

        media = soma / tot

        p1.innerHTML = ''
        p1.innerHTML += `<br>Ao todo, temos ${tot} números cadastrados.`
        p1.innerHTML += `<br>O maior valor informado foi ${maior}.`
        p1.innerHTML += `<br>O menor valor informado foi ${menor}.`
        p1.innerHTML += `<br>A soma de todos os valores é ${soma}`
        p1.innerHTML += `<br>A média dos valores é ${media}`
        
    }

}

function limpar(){

    lista.length = "0"
    matriz.length = 0
    p1.innerHTML = '<br>Após adicionar os valores, valide para vê-los em diferentes aplicações.'


}
