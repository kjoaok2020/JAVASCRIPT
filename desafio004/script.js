let lista = document.querySelector('ul');
let input = document.querySelector('input');

function clicou(e){
    if(e.key ==='Enter'){
    let iteme = document.createElement('li');
   
    iteme.innerText = input.value
    lista.appendChild(iteme)
    input.value = ''
    }else{
       
    }
}

input.addEventListener('keyup', clicou)