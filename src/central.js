

const hamburger = document.getElementById("toggle-dropdown-dinavbar");
const navbar = document.getElementById("navbar-dropdown");

hamburger.addEventListener("click", function () {
  // if (navbar.classList.contains('hidden')) {
  //     navbar.classList.replace('hidden', 'flex');
  // } else {
  //     navbar.classList.replace('flex', 'hidden');
  // }

  navbar.classList.contains("hidden")
    ? navbar.classList.replace("hidden", "flex")
    : navbar.classList.replace("flex", "hidden");
});
