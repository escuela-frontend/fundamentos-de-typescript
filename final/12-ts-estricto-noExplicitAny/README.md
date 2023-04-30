# Lección 12: `noExplicitAny`

Esta vez, en vez de cambiar la configuración de `tsconfig`, vamos a cambiar nuestro `ESLint`.

## 01. Conceptos Esenciales

### ¿Qué es ESLint?

[ESLint](https://eslint.org/) es una herramienta de análisis estático que revisa nuestros archivos de JavaScript (y TypeScript) para encontrar problemas y con eso evitar introducir bugs en el futuro. También ayuda al equipo a tener una base de código y a tener un estilo consistente.

Nuestro proyecto ya tiene ESLint instalado e incluso lo hemos estado usando en `package.json`:

```json
  "scripts": {
    ...
    "lint": "eslint . --ext .ts,.svelte",
    ...
  },
```

### `.eslintrc`

Podemos configurar las opciones de ESLint con el archivo `./.eslintrc`, archivo específico para nuestro proyecto.

Entre ellas, hemos configurado ESLint para que funcione con TypeScript y Svelte, pero en esta lección vamos a enfocarnos en una:

```json
    "rules": {
      "@typescript-eslint/no-explicit-any": 2
    },
```

`@typescript-eslint/no-explicit-any` es [una de las varias](https://typescript-eslint.io/rules/) reglas existentes para TypeScript en ESLint

Con estas podemos declarar uno de tres niveles de error:

- `0` o `"off'`: Ignorar el error
- `1` o `"warn"`: Advertir al usuario del error, pero no bloquear
- `2` o `"error"`: Advertir al usuario del error y también bloquear

### ¿Qué ha cambiado en nuestro proyecto?

El cambio más grande es el uso de un nuevo tipo que se usa para resumir cuántos dulces se encuentran en el carrito:

```typescript
export interface GroupedCartItem {
  name: any;
  priceCents: any;
  quantity: any;
}
```

Este es el tipo de retorno de `groupedItems()`

## 02. Desafío

En esta lección, vamos a mejorar nuestro código con la regla de ESLint `noExplicitAny`

### Arreglar las pruebas

Al correr `npm run test`, se nos entrega:

```bash
> svelte-app@1.0.0 test
> jest src

 PASS  src/types/__tests__/Candy.test.ts
 PASS  src/types/__tests__/ShoppingCart.test.ts

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.891 s, estimated 5 s
Ran all test suites matching /src/i.
```

¡Ah, bueno! Se ve bién.

### Arreglar el linting

Al correr `npm run lint`, se nos entrega:

```bash
> svelte-app@1.0.0 lint
> eslint . --ext .ts,.svelte


/Users/ramonh/coding/ts-course-draft/leccion-13-ts-estricto-noAny/src/types/Candy.ts
  2:28  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  3:22  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/ramonh/coding/ts-course-draft/leccion-13-ts-estricto-noAny/src/types/ShoppingCart.ts
   2:9   error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   3:15  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   4:13  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   8:11  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  14:17  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  21:19  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:42  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:55  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  26:21  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 11 problems (11 errors, 0 warnings)
```

Veamos `./src/types/Candy.ts`, hay errores en la línea 2 y 3, donde tenemos `any`. ¡El `priceCents` y `name` necesitan tipos!

Hagamos lo mismo en `./src/types/ShoppingCart.ts`. El `GroupedCartItem` tiene sus 3 propiedades con tipos `any`. ¡Arreglémoslo!

De ahí, la clase `ShoppingCart` tiene una propiedad `items` de tipo `any[]`, pero sabemos que son una lista de `Candy`. ¡Importémoslo y usémoslo! De ahí, todos los `any` tendrán su tipo.

En la línea 28, tenemos:

```typescript
let cartItem: any = cartItems.find(
```

Si reemplazamos `any` con `GroupedCartItem`, veremos que en realidad `find` nos da `GroupedCartItem` o `undefined`. ¡Este es un tipo combinado!

Ahora debe funcionar `npm run lint`, pero sin embargo...

### Volver a las pruebas

Si echamos a andar `npm run test`...

```bash
> svelte-app@1.0.0 test
> jest src

 FAIL  src/types/__tests__/ShoppingCart.test.ts
  ● Test suite failed to run

    src/types/__tests__/ShoppingCart.test.ts:11:37 - error TS2345: Argument of type '{ data: string; }' is not assignable to parameter of type 'Candy'.
      Object literal may only specify known properties, and 'data' does not exist in type 'Candy'.

    11   const updatedCart = cart.addItem({data: "value"});
                                           ~~~~~~~~~~~~~
    src/types/__tests__/ShoppingCart.test.ts:19:16 - error TS2345: Argument of type '{ priceCents: () => number; }' is not assignable to parameter of type 'Candy'.
      Property 'name' is missing in type '{ priceCents: () => number; }' but required in type 'Candy'.

    19   cart.addItem({
                      ~
    20     priceCents: () => 100
       ~~~~~~~~~~~~~~~~~~~~~~~~~
    21   });
       ~~~

      src/types/Candy.ts:3:14
        3     abstract name(): string;
                       ~~~~
        'name' is declared here.

 PASS  src/types/__tests__/Candy.test.ts

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.874 s, estimated 3 s
Ran all test suites matching /src/i.
```

Debido a que cambiamos `addItem` en `ShoppingCart`, ¡ahora nuestros tests no funcionan! Agreguemos una clase en el test:

```typescript
class TestCandy extends Candy {
  name() {
    return "Test";
  }

  priceCents() {
    return 100;
  }
}
```

Por ejemplo, lo podemos usar en la segunda prueba:

```typescript
test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart();
  const candy = new TestCandy();
  const updatedCart = cart.addItem(candy);
  expect(updatedCart.items).toEqual([candy]);
});
```

¡Ahora hagamoslo para la otra!

Ahora vamos a echar a andar todos los checks:

```bash
npm run test
npm run lint
npm run check
```

## 03. Crédito extra

### Reflexiones

- ¿Cuáles son las ventajas de hacer linting?
- ¿Cuál es la ventaja de prohibir el `any` explícito?
- ¿Es bueno que la clase `ShoppingCart` dependa de `Candy`?, ¿qué pasa si quieremos tener otras clases de productos?
