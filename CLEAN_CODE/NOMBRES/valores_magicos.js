function calculateTotalPrice(quantity, pricePerItem) {
  if (quantity > 10) {
    return quantity * pricePerItem * 0.9; // 10% discount if quantity > 10
  }
  return quantity * pricePerItem;
}

const MINIMUM_QUANTITY_FOR_DISCOUNT = 10;
const DISCOUNT_RATE = 0.9;

function calculateTotalPrice(quantity, pricePerItem) {
  if (quantity > MINIMUM_QUANTITY_FOR_DISCOUNT) {
    return quantity * pricePerItem * DISCOUNT_RATE;
  }
  return quantity * pricePerItem;
}
