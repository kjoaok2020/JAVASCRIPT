
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora <= 12){
        img.src = 'manhã.png'
        document.body.style.background = '#F6D284'
    }else if (hora > 12 && hora < 18){
        img.src = 'tarde.webp'
    }else{
        img.src = 'noite.png'
        document.body.style.background = 'rgb(1, 33, 44)'
    }
}
