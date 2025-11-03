document.querySelector ('form').addEventListener ('submit', function (event) {
    event.preventDefault (); // evitar redarga o eviar formurario
    
    const nombre = document.getElementById ('nombre').value. trim ();
    const correo = document.getElementById ('correo').value.trim ();
    const contrasena = document.getElementById ('contrasena').value.trim ();
    const confirmar = document.getElementById ('confirmar').value.trim ();
    const telefono = document.getElementById ('telefono').value.trim ();
    const edad = document.getElementById ('edad').value.trim ();
    if (!nombre || !correo || !contraseña || !confirmar || !telefono || !edad) {
        alert ('por favor completar todos los campos')
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.text (correo)){
        alert ('Correo inexcistente')
        return;
    }

    if(!/^\d+$/ .test(telefono)) {
        alert ('el telefono esta mal escrito');
        return
    }
    if (contrasena.length < 8) {
        alert ('la tienes muy corta minimo 8 carecateres')
    }


    if (contrasena !== confirmar) {
        alert ( 'no coinciden la contraseñas')
        return;
    }

    alert (' lo iso bien bienvenido')

    const usuario = { nombre, correo, contraseña, confirmar, telefono, edad }
    localStorage.setItem ('usuarioRegistrdo', JSON.stringify(usuario))

    
    document.querySelector ('form') .reset ()

    setTimeout (()=> {
        window.location.href = 'inicio_sesion.html';
    }, 1000)
})