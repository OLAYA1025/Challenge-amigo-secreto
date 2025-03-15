// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function sortearAmigo(){
    if (amigos.length ==0){
        alert("Por favor, ingrese al menos un amigo.");
        return;
    }
    indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];
    reiniciarAmigos();
    document.getElementById('resultado').innerHTML = `el amigo sorteado es ${amigoSecreto}`;
    return;
}

function reiniciarResultado(){
    document.getElementById('resultado').innerHTML = '';
    return;
}

function reiniciarAmigos(){
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    return;
}

function agregarAmigo() {
    reiniciarResultado();
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
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return;
}
