import validator from './validator.js';

let creditCardNumber = document.getElementById("creditCardNumber");
//let btnValidar = document.getElementById("btnValidar");
let mensaje = document.getElementById("mensaje");
//let btnlimpiar = document.getElementsByTagName("form")[0].reset();
let form = document.getElementById("form");
let nombre = document.getElementById("cliente");


form.addEventListener("submit", (event) => {
   event.preventDefault()
    if(nombre.value === "" || creditCardNumber.value === ""){
        alert("Ingresa los datos solicitados") 
    }
    else if(validator.isValid(creditCardNumber.value)){
        mensaje.innerHTML = "Tu tarjeta es válida";
    } else{
        mensaje.innerHTML = `Tu tarjeta es inválida ${validator.maskify(creditCardNumber.value)}, ingrese otro número`;
    }
});

   /* document.addEventListener('DOMContentLoaded', function(){
        let limpiarForm = document.getElementById('form');
        limpiarForm.addEventListener('submit', function() {
            limpiarForm.reset();
        });
});*/



