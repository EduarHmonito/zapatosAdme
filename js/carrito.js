console.log("✅ El archivo inicio_secion.js se cargó correctamente");

document.addEventListener("DOMContentLoaded", () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const lista = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total");
  const botonesAgregar = document.querySelectorAll("#productos button");
  const btnVaciar = document.getElementById("vaciar");

  // Mostrar carrito
  function mostrarCarrito() {
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.nombre} - $${item.precio.toLocaleString('es-CO')}
        <button class="eliminar" data-index="${index}">❌</button>
      `;
      lista.appendChild(li);
      total += item.precio;
    });

    totalElemento.textContent = total.toLocaleString('es-CO');
  }

  // Agregar producto
  function agregarAlCarrito(nombre, precio) {
    // Asegurarse de que sea número
    precio = Number(precio);
    const producto = { nombre, precio };
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }

  // Evento para cada botón "Agregar"
  botonesAgregar.forEach(btn => {
    btn.addEventListener("click", () => {
      const nombre = btn.getAttribute("data-nombre");
      const precio = parseFloat(btn.getAttribute("data-precio"));
      agregarAlCarrito(nombre, precio);
    });
  });

  // Eliminar producto
  lista.addEventListener("click", e => {
    if (e.target.classList.contains("eliminar")) {
      const index = e.target.getAttribute("data-index");
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    }
  });

  // Vaciar carrito
  btnVaciar.addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
  });

  mostrarCarrito();
});
