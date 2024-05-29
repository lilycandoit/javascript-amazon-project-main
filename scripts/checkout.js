import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

// practice OOP (object oriented programing)
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
//import '../data/backend_practice.js';

/*
loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

// note1: the param of FUNCION loadProducts other than variable/ name/ a function name, it can also be anonymous function - which is the function without name.

// note2: setTimeOut is another example of Call back function

//------PROMISE------

async function loadPage() {
  try {
    //throw 'error 1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw 'error2';

      loadCart(() => {
        //reject();
        
        resolve();
      });
    });

  } catch (error) {
    console.log('Please try again later');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }).then((values) => {
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  }),
]);
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });
})
  .then((value) => {
    console.log(value);

    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
  */
