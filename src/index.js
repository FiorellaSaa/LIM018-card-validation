import validator from './validator.js';

let creditCardNumber = document.getElementById("creditCardNumber");
let btnValidar = document.getElementById("btnValidar");
let mensaje = document.getElementById("mensaje");


btnValidar.addEventListener("click", (e) => {
   e.preventDefault()

    if(validator.isValid (creditCardNumber.value)){
        mensaje.innerHTML = "Tu tarjeta es válida";
    } else{
        mensaje.innerHTML = `Tu tarjeta es inválida ${validator.maskify(creditCardNumber.value)}, ingrese otro número`;

    }
});


