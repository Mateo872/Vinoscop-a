const iconHamburger = document.querySelector(".bi-list"),
  navContainer = document.querySelector(".nav_container"),
  iconClose = document.querySelector(".bi-x"),
  ul = document.querySelector("ul");

navContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav_container")) {
    close();
  }
});

iconHamburger.addEventListener("click", () => {
  navContainer.style.visibility = "visible";
  ul.classList.add("menu_visible");
});

iconClose.addEventListener("click", close);

function close() {
  navContainer.style.visibility = "hidden";
  ul.classList.remove("menu_visible");
}
