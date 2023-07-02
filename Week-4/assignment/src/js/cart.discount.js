// Coupon Code
const discApplyButton = document.getElementById("discApplyButton");
const discountCode = document.getElementById("discountCode");
const discountMessage = document.getElementById("discountMessage");

discountCode.addEventListener("input", () => {
  discountCode.value === "" || !listCarts.length
    ? (discApplyButton.disabled = true)
    : (discApplyButton.disabled = false);
});

discApplyButton.addEventListener("click", () => {
  let subtotal = listCarts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  switch (discountCode.value) {
    case "FIVEK":
      if (subtotal < 5000) {
        discountMessage.textContent =
          "The min order value for this voucher is Tk 5000.";
        discountMessage.classList.remove("text-green-500");
        discountMessage.classList.add("text-red-500");
      } else {
        applyDiscount(subtotal, 5);
        discountMessage.textContent = "Success!";
        discountMessage.classList.remove("text-red-500");
        discountMessage.classList.add("text-green-500");
      }
      break;
    case "TENK":
      if (subtotal < 10000) {
        discountMessage.textContent =
          "The min order value for this voucher is Tk 10000.";
        discountMessage.classList.remove("text-green-500");
        discountMessage.classList.add("text-red-500");
      } else {
        applyDiscount(subtotal, 10);
        discountMessage.textContent = "Success!";
        discountMessage.classList.remove("text-red-500");
        discountMessage.classList.add("text-green-500");
      }
      break;
    default:
      discountMessage.textContent = "Wrong code!";
      discountMessage.classList.remove("text-green-500");
      discountMessage.classList.add("text-red-500");
  }
});
