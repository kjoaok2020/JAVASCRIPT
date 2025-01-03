
function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('ano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || ano.value > ano){
        window.alert('Verifique os dados e tente novamente')
   }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var img  = document.createElement('img')
        var genero = ''
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança.png')
            } else if( idade < 21){
                //jovem
                img.setAttribute('src', 'jovem.png')
            }else if ( idade < 50){
                img.setAttribute('src', 'adulto.png')
                //adulto
            }else{
                img.setAttribute('src', 'idoso.png')
                //idoso
            }
                

        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criançaa.png')
                //criança
            } else if( idade < 21){
                img.setAttribute('src', 'javem.png')
                //jovem
            }else if ( idade < 50){
                img.setAttribute('src', 'adulta.png')
                //adulto
            }else{
                img.setAttribute('src', 'idosa.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
   }
}
