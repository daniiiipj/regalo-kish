const recuerdos = document.querySelectorAll(".recuerdo");

const mostrarRecuerdos = () => {

    recuerdos.forEach((recuerdo, indice) => {

        const posicion = recuerdo.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if(posicion < pantalla - 100){

            setTimeout(() => {

    recuerdo.classList.add("visible");

}, indice * 250);

        }

    });

};

window.addEventListener("scroll", mostrarRecuerdos);

mostrarRecuerdos();


const boton = document.getElementById("comenzar");
const avion = document.querySelector(".avion");

boton.addEventListener("click", () => {

    setTimeout(() => {

        avion.classList.add("volando");

    }, 300);

});


document.addEventListener("DOMContentLoaded", () => {

   const bloques = document.querySelectorAll(
    ".bloque-doble, .bloque-viaje"
);

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                const bloque = entrada.target;

                const fotos =
                    bloque.querySelectorAll(".foto-animada");

                const texto =
                    bloque.querySelector(".texto-animado");

                fotos.forEach((foto, indice) => {

                    setTimeout(() => {

                        foto.classList.add("mostrar");

                    }, indice * 800);

                });

                if (texto) {

                    setTimeout(() => {

                        texto.classList.add("mostrar");

                    }, fotos.length * 800 + 500);

                }

                observador.unobserve(bloque);

            }

        });

    }, {

        threshold:0.3

    });

    bloques.forEach((bloque) => {

        observador.observe(bloque);

    });

});


