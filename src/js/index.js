const submit = document.querySelector('enviar')
const campos = document.querySelectorAll('.inputs')
const mensagem = document.querySelectorAll('.mensagem')

submit.addEventListener("click", function(event){
    event.preventDefault()
    campos.forEach((campos) =>{
        if(campos.value !=="") {
            campos.classList.add('berdaverde')
        
        }else{
            campos.classList.add('bordavermelha')
        }

    })
        
})
   
