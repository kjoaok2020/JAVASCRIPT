
function contar(){
    var inicio = window.document.getElementById('ini')
    var inik = 1
    
    var cont = window.document.getElementById('select')
    cont.innerHTML = ''
   while(inik <= 10){
        let item = document.createElement('option')
        item.text = ` ${inicio.value} X ${inik} = ${inicio.value * inik} `
        cont.appendChild(item)
        inik++
    }
}