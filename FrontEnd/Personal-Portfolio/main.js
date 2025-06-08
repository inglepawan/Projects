const menuToggle = document.getElementById("menu-toggle");
const rightList = document.getElementById("right-list");
menuToggle.addEventListener("click", () => {
    rightList.classList.toggle("active");
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");
});
