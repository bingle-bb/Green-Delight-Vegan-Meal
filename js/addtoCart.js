let cart = JSON.parse(localStorage.getItem("cart")) || {};

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity += 1;
  } else {
    cart[name] = { price: price, quantity: 1 };
  }
  saveCart();
  renderCart();
}

function removeFromCart(name) {
  delete cart[name];
  saveCart();
  renderCart();
}

function updateCart(name, quantity) {
  if (cart[name]) {
    quantity = parseInt(quantity);
    if (quantity <= 0) {
      removeFromCart(name);
    } else {
      cart[name].quantity = quantity;
    }
    saveCart();
    renderCart();
  }
}

function renderCart() {
  const cartBox = document.getElementById("cartBox");
  const cartItemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  if (!cartItemsEl || !totalEl) return; // Prevent errors

  cartItemsEl.innerHTML = "";
  let total = 0;
  let isEmpty = true;

  for (const name in cart) {
    const item = cart[name];
    total += item.price * item.quantity;
    isEmpty = false;

    cartItemsEl.innerHTML += `
      <div>
        ${name} - $${item.price} 
        <input type="number" value="${item.quantity}" min="1" onchange="updateCart('${name}', this.value)">
        <button onclick="removeFromCart('${name}')">✖</button>
      </div>
    `;
  }

  if (isEmpty) {
    cartItemsEl.innerHTML = "Your cart is empty.";
  }

  totalEl.textContent = total.toFixed(2);
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", renderCart);
