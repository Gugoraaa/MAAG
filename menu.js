const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

function activateTab(tab, index) {
  tabs.forEach(t => {
    t.classList.remove("active", "text-white", "border-b-2", "border-[#2A9D8F]", "rounded-lg","font-bold","bg-blue-400", "text-black");
  });
  tab.classList.add("active", "text-black", "border-b-2", "border-[#2A9D8F]", "rounded-lg","font-bold","bg-blue-400");
  tabContents.forEach(content => content.classList.add("hidden"));
  tabContents[index].classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const initialTab = document.querySelector(".tab.active");
  const initialIndex = Array.from(tabs).indexOf(initialTab);
  if (initialTab && initialIndex !== -1) {
    activateTab(initialTab, initialIndex);
  }
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab, index));
});
