function toggleContent(buttonId, contentClass) {
    const button = document.getElementById(buttonId);
    const content = document.querySelectorAll(`.${contentClass}`);
  
    // Alternar visibilidad de las tarjetas ocultas
    let isHidden = content[0].classList.contains("hidden");
  
    content.forEach((item) => {
      if (isHidden) {
        item.classList.remove("hidden"); // Mostrar
      } else {
        item.classList.add("hidden"); // Ocultar
      }
    });
  
    // Cambiar el texto del botón según el estado
    button.textContent = isHidden ? "Mostrar menos" : "Mostrar más";
  
    // Si se colapsa (Mostrar menos), regresar a la sección principal #material
    if (!isHidden) {
      document.querySelector("#material").scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  
  // Asignar eventos a los botones
  document.getElementById("show-more-tutorials").addEventListener("click", () => {
    toggleContent("show-more-tutorials", "extra-tutorial");
  });
  
  document.getElementById("show-more-libraries").addEventListener("click", () => {
    toggleContent("show-more-libraries", "extra-library");
  });
  