function toggleNav() {
  const toggleButton = document.querySelector(".mainNav-toggle");
  const links = document.querySelector(".mainNav-links");
  const icons = document.getElementById("icon-wrapper");

  if (!toggleButton || !links || !icons) {
    console.warn("Toggle button or related elements not found");
    return;
  }

  toggleButton.addEventListener("click", () => {
    links.classList.toggle("show");
    icons.classList.toggle("show-icons");
  });
}
