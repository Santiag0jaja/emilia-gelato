// Activar enlace del menú según la página
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach(a => {
    const href = a.getAttribute("href");
    if (href.endsWith(path)) a.classList.add("active");
    else a.classList.remove("active");
  });

  // Filtro simple de productos en /pages/servicios.html
  const filtro = document.getElementById("filtro");
  if (filtro) {
    filtro.addEventListener("change", () => {
      const val = filtro.value;
      document.querySelectorAll("#grid-productos .col").forEach(card => {
        const stock = card.getAttribute("data-stock");
        const show = val === "todos" || stock === val;
        card.classList.toggle("d-none", !show);
      });
    });
  }

  // Validación Bootstrap + envío a WhatsApp en /pages/contacto.html
  const form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add("was-validated");
        return;
      }
      const nombre = document.getElementById("nombre").value.trim();
      const email  = document.getElementById("email").value.trim();
      const msg    = document.getElementById("mensaje").value.trim();
      const texto  = encodeURIComponent(`Hola Emilia Gelato, soy ${nombre} (${email}). ${msg}`);
      window.open(`https://wa.me/573001112233?text=${texto}`, "_blank", "noopener");
    }, false);
  }
});
