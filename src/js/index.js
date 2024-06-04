const campos = document.querySelectorAll('.campo');
const required = document.querySelectorAll('.required');
const enviar   = document.querySelector('.button');
const form = document.getElementById('form')

form.addEventListener("submit", function (event) {
    event.preventDefault()
    campos.forEach((campos) => {
        if (campos.value !== "") {
            campos.classList.add('bordaverde');
            campos.classList.remove('bordavermelha');
            campos.nextElementSibling.classList.remove('mostrar');
        } else {
            campos.classList.remove('bordaverde');
            campos.classList.add('bordavermelha');
            campos.nextElementSibling.classList.add('mostrar');
        }
    })

})

campos.forEach((campos) => {
    campos.addEventListener("input", () => {
        if (campos.value !== "") {
            campos.classList.add('bordaverde');
        } else {
            campos.classList.remove('bordaverde');
        }
    
    })
    
})
