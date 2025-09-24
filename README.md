# Challenge: Amigo Secreto

Aplicación web sencilla para gestionar una lista de amigos y sortear aleatoriamente un “amigo secreto”. Construida con HTML, CSS y JavaScript puro (sin frameworks).

Repositorio: https://github.com/markd876/challenge-amigo-secreto

## Tabla de contenidos
- [Demo local](#demo-local)
- [Características](#características)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts principales](#scripts-principales)
- [Notas de implementación](#notas-de-implementación)
- [Pruebas manuales](#pruebas-manuales)
- [Solución de problemas](#solución-de-problemas)
- [Mejoras futuras](#mejoras-futuras)
- [Licencia](#licencia)

## Demo local
- Abre `index.html` directamente en tu navegador, o
- Usa un servidor estático (p. ej., Live Server en VSCode) para recarga rápida y evitar issues de caché.

## Características
- Agregar nombres a una lista con validaciones:
  - Campo vacío (alerta)
  - Duplicados (comparación sin distinguir mayúsculas/minúsculas)
- Render dinámico de la lista en `<ul id="listaAmigos">`
- Limpieza del campo de entrada y enfoque automático tras agregar
- Sorteo aleatorio del “amigo secreto” y visualización en `<ul id="resultado">`
- Atajo: presiona Enter en el input para agregar
- (Opcional) Evitar repetir consecutivo en el sorteo

## Estructura del proyecto


. ├─ index.html ├─ app.js ├─ style.css └─ assets/ └─ amigo-secreto.png


## Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- No requiere Node.js ni dependencias externas

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/agustincl01/challenge-amigo-secreto.git

Entra a la carpeta:
cd challenge-amigo-secreto

Abre index.html en tu navegador (o usa Live Server).
Uso
Escribe un nombre en el campo de texto “Escribe un nombre”.
Clic en “Añadir” (o presiona Enter) para agregarlo a la lista.
Repite para agregar más amigos.
Clic en “Sortear amigo” para seleccionar uno al azar.
El resultado aparece en la lista de resultados.
Scripts principales

agregarAmigo()

Lee el valor del input #amigo.
Valida que no esté vacío y que no exista ya en el arreglo amigos (case-insensitive).
Agrega el nombre a amigos, vuelve a renderizar la lista, limpia el input y enfoca.
Limpia el resultado del sorteo si existía.

renderListaAmigos()

Limpia #listaAmigos con innerHTML = "".
Recorre el arreglo amigos con un for y crea un <li> por cada nombre.
Si amigos está vacío, muestra un mensaje de placeholder.

limpiarResultado()

Limpia #resultado con innerHTML = "".

obtenerAmigoSecreto()

Devuelve un elemento aleatorio del arreglo amigos.
(Opcional) Evita repetir el mismo consecutivo usando ultimoIndiceSorteado.

sortearAmigo() (invocado por el botón del HTML)

Valida que haya al menos 2 amigos.
Limpia el resultado anterior.
Obtiene un amigo aleatorio y lo imprime en #resultado.
Notas de implementación
El script se carga con defer en index.html para asegurar que el DOM esté disponible al usar getElementById.
Para evitar duplicados visuales al re-renderizar, siempre se usa:
listaAmigos.innerHTML = "";

Detección de duplicados:
amigos.some(a => a.toLowerCase() === nombre.toLowerCase())

Mejora UX:
input.focus() devuelve el foco al campo.
input.select() selecciona el texto si se detecta duplicado para reescritura inmediata.
Listener para Enter:
inputAmigos.addEventListener("keydown", e => { if (e.key === "Enter") agregarAmigo(); });

Pruebas manuales
Campo vacío: intenta agregar sin texto → alerta y no agrega.
Duplicado: agrega “Ana” y luego “ana” → alerta de duplicado.
Render: agrega varios nombres → aparecen como <li> en #listaAmigos.
Enter: con foco en el input, presiona Enter → agrega.
Sorteo sin datos: con 0 o 1 amigo → alerta que se necesitan al menos 2.
Sorteo correcto: con 2+ amigos, clic en “Sortear amigo” → muestra un nombre en #resultado.
Solución de problemas

No agrega amigos:

Revisa la consola (F12 → Console) por errores de sintaxis.
Verifica que el botón “Añadir” tenga onclick="agregarAmigo()".
Comprueba typos comunes: innerHTML (no innertHTML), select() (no Selected()), Math.floor(Math.random() * amigos.length) (no =).

No se ve nada:

Fuerza recarga sin caché: Ctrl+F5 (Windows) o Cmd+Shift+R (macOS).
En Network verifica que app.js y style.css cargan con status 200.

Sorteo no funciona:

Asegúrate de tener al menos 2 amigos.
Confirma que sortearAmigo() existe y coincide con el onclick del HTML.
Mejoras futuras
Botón “Eliminar” junto a cada amigo.
Persistencia con localStorage.
Mensajes de error no intrusivos (en lugar de alert).
Tests unitarios de lógica (validaciones y sorteo).
Deploy con GitHub Pages.
