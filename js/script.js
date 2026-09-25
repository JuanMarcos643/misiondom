/* ===========================================================
   MISIÓN DOM — archivo de trabajo
   Aprendiz: Juan Marcos, Juan Angel, Jesus Hernández, Andrea rivera
   Ficha 3230489 · ADSO

   Este archivo empieza vacío. Cada misión de la parte 3 se
   escribe en el bloque que le corresponde, nunca donde quepa.
   =========================================================== */


/* ---------- 1. ELEMENTOS ---------- */
/* Las constantes que guardan las partes de la página.
   Una por cada elemento que vaya a manipular.            */

// M1
const anio = document.getElementById("anio");

// M2
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");

// M3
const enlaceExterno = document.getElementById("enlaceExterno");

// M4
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

// M5
const btnDestacar = document.getElementById("btnDestacar");
const caja = document.getElementById("caja");

// M6
const btnOcultar = document.getElementById("btnOcultar");

// M7
const btnColor = document.getElementById("btnColor");

// M8
const filasTabla = document.querySelectorAll("#tabla tbody tr");

// M9
const btnAgregar = document.getElementById("btnAgregar");
const campoProyecto = document.getElementById("campoProyecto");

// M10
const btnQuitar = document.getElementById("btnQuitar");

// M11
const btnVaciar = document.getElementById("btnVaciar");

// M12
const filas = document.querySelectorAll("#tabla tbody tr");

// M13
const campoNombre = document.getElementById("campoNombre");
const campoMensaje = document.getElementById("campoMensaje");
const contadorLetras = document.getElementById("contadorLetras");
const avisoForm = document.getElementById("avisoForm");

// M14
const formulario = document.getElementById("formulario");

// M15
const btnTema = document.getElementById("btnTema");

// M16
const galeriaProductos = document.getElementById("galeriaProductos");


/* ---------- 2. ESTADO ---------- */
/* Los datos que la página recuerda entre un clic y otro.  */

// M7
let indiceColor = 0;

const colores = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00"
];




/* ---------- 3. FUNCIONES ---------- */
/* Lo que la página sabe hacer.                            */

// M4 - Contar proyectos
function actualizarContador() {

    const proyectos = lista.querySelectorAll("li");

    if (proyectos.length === 0) {
        contador.textContent = "No hay oroductos";
    } else if (proyectos.length === 1) {
        contador.textContent = "1 Producto";
    } else {
        contador.textContent = proyectos.length + " Productos";
    }
}


// M5 - Destacar caja
function destacarCaja() {

    caja.classList.toggle("destacada");
}


// M6 - Ocultar y mostrar caja
function ocultarMostrar() {

    caja.classList.toggle("oculto");

    if (caja.classList.contains("oculto")) {
        btnOcultar.textContent = "Mostrar";
    } else {
        btnOcultar.textContent = "Ocultar";
    }
}


// M7 - Cambiar color
function cambiarColor() {

    caja.style.backgroundColor = colores[indiceColor];

    indiceColor++;

    if (indiceColor === colores.length) {
        indiceColor = 0;
    }
}


// M9 - Agregar proyecto
function agregarProyecto() {

    const texto = campoProyecto.value.trim();

    if (texto === "") {
        return;
    }

    const nuevoProyecto = document.createElement("li");

    nuevoProyecto.textContent = texto;

    lista.append(nuevoProyecto);

    campoProyecto.value = "";

    campoProyecto.focus();

    actualizarContador();
}


// M10 - Quitar último proyecto
function quitarProyecto() {

    const ultimoProyecto = lista.lastElementChild;

    if (ultimoProyecto === null) {
        return;
    }

    ultimoProyecto.remove();

    actualizarContador();
}


// M11 - Vaciar lista
function vaciarLista() {

    lista.innerHTML = "";

    actualizarContador();
}


// M12 - Seleccionar fila
function seleccionarFila(evento) {

    filas.forEach(function(fila) {
        fila.classList.remove("fila-marcada");
    });

    evento.currentTarget.classList.add("fila-marcada");
}


// M13 - Contar letras
function contarLetras() {

    const cantidad = campoMensaje.value.length;

    contadorLetras.textContent = cantidad;
}


// M14 - Validar formulario
function validarFormulario(evento) {

    evento.preventDefault();

    if (campoNombre.value.trim() === "" || campoMensaje.value.trim() === "") {
        avisoForm.textContent = "Completa todos los campos";
        avisoForm.style.color = "black";
        return;
    }

    avisoForm.textContent = "Mensaje enviado con éxito";
    avisoForm.style.color = "black";
    formulario.reset();
}


// M15 - Cambiar tema
function cambiarTema() {

    document.body.classList.toggle("noche");

    if (document.body.classList.contains("noche")) {
        btnTema.textContent = "Modo claro";
    } else {
        btnTema.textContent = "Modo oscuro";
    }
}


// M16 - Galería de productos con imágenes
const productos = [
    {
        nombre: "Hamburguesa Caribe",
        precio: "$15.000",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
        nombre: "Perro especial",
        precio: "$12.000",
        imagen: "https://images.unsplash.com/photo-1563567644743-81256d4aedca?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nombre: "Salchipapa mixta",
        precio: "$14.000",
        imagen: "https://tofuu.getjusto.com/orioneat-local/resized2/6DyXc6dNjLrfgLaJy-300-x.webp"
    },
    {
        nombre: "Pizza familiar",
        precio: "$50.000",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    }
];

function miMision() {
    galeriaProductos.innerHTML = productos.map(producto => `
        <article class="galeria-item">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="galeria-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
            </div>
        </article>
    `).join("");
}



/* ---------- 4. EVENTOS ---------- */
/* Cuándo lo hace.                                         */

// M5
btnDestacar.addEventListener("click", destacarCaja);


// M6
btnOcultar.addEventListener("click", ocultarMostrar);


// M7
btnColor.addEventListener("click", cambiarColor);


// M9
btnAgregar.addEventListener("click", agregarProyecto);


// M10
btnQuitar.addEventListener("click", quitarProyecto);


// M11
btnVaciar.addEventListener("click", vaciarLista);


// M12
filas.forEach(function(fila) {

    fila.addEventListener("click", seleccionarFila);

});


// M13
campoMensaje.addEventListener("input", contarLetras);


// M14
formulario.addEventListener("submit", validarFormulario);


// M15
btnTema.addEventListener("click", cambiarTema);


// M16
miMision();


/* ---------- 5. ARRANQUE ---------- */
/* Lo que pasa apenas carga la página.                     */

// M1 - Mostrar año actual
anio.textContent = new Date().getFullYear();


// M2 - Escribir título y subtítulo
titulo.textContent = "Sabor Caribe";

subtitulo.textContent =
    "Comidas Rápidas · Cartagena de Indias " + new Date().getFullYear();


// M3 - Configurar enlace
enlaceExterno.setAttribute(
    "href",
    "https://www.google.com"
);

enlaceExterno.setAttribute(
    "target",
    "_blank"
);

enlaceExterno.setAttribute(
    "rel",
    "noopener"
);

enlaceExterno.textContent = "Visitar sitio";


// M4 - Mostrar contador al iniciar
actualizarContador();


// M8 - Alternar colores de las filas
filasTabla.forEach(function(fila, indice) {

    if (indice % 2 === 0) {
        fila.style.backgroundColor = "#eeeeee";
    } else {
        fila.style.backgroundColor = "#dddddd";
    }

});
