// get elements

const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector("#search-icon");
const closeIcon = document.querySelector("#clos-icon");
const burgerList = document.querySelector(".burger-list");
const navList = document.querySelector(".nav-list");
const blurSpace = document.querySelector(".blur-space");

// search box
searchIcon.addEventListener("click", () => {
  searchInput.classList.add("add-box");
  searchIcon.classList.add("add-box");
  closeIcon.classList.add("add-box");
});

// menu burger
burgerList.addEventListener("click", () => {
  navList.classList.toggle("open-menu");
  blurSpace.classList.toggle("open-menu");
});
