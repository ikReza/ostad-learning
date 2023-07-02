//ADD_ITEM
const addItemToCart = (cartItems, toAdd) => {
  const existItem = cartItems.find((item) => item.id === toAdd.id);

  if (existItem) {
    return cartItems.map((item) =>
      item.id === toAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...toAdd, quantity: 1 }];
};

//REMOVE_ITEM
const removeItemFromCart = (cartItems, toRemove) => {
  const existItem = cartItems.find((item) => item.id === toRemove.id);

  if (existItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== toRemove.id);
  }

  return cartItems.map((item) =>
    item.id === toRemove.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

//CLEAR_ITEM
const clearItemFromCart = (cartItems, toClear) =>
  cartItems.filter((item) => item.id !== toClear.id);
