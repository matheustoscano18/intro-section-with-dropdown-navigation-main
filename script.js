const featuresButton = document.getElementById("features");
const companyButton = document.getElementById("company");
const dropdownFeatures = document.querySelector(".dropdown-content-features");
const dropdownCompany = document.querySelector(".dropdown-content-company");
const arrowIconFeatures = document.getElementById("arrow-icon-features");
const arrowIconCompany = document.getElementById("arrow-icon-company");

const arrowDownIcon = "./images/icon-arrow-down.svg";
const arrowUpIcon = "./images/icon-arrow-up.svg";

function toggleDropdown(dropdown, arrowIcon) {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    arrowIcon.src = arrowDownIcon;
  } else {
    dropdown.style.display = "block";
    arrowIcon.src = arrowUpIcon;
  }
}

featuresButton.addEventListener("click", () => toggleDropdown(dropdownFeatures, arrowIconFeatures));
companyButton.addEventListener("click", () => toggleDropdown(dropdownCompany, arrowIconCompany));

const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const headerContent = document.querySelector('.header-content');

openIcon.addEventListener('click', () => {
  headerContent.classList.add('show');
});

closeIcon.addEventListener('click', () => {
  headerContent.classList.remove('show');
});