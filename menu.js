const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove active class and styles from all tabs
    tabs.forEach(t => {
      t.classList.remove("active", "text-[#63A4D3]", "border-b-2", "border-[#2A9D8F]", "bg-blue-500", "text-white", "rounded-full");
    });

    // Add active class and styles to the clicked tab
    tab.classList.add("active", "text-white", "bg-blue-500", "border-b-2", "border-[#2A9D8F]", "rounded-full");

    // Hide all tab content
    tabContents.forEach(content => content.classList.add("hidden"));

    // Show the corresponding tab content
    tabContents[index].classList.remove("hidden");
  });
});
