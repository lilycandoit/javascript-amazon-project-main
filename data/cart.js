export let cart = [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2
  }
];

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

    const quantitySelected = Number(quantitySelector.value);

    if (matchingItem) {
      matchingItem.quantity += quantitySelected;;
    } else {
      cart.push({
        productId, // shortcut of the below
        // productId: productId,
        quantity: quantitySelected,
      });
    }
  }

  export function removeFromCart(productId){
    const newCart = [];

    cart.forEach(cartItem => {
      if (cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })

    cart = newCart;
  }