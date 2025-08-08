// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        mostrarLista();
    }
}

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    // Borrar la lista mostrada actual
    document.getElementById("listaAmigos").innerHTML= "";
    // Itera sobre la lista y añade cada elemento a la lista de amigos del HTML
    for (amigo of amigos) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.innerHTML = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
}
