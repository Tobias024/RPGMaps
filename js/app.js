const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const producto = boton.closest("div");
      const nombre = producto.querySelector("h3").innerText;
      const precio = producto.querySelector("span").innerText.replace("$", "");

      agregarAlCarrito({ nombre, precio });
    });
  });
});

function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} agregado al carrito.`);
}
