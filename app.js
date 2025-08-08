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
    for (item of amigos) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.innerHTML = item;
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    document.getElementById("resultado").innerHTML = "";
    seleccion = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(seleccion);
    const resultado = document.createElement("li");
    resultado.innerHTML = seleccion;
    document.getElementById("resultado").appendChild(resultado);
}