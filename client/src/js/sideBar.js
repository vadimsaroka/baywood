// Sidebar
const checkbox = document.querySelector(".sidebar__checkbox");
const background = document.querySelector(".sidebar__background");
const sidebarButton = document.querySelector(".sidebar__button");
const sidebarItems = Array.from(document.querySelectorAll(".sidebar__item"));

const clearSidebarItems = () => {
  sidebarItems.forEach(e => {
    e.classList.remove("sidebar__item--active");
  });
};

sidebarItems.forEach(e => {
  e.addEventListener("click", () => {
    clearSidebarItems();
    const active = document.getElementById(e.id);

    if (e.id === "sidebar__home") {
      active.classList.add("sidebar__item--active");
    } else {
      checkbox.checked = false;
    }
  });
});

sidebarButton.addEventListener("click", () => {
  clearSidebarItems();
});

background.addEventListener("click", () => {
  checkbox.checked = false;
  clearSidebarItems();
});
