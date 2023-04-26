const iconHamburger = document.querySelector(".bi-list"),
  navContainer = document.querySelector(".nav_container"),
  iconClose = document.querySelector(".bi-x"),
  nav = document.querySelector("nav"),
  link_header = document.querySelectorAll(".link_header"),
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

window.addEventListener("scroll", () => {
  if (window.scrollY >= 75) {
    nav.style.backgroundColor = "#ff8500";
    ul.style.backgroundColor = "#fff";
    ul.style.color = "#000";
    iconClose.style.color = "#000";
    link_header.forEach((link) => (link.style.color = "#000"));
  } else {
    nav.style.backgroundColor = "transparent";
    ul.style.backgroundColor = "#ff8500";
    ul.style.color = "#fff";
    iconClose.style.color = "#fff";
    link_header.forEach((link) => (link.style.color = "#fff"));
  }
});
