function initStarRatings() {
  const categories = document.querySelectorAll(".rating-category");

  categories.forEach((category) => {
    const starContainer = category.querySelector(".stars");
    starContainer.innerHTML = ""; // clear any previous stars
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa-star", "fa-solid", "star");
      star.dataset.value = i;

      star.addEventListener("click", () => {
        const allStars = starContainer.querySelectorAll(".star");
        allStars.forEach((s) => {
          s.classList.toggle("selected", s.dataset.value <= star.dataset.value);
        });
      });

      starContainer.appendChild(star);
    }
  });
}
