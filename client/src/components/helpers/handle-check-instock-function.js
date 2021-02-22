// Used in ItemContainerBig and ItemContainerSmall
// Used to determine whether an item is available to be added to cart
// Image and button change when item is out of stock

export const handleCheckInstock = (cartItems, item) => {
  let stockNum;
  if (cartItems[item._id]) {
    stockNum = item.numInStock - cartItems[item._id].numInCart;
  } else {
    stockNum = item.numInStock;
  }
  return stockNum;
};
