/*
 * ð Pruebas del ShoppingCart
 */

import { ShoppingCart } from '../ShoppingCart'

// âï¸ Ahora que ShoppingCart usa `Candy` necesitamos usar nuestra propia subclase

// class TestCandy extends Candy {
//   name() {
//     return "Test"
//   }

//   priceCents() {
//     return 100;
//   }
// }

/*
 * ð Probar un ShoppingCart nuevo y vacÃ­o
 */

test("New cart has no items and 0 total", () => {
  const cart = new ShoppingCart();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});

/*
 * ð Probar agregar un item a un ShoppingCart
 */

test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart();
// âï¸ Este no es un Candy! Creemos una instancia de TestCandy
  const updatedCart = cart.addItem({data: "value"});
  expect(updatedCart.items).toEqual([{
    data: "value"
  }]);
});

/*
 * ð Probar el precio total de un ShoppingCart
 */

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart();
// âï¸ Este no es un Candy! Creemos una instancia de TestCandy
  cart.addItem({
    priceCents: () => 100
  });
  expect(cart.total()).toBe(100);
});
