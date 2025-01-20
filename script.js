const toggleDropdown = (dropdown, menu, isOpen) => {
  dropdown.classList.toggle("open", isOpen);
  menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

const closeAllDropdowns = () => {
  document
    .querySelectorAll(".dropdown-container.open")
    .forEach((openDropdown) => {
      const menu = openDropdown.querySelector(".dropdown-menu");
      toggleDropdown(openDropdown, menu, false);
    });
};

document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();

    const dropdown = e.target.closest(".dropdown-container");
    const menu = dropdown.querySelector(".dropdown-menu");
    const isOpen = dropdown.classList.contains("open");

    closeAllDropdowns();

    toggleDropdown(dropdown, menu, !isOpen);
  });
});

document
  .querySelectorAll(".sidebar-toggler, .sidebar-menu-button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      closeAllDropdowns();

      // 切换侧边栏上的折叠类
      document.querySelector(".sidebar").classList.toggle("collapsed");
    });
  });

if (window.innerWidth <= 1024)
  document.querySelector(".sidebar").classList.toggle("collapsed");
