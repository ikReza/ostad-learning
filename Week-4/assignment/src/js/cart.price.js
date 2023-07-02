let cartIconValue = document.getElementById("cartIconValue");

const updatePrice = (listCarts) => {
  cartIconValue.innerText = listCarts.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  subtotal.innerText = listCarts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  applyDiscount(parseInt(subtotal.innerText), 0);

  discountMessage.innerText = "";
  discountCode.value = "";
};

// Discount & Total
function applyDiscount(subtotal, value) {
  let discount = subtotal * (value / 100);
  document.getElementById("discountValue").innerText = "-" + discount;
  document.getElementById("total").innerText = subtotal - discount;
}
