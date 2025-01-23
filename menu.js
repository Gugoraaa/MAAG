const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Función para manejar la activación de las pestañas
function activateTab(tab, index) {
  // Remueve las clases activas de todas las pestañas
  tabs.forEach(t => {
    t.classList.remove("active", "text-[#63A4D3]", "border-b-2", "border-[#2A9D8F]", "bg-yellow-500", "text-black", "rounded-full","font-bold");
  });

  // Activa la pestaña seleccionada
  tab.classList.add("active", "text-black", "bg-yellow-500", "border-b-2", "border-[#2A9D8F]", "rounded-full","font-bold");

  // Oculta todo el contenido
  tabContents.forEach(content => content.classList.add("hidden"));

  // Muestra el contenido correspondiente
  tabContents[index].classList.remove("hidden");
}

// Inicialización en la carga
document.addEventListener("DOMContentLoaded", () => {
  const initialTab = document.querySelector(".tab.active");
  const initialIndex = Array.from(tabs).indexOf(initialTab);

  if (initialTab && initialIndex !== -1) {
    activateTab(initialTab, initialIndex);
  }
});

// Añade el evento click a las pestañas
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab, index));
});
