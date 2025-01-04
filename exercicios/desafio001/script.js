
function contar(){
    var inicio = window.document.getElementById('ini')
    var fimi = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var cont = window.document.getElementById('cont')
    if(inicio.value.legth == 0 || fimi.value.legth == 0 || passo.value.legth == 0){
        cont.innerHTML = 'impossivel contar'
        window.alert('[ERRO] faltam dados')
    }else if(inicio.value < fimi.value ){
    for(var inic = Number(inicio.value) ; inic <= Number(fimi.value) ; inic = inic + Number(passo.value)){
       if(inic < Number(fimi.value)) {
        cont.innerHTML += (` ${inic}👉`)
        }else {for(var inic = Number(inicio.value) ; inic >= Number(fimi.value) ; inic = inic - Number(passo.value)){
            if(inic < Number(fimi.value)) {
            
        } 
    }
    }cont.innerHTML += ` ${inic}🏴‍☠️`
}