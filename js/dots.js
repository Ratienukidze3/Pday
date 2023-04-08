const dropdownButton = document.getElementById("dots_button");
const dropdownMenu = document.getElementById("dots_drop");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("see");
  };
dropdownButton.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("see")) {
    toggleDropdown();
  }
});

const dropdown1Button = document.getElementById("dots1_button");
const dropdown1Menu = document.getElementById("dots1_drop");

const toggleDropdown1 = function () {
  dropdown1Menu.classList.toggle("see1");
  };
dropdown1Button.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown1();
});

document.documentElement.addEventListener("click", function () {
  if (dropdown1Menu.classList.contains("see1")) {
    toggleDropdown1();
  }
});



const dropdown2Button = document.getElementById("dots2_button");
const dropdown2Menu = document.getElementById("dots2_drop");

const toggleDropdown2 = function () {
  dropdown2Menu.classList.toggle("see2");
  };
dropdown2Button.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown2();
});

document.documentElement.addEventListener("click", function () {
  if (dropdown2Menu.classList.contains("see2")) {
    toggleDropdown2();
  }
});