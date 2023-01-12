// #region Hamburger Menu

let menuIcon = document.querySelector(".sidebar__fixed__menu__icon");
let windowMenu = document.querySelector(".sidebar__window__menu");

menuIcon.addEventListener("click", function () {
  this.classList.toggle("on");
  windowMenu.classList.toggle("close");
});

// #endregion Hamburger Menu

// #region Drop Menus Open-Close
let menuList = Array.from(
  document.querySelectorAll(".nav__menu .nav__menu__list")
);
let dropMenuBtns = Array.from(
  document.querySelectorAll(".nav__menu .toggle__menu__btn")
);

menuList.forEach((item, index) => {
  item.querySelector(".toggle__menu__btn").addEventListener("click", () => {
    item.classList.toggle("active");

    let dropMenu = item.querySelector(".dropmenu");
    if (item.classList.contains("active")) {
      dropMenu.style.height = `${dropMenu.scrollHeight}px`;
      item.querySelector(".chevron").style.transform = "rotate(-90deg)";
    } else {
      dropMenu.style.height = 0;
      item.querySelector(".chevron").style.transform = "rotate(0)";
    }
    closeAllOpened(index);
  });
});

function closeAllOpened(itemIndex) {
  menuList.forEach((item, index) => {
    if (itemIndex != index) {
      item.classList.remove("active");
      item.querySelector(".dropmenu").style.height = 0;
      item.querySelector(".chevron").style.transform = "rotate(0)";
    }
  });
}
// #endregion Drop Menu Open-Close
