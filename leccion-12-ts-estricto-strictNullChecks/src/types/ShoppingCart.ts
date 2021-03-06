/*
 * π Tipo para nuestro carrito
 */

export default class ShoppingCart {
// π Tenemos una propiedad opcional de items de carrito
    items?: any[];

// π Crear un ShoppingCart con un arreglo de items vacΓ­o
    constructor() {
        this.items = [];
    }

// π Agregar un item
    addItem(item: any) {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

// π Agrupar los items de acuerdo a cuantos y su total
  groupedItems() {
    return Object.values(
// βοΈ Agreguemos una guardia de tipo para `items`
      this.items.reduce((cartItem, item) => {
        cartItem[item.name()] = cartItem[item.name()] || {
          name: item.name(),
          quantity: 0,
          priceCents: 0,
        };
        cartItem[item.name()].quantity += 1;
        cartItem[item.name()].priceCents += item.priceCents();
        return cartItem;
      }, {})
    );
  }

// π NΓΊmero de items
    numberOfItems() {
// βοΈ Agreguemos una guardia de tipo para `items`
        return this.items.length;
    }

// π El precio completo
    total() {
// βοΈ Agreguemos una guardia de tipo para `items`
        return this.items.reduce((x, y) => x + y.priceCents(), 0);
    }
}