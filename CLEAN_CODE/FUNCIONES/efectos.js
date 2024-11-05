function calculateTotalPrice(cartItems) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Efecto secundario: manipula directamente el DOM para mostrar el total
  document.getElementById("totalPrice").innerText = `Total: $${total}`;

  return total;
}

function calculateTotalPrice(cartItems) {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateTotalPriceUI(total) {
  document.getElementById("totalPrice").innerText = `Total: $${total}`;
}

// Ejemplo de uso
const total = calculateTotalPrice(cartItems);
updateTotalPriceUI(total);
