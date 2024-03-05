const btnMenu = document.querySelector(".menu");
const sideMenu = document.querySelector(".side-menu");

btnMenu.addEventListener("click", () => {
    if (sideMenu.classList.contains("hidden")) {
        sideMenu.classList.remove("hidden");
    }
    else {
        sideMenu.classList.add("hidden");
    }
})