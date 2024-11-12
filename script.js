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

featuresButton.addEventListener("click", () => toggleDropdown(dropdownFeatures));
companyButton.addEventListener("click", () => toggleDropdown(dropdownCompany));

const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const headerContent = document.querySelector('.header-content');

openIcon.addEventListener('click', () => {
  headerContent.classList.add('show');
});

closeIcon.addEventListener('click', () => {
  headerContent.classList.remove('show');
});