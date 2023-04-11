export function boton(){
    const btn = document.querySelector(".formcontato__botao")

    btn.addEventListener("click", () =>{
        alert("Esta función está deshabilitada. Se recomienda ir a la parte superior de la página y dar clic en mi correo, así se te abrirá la aplicación para que puedas enviarme un correo.");
    });
}