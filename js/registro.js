console.log("✅ El archivo inicio_secion.js se cargó correctamente");
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recargar la página

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const confirmar = document.getElementById('confirmar').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const edad = document.getElementById('edad').value.trim();

    if (!nombre || !correo || !contrasena || !confirmar || !telefono || !edad) {
      alert('Por favor completa todos los campos');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(correo)) {
      alert('Correo inexistente o mal escrito');
      return;
    }

    if (!/^\d+$/.test(telefono)) {
      alert('El teléfono está mal escrito');
      return;
    }

    if (contrasena.length < 8) {
      alert('La contraseña es muy corta (mínimo 8 caracteres)');
      return;
    }

    if (contrasena !== confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }

    alert('✅ Registro exitoso. ¡Bienvenido!');

    const usuario = { nombre, correo, contrasena, telefono, edad };
    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

    form.reset();

    setTimeout(() => {
      window.location.href = 'inicio_sesion.html';
    }, 1000);
  });
});

