// Array de amigos
let amigos = [];  

/// Función para agregar un amigo al array
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }
amigos.push(nombreAmigo);
inputAmigo.value = "";
inputAmigo.focus();   /// Limpiar el campo de entrada
renderizarAmigos();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";

}


/// Capturar el valor de entrada

/// Validar la entrada 

//Actualizar el array de amigos


