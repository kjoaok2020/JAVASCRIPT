var id = 67
console.log (`Sua idade é ${id} anos`)
if (id < 16){
    console.log('você não pode votar')
}else if (id < 18 || id >60 ){
    console.log('seu voto é opcional')
}else {
    console.log( 'seu voto é obrigatório!')
}