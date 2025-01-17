document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita que el formulario recargue la página
  
      const nombre = document.getElementById("nombre").value;
      const mensaje = document.getElementById("mensaje").value;
  
      // Número de WhatsApp (reemplazalo por el tuyo)
      const telefono = "5491234567890";
  
      // Arma el mensaje
      const texto = `Hola, soy ${nombre}. ${mensaje}`;
  
      // Genera el enlace de WhatsApp
      const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
  
      // Redirige a WhatsApp
      window.open(enlace, "_blank");
    });
  });
  