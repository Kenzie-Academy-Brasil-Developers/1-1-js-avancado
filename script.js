
const listaDeNumeros = [1,2,3,4,5,6,7,8,9]

function lista(numeros,num){
    let newArr = []

    for(let i = 0; i <numeros.length; i++){
        if(listaDeNumeros[i] !== num){
            newArr.push(listaDeNumeros[i])
        }
    }
    return newArr.length
}
console.log(lista(listaDeNum,1)
    
// for(let i = listaDeNumeros.length; i >listaDeNumeros.length; i--){
// }
// console.log(listaDeNumeros)