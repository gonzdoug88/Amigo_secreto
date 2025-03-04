// Variables //
let nombres = [];
let listAmigos = document.getElementById("listaAmigos");
let resultadoLista = document.getElementById("resultado");
let modal = document.getElementById("modal");


//Se genera una lista donde no se aceptan valores vacíos
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Escribe un nombre");
        return;
    }

//Se agregan al arreglo los nombres ingresados
    nombres.push(nombre);
    document.getElementById("amigo").value = "";
    enseñarAmigos();
}

//Función para mostrar la lista de amigos ingreados
function enseñarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of nombres){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

//Función para que elija un nombre de forma aleatoría de la lista 
function sortearAmigo() {
    if(nombres.length > 0){
        let randomAmigo = Math.floor(Math.random()*nombres.length);
        resultadoLista.textContent = `Seleccionado: ${nombres[randomAmigo]}`;
        openModal();
    } else {
        resultadoLista.textContent = "No hay datos en la lista";
        openModal();
    }
}

//Función para comenzar de nuevo el sorteo
function reiniciarSorteoDeAmigo(){
//limpia el arreglo
    nombres = [];
//limpia los datos de la lista
    listAmigos.innerHTML = "";
//Limpia el resultado
    resultadoLista.textContent = "";
}

// Función que levanta el modal
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Function que cierra el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cierra el modal si se hace click fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}