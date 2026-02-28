
const formulario = document.querySelector('.formulario-comentario');
const nombreInput = document.getElementById('nombre');
const comentarioInput = document.getElementById('comentario');

// Crear contenedor donde se mostrarán los comentarios
const contenedorComentarios = document.createElement('div');
contenedorComentarios.id = 'lista-comentarios';
document.querySelector('.contenedor-comentarios').appendChild(contenedorComentarios);

// Cargar comentarios guardados
let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
mostrarComentarios();

// Cuando se envíe el formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita recargar la página

  const nombre = nombreInput.value.trim();
  const texto = comentarioInput.value.trim();

  if (nombre && texto) {
    const nuevoComentario = { nombre, texto, fecha: new Date().toLocaleString() };
    comentarios.push(nuevoComentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
    mostrarComentarios();
    formulario.reset(); // Limpia los campos
  }
});

// Función para mostrar los comentarios
function mostrarComentarios() {
  contenedorComentarios.innerHTML = '<h2>Comentarios anteriores</h2>';
  if (comentarios.length === 0) {
    contenedorComentarios.innerHTML += '<p>Aún no hay comentarios.</p>';
    return;
  }

  comentarios.forEach(c => {
    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = `
      <strong>${c.nombre}</strong> <span>(${c.fecha})</span>
      <p>${c.texto}</p>
      <hr>
    `;
    contenedorComentarios.appendChild(div);
  });
}

