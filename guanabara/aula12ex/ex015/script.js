function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('ERRO')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'bebemasc.png')
            }else if(idade <=21){
                //jovem
                img.setAttribute('src', 'jovemmasc.png')
            }else if(idade <=50){
                //adulto
                img.setAttribute('src', 'adultomasc.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosomasc.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
             if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'bebefem.png')
            }else if(idade <=21){
                //jovem
                img.setAttribute('src', 'jovemfem.png')
            }else if(idade <=50){
                //adulto
                img.setAttribute('src', 'adultofem.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        img.style.width = '250px'
        res.appendChild(img)
    }

}