const menuToggle = document.getElementById("menu-toggle");
const rightList = document.getElementById("right-list");
menuToggle.addEventListener("click", () => {
    rightList.classList.toggle("active");
});