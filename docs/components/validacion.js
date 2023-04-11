export function validaInput(input){

    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){ 
        input.parentElement.classList.remove("formcontato__container__input--invalid");
        input.parentElement.querySelector(".formcontato__input__message__error").innerHTML="";
    }else{
        input.parentElement.classList.add("formcontato__container__input--invalid");
        input.parentElement.querySelector(".formcontato__input__message__error").innerHTML=mostrarMensajeDeError(tipoDeInput, input);
    }
}

export function validaTextarea(textarea){

    const textareaDeTipo = textarea.dataset.tipo;
    if(textarea.validity.valid){ 
        textarea.parentElement.classList.remove("formcontato__container__textarea--invalid");
        textarea.parentElement.querySelector(".formcontato__textarea__message__error").innerHTML="";
    }else{
        textarea.parentElement.classList.add("formcontato__container__textarea--invalid");
        textarea.parentElement.querySelector(".formcontato__textarea__message__error").innerHTML=mostrarMensajeDeError(textareaDeTipo, textarea);
    }
} 

const tipoDeErrores =[
    "typeMismatch",
    "valueMissing"

];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email:{
        valueMissing: "Este campo correo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo contraseña no puede estar vacío",
    },
    mensaje: {
        valueMissing: "Este campo nacimiento no puede estar vacio",
    }
};

function mostrarMensajeDeError (tipoDeElemento, elemento){
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(elemento.validity[error]){
            mensaje = mensajesDeError[tipoDeElemento][error];
        }
    })
    return mensaje;
}