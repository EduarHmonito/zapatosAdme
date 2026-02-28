console.log("✅ El archivo inicio_secion.js se cargó correctamente");

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();


  const correo = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();

  if (!correo || !contrasena) {
    alert('Por favor, ingresa tu correo y contraseña');
    return;
  }

  const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

  if (!usuarioGuardado) {
    alert('No estás registrado. Por favor, crea una cuenta.');
    return;
  }

  if (correo === usuarioGuardado.correo && contrasena === usuarioGuardado.contrasena) {
    alert(`¡Bienvenido/a ${usuarioGuardado.nombre}! Inicio de sesión exitoso.`);
    document.querySelector('form').reset();

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  } else {
    
    alert('Correo o contraseña incorrectos');
  }
});