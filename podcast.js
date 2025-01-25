// Intersection Observer para animaciones al entrar en vista
const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "animate-fade-in");
        }
      });
    },
    {
      threshold: 0.2, // Elemento debe estar al 20% visible
    }
  );
  
  // Selecciona los elementos con la clase personalizada
  document.querySelectorAll(".observer-fade").forEach((element) => {
    observer.observe(element);
  });
  
  // Para elementos con deslizamiento hacia arriba
  const slideObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "animate-slide-up");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  
  document.querySelectorAll(".observer-slide").forEach((element) => {
    slideObserver.observe(element);
  });
  