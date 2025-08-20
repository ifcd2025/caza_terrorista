const NUMERO_IMAGENES_PERSONAS = 13;
//const 

const main = document.getElementById("edificio");
for(let f = 1; f < 7; f++) {
    for(let c = 1; c < 7; c++) {
        const ventana = document.createElement("div");
        main.appendChild(ventana);
        ventana.classList.add("ventana");
        ventana.addEventListener("click", ventanaPulsada);
    }
}

function ventanaPulsada() {

}

function mostrarPersona() {
    const ventanas = document.getElementsByClassName("ventana");
    const numeroVentanas = ventanas.length;
    /* Generamos un número aleatorio de ventana para mostrar a la persona,
    debiendo asegurarnos que no haya ya otra */
    let aleatorio;
    do {
        aleatorio = Math.floor(Math.random() * numeroVentanas);
    } while(ventanas[aleatorio].dataset.ocupada == "true");
    const numeroImagen = Math.floor(Math.random() * NUMERO_IMAGENES_PERSONAS + 1);
    ventanas[aleatorio].style.backgroundImage = `url(imagenes/p${numeroImagen}.png)`;
    // dataset vale para crear propiedades propias a nuestros elementos
    ventanas[aleatorio].dataset.ocupada = "true";
   /* const cuadros = [
        {backgroundImage: "none", offset: 1}
    ];
    const opciones = {duration: 3000, fill: "forwards"};
    ventanas[aleatorio].animate(cuadros, opciones);*/
    ventanas[aleatorio].offsetWidth = "";
    ventanas[aleatorio].classList.add("mostrarPersona");
    ventanas[aleatorio].addEventListener("animationend", () => console.log("hola"));

    //ventanas[aleatorio].addEventListener("animationend", quitarPersona);

}

function quitarPersona(evt){
    evt.currentTarget.dataset.ocupada = "false";
    evt.currentTarget.classList.remove("mostrarPersona");
    console.log("si");
}

setInterval(mostrarPersona, 1000);