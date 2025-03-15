// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function sortearAmigo(){
    indice = Math.floor(Math.random() * amigos.length);
    console.log(indice);
    let amigoSecreto = amigos[indice];
    console.log(amigoSecreto);

    document.getElementById('resultado').innerHTML = amigoSecreto;
    return;
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo) {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        actualizarLista();  
        return;
    }
    alert("Por favor, inserte un nombre.");
}


function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    console.log(lista)  
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return;
}
