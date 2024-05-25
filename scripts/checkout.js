import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';

// practice OOP (object oriented programing)
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
//import '../data/backend_practice.js';

loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

// note1: the param of FUNCION loadProducts other than variable/ name/ a function name, it can also be anonymous function - which is the function without name.

// note2: setTimeOut is another example of Call back function
