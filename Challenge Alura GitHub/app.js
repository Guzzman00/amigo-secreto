// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
let amigos = [];

// 1. Función: Implementa una función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada:
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value;

    // Validar la entrada:
    if (nombre.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos:
    amigos.push(nombre.trim());

    // Limpiar el campo de entrada:
    inputAmigo.value = '';
    actualizarListaAmigos();
}

// 2. Función: Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista:
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente:
    lista.innerHTML = '';

    // Iterar sobre el arreglo:
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 3. Función: Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles:
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }

    // Generar un índice aleatorio:
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado:
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado:
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo sorteado es: ${amigoSorteado}!</li>`;
}

// Agregar elementos a la lista (2. Función: Implementa una función para actualizar la lista de amigos):
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});