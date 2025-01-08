let fruits = ['maça', 'banana', 'pêra', 'jabuticaba']

let ok = fruits.every((item) => { // todos
    return item.length > 3
})

if(ok){
    console.log('todos são maior que 3')
}else{
    console.log('todos não são maior que 3')
}


let ko = fruits.some((item) => {  //alguns
    return item.length > 12
})

if(ko){
    console.log('algum item é maior que 3')
}else{
    console.log('nenhum item é maior que 3')
}