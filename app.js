let amigos = [];

let inputAmigos = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function limpiarResultado() {
  resultado.innertHTML = "";
}

function renderListaAmigos(){
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++){
    const nombre = amigos[i];
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  }
  if (amigos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay amigos agregados todavia.";
    listaAmigos.appendChild(li);
  }
}

function agregarAmigo() {
  let nombre = (inputAmigos.value || "").trim();

  if (!nombre){
    alert("Por favor ingresa un nombre");
    inputAmigos.focus();
    return;
  }
}

const existe = amigos.some((a) => a.toLowerCase() === nombre.toLowerCase());
if (existe) {
  alert("Este amigo ya está en la lista");
  inputAmigos.Selected();
  return;
}
amigos.push(nombre);
renderListaAmigos();
inputAmigos.value = "";
inputAmigos.focus();
limpiarResultado();