import {validaInput} from "./validacion.js";
import {validaTextarea} from "./validacion.js";
import {boton} from "./btn.js";

const inputs = document.querySelectorAll("input");

 inputs.forEach((input) => {
    input.addEventListener("blur", (input)=>{
        validaInput(input.target);
    });
});

const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
    textarea.addEventListener("blur", (textarea)=>{
        validaTextarea(textarea.target);
    });
});



boton();