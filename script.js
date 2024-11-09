const featuresButton = document.getElementById("features");
const companyButton = document.getElementById("company");
const dropdownFeatures = document.querySelector(".dropdown-content-features");
const dropdownCompany = document.querySelector(".dropdown-content-company");

function toggleDropdown(dropdown) {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  const headerContent = document.querySelector(".header-content");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    headerContent.style.display = "none";
  } else {
    menu.style.display = "block";
    headerContent.style.display = "flex";
  }
}

featuresButton.addEventListener("click", () => toggleDropdown(dropdownFeatures));
companyButton.addEventListener("click", () => toggleDropdown(dropdownCompany));
