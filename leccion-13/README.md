# Lección 13: Genéricos avanzados

¡Hemos llegado a la última lección! Que viaje.

Con esto, el último perfeccionamiento que me gustaría proponer es separar la conección fuerte entre un `ShoppingCart` y la clase `Candy`.

## 01. Conceptos Esenciales

### Genéricos que se extienden

Veamos este ejemplo de código:

```typescript
abstract class Sandwich {
  abstract name(): string;
}

class PanConPalta extends Sandwich {
  name() {
    return "Pan con Palta";
  }
}

class Pedido<T> {
  constructor(public productos: T[]) {}

  lista(): string[] {
    return this.productos.map((producto: T) => producto.name());
  }

  pedir(): void {
    console.log(`Deme ${this.lista().join(",")}, por favor!`);
  }
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/IYIwzgLgTsDGEAJYBthjAgysAdgEwHcBLWACwQG8AoBBUSGeBHYAWwFMAKASgC4EGRHAHMA3FQC+VKijQYACrgDCAexyLkEYAnYAPCO3wZs+YmUo1mbLtwu1aUdhACuUHAgBEi97DUINWh7itFJSMqjo-ux4RHgqADwAKgB8dkhqDM7wKlCcAA7OIMgkCHlQKnhZECpg-IkA2gC6thRhtMWQwDz8giJNaQ5Oru4QpERgAHRlFVU1E6zAeZz55ZXZdbYAvKnTa9UTLBw83MEIbaXRRLl8CABuKrED6ThgKsjsE8gqwpwABgAi7A4CAAJBRRuNPuMtDwJgArB44TgeAA0Hm4EhRpRyCAAZsB7lAAIS-biWUJAA)!

Tenemos una clase abstracta `Sandwich`, una subclase `PanConPalta`, y una clase `Pedido` que es genérica. Quieremos usar el método `name()` en `lista()`, pero nos sale un error:

    Property 'name' does not exist on type 'T'.

Claro, un `T` puede que no tenga el método `name()`. Para arreglarlo, vamos a cambiar la declaración de nuestro tipo genérico:

```typescript
class Pedido<T extends Sandwich> {
```

¡Ahora si podemos acceder al método!

### ¿Pero por qué?

¡Es ciertamente una buena pregunta! Por el momento, todo lo que vendemos en nuestra tienda de dulces son... ¡dulces!

¿Pero qué pasa si, digamos, en un par de meses nos va tan bien con nuestra tienda que quieremos vender otras cosas?

En este caso, ¡nuestro `ShoppingCart` ya no sirve tan bién! Por eso, vamos a generalisarlo con genéricos.

### ¿Qué ha cambiado en esta lección?

Lo más importante es que ahora tenemos una clase `./src/types/CartItemType.ts`:

```typescript
export default abstract class CartItemType {
  abstract priceCents(): number;
  abstract name(): string;
}
```

También vemos que las pruebas usan el `./src/types/__tests__/ShoppingCart.test.ts`, por ejemplo en la línea 14:

```typescript
test("New cart has no items and 0 total", () => {
  const cart = new ShoppingCart<TestCandy>();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});
```

## 02. Desafío

En esta lección, vamos a usar genéricos con `ShoppingCart` para que sea cualquier tipo `CartItemType`.

### Adaptar la clase Candy

Vamos a cambiar la definición de `Candy` en `./src/types/Candy.ts`.

Va a `extends CartItemType` (¡tenemos que importar CartItemType!) y quitar las propiedades, ya que existen en `CartItemType`.

### Cambiar ShoppingCart a ser genérico

En `./src/types/ShoppingCart.ts`, quitemos el import de Candy, y cambiemos la definicion de la clase a ser `ShoppingCart<T>`.

De ahí, reemplacemos todas las instancias de `Candy` con T. Así nos aseguramos que no se usa `Candy` si no un tipo genérico.

Pero ahí llegamos a un problemita. `T` no tiene las funciones `name` ni `priceCents`. Lo que podemos hacer es declarar que `ShoppingCart` es genérica con `T extends CartItemType`. Luego, importamos `CartItemType`:

```typescript
import type CartItemType from "./CartItemType";
```

## 03. Crédito extra

### Reflexiones

- ¿De qué nos sirve usar genéricos aquí?
- ¿Si quieremos agregar `Sandwich`es para la venta, cómo lo hacemos?
