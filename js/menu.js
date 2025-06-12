// Assuming cart.js is already loaded, so addToCart function is available

document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add-to-cart");

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the parent menu item element (or adjust selector as needed)
      const menuItem = button.closest(".menu-item");
      if (!menuItem) return;

      // Get item details from data attributes
      const name = menuItem.getAttribute("data-name");
      const price = parseFloat(menuItem.getAttribute("data-price"));

      // Build item object to add
      const item = { name, price };

      // Add to cart using your cart.js function
      addToCart(item);
    });
  });
});
