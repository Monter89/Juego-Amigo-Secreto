// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Capturar el valor del campo de entrada
function agregarAmigo (){
    let input = document.getElementById ('amigo');
    let nombre = input.value.trim();

//Validar que no este vacio

if (nombre === '') {
    alert("Por favor, ingresa un nombre");
    return;
    }

//Agregar el nombre al Array
amigos.push(nombre);

//Limpiar el campo de entrada
input.value = '';

//Acutalizar la lista visual
actualizarLista();

}


function actualizarLista (){
    //Obtener el elemento de la lista
    let lista = document.getElementById ('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement ("li");
        li.textContent = amigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo (){
    //Validar que haya amigos en la lista
    if(amigos.length === 0){
        alert('No hay amigos en la lista para sortear');
        return;
    }

    //Genera un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    //Obtiene el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //Muestra el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}

