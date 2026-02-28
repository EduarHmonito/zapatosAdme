const botones = document.querySelectorAll('.talla');
const resultado = document.getElementById('resultado');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('seleccionada'));
    boton.classList.add('seleccionada');
    resultado.textContent = "Talla seleccionada: " + boton.textContent;
  });
});
