import 'bootstrap';

const icon = document.querySelector("#dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
if (icon != null) {
  icon.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  })
}
