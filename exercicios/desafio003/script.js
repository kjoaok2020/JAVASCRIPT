var arrey = []
var maior = Number(1)
var menor = Number(100)
var soma = 0
var ant = 0

function adicionar(){
   var numb = document.getElementById('number')
   var sel = document.getElementById('select')
    var n = Number(numb.value)
    if(arrey.indexOf(Number(n)) != -1){
        window.alert('você ja digitou esse número')
        numb.value = null
    }else{


   if(numb.value.length == 0){
     window.alert('[ERRO] a caixa está vazia, digite para continuar ')
   }else if( n >= 1 && n <= 100 ){
      for(c = 1; c <= 1; c++){
       
        arrey.push(n)
       if(n >= 1 && n <= 100){
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        sel.appendChild(item)}
        soma = n + soma
        numb.value = ''

        
        ant = n
        
        if(n > maior){
            maior = n
        }else {}
        if (n < menor){
            menor = n
        }else{}
       
      
      }
   }else{
    window.alert('Você digitou errado')
   }}

   
}
   function final(){
    var tot = document.getElementById('total')
    var mai = document.getElementById('maior')
    var men = document.getElementById('menor')
    var som = document.getElementById('soma')
    var med = document.getElementById('media')
    
   
        if(arrey.length == 0){
            window.alert('[ERRO], digite algum número')
        }else{
            tot.innerHTML = `Ao todo, temos ${arrey.length} números cadastrados`
            mai.innerHTML = `O maior valor informado foi ${maior}`
            men.innerHTML = `O menor valor informado foi ${menor}`
            som.innerHTML = `Somando todos os valores, temos ${soma}`
            med.innerHTML = `A média dos valores digitados é ${soma / arrey.length}`
        }
   }
