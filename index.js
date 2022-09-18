const menuShow = document.querySelector(".menu-show");
const menuClose = document.querySelector(".menu-close");
const navBar = document.querySelector("header nav");
const singleMenu = document.querySelectorAll(".menu-item");

const menuShowHide = (state) => {
  navBar.style.display = state;
};

menuShow.addEventListener("click", () => {
  menuShowHide("flex");
});

menuClose.addEventListener("click", () => {
  menuShowHide("none");
});

for (let i = 0; i <= singleMenu.length; i += 1) {
  singleMenu[i].addEventListener("click", () => {
    menuShowHide("none");
  });
}
