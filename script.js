function addToCart() {
  localStorage.setItem("cart", "3D Printed Star Fidget - $9.99");

  alert("Added to cart!");
}

function loadCart() {
  const cart = localStorage.getItem("cart");

  const cartItems = document.getElementById("cart-items");

  if (cartItems) {
    if (cart) {
      cartItems.innerHTML = `
        <h2>${cart}</h2>
      `;
    } else {
      cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }
  }
}

function checkout() {
  alert("Checkout coming soon!");
}

loadCart();
