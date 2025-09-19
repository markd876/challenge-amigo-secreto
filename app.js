let amigos = [];

let inputAmigos = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function limpiarResultado() {
  resultado.innerHTML = "";
}

function renderListaAmigos() {
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const nombre = amigos[i];
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  }

  if (amigos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay amigos agregados todavía.";
    listaAmigos.appendChild(li);
  }
}

function agregarAmigo() {
  let nombre = (inputAmigos.value || "").trim();

  if (!nombre) {
    alert("Por favor ingresa un nombre");
    inputAmigos.focus();
    return;
  }

  const existe = amigos.some((a) => a.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert("Este amigo ya está en la lista");
    inputAmigos.select();
    return;
  }

  amigos.push(nombre);
  renderListaAmigos();

  inputAmigos.value = "";
  inputAmigos.focus();

  limpiarResultado();
}

renderListaAmigos();

inputAmigos.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarAmigo();
});

let ultimoIndiceSorteado = null;

function obtenerAmigoSecreto() {

  if (amigos.length === 1) return amigos[0];

  let indice = Math.floor(Math.random() * amigos.length);

  if (amigos.length > 1 && ultimoIndiceSorteado !== null) {
    let intentos = 0;
    while (indice === ultimoIndiceSorteado && intentos < 10) {
      indice = Math.floor(Math.random() * amigos.length);
      intentos++;
    }
  }

  ultimoIndiceSorteado = indice;
  return amigos[indice];
}

function sortearAmigo() {
  limpiarResultado();

  if (amigos.length < 2) {
    alert("Necesitas al menos 2 amigos para calcular el amigo secreto.");
    return;
  }

  const amigoSecreto = obtenerAmigoSecreto();

  const li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}