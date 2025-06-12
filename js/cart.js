let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.title === item.title);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.title} added to cart!`);
}
