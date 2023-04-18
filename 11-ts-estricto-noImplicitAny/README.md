# Lección 11: TypeScript Estricto - `noImplicitAny`

¡Felicidades! Has terminado la segunda unidad de TypeScript IRL. Ahora verémos la tercera:

## Unidad 3: De una buena a una gran base de código TypeScript

Nuestra última aplicación será de comercio electrónico. ¡Una tienda de dulces! Ya está desarrollada y puedes agregar dulces al carrito:

![Cáptura de pantalla de la tienda de dulces con chocolates, caramelos y mazapán disponible](https://user-images.githubusercontent.com/656318/154029420-aad5b015-cd28-483d-944f-b84eba885fe1.png)

La tienda de dulces ya esta finalizada y desarrollada y en esta unidad vamos a activar distintos modos estrictos de TypeScript para mejorar nuestro código.

> Ojo: Esta app está escrita con [Svelte](https://svelte.dev/), un framework de frontend. Tal como en la primera y segunda unidad, no es necesario conocer completamnete Svelte para completar este workshop. ¡Te guiaremos por todo lo necesario para triunfar!

## 01. Conceptos Esenciales

### Un tour de la tienda de dulces

Esta aplicación tiene 3 componentes principales:

- `./src/App.svelte`: Nuestro componente principal, donde recopilamos los datos necesarios y mostramos los otros dos componentes
- `./src/components/Menu.svelte`: Donde se muestran botones para seleccionar entre los dulces disponibles
- `./src/components/Cart.svelte`: Una tabla de los dulces que se han puesto en el carrito con su precio total

Tambien trae 2 tipos:

- `./src/types/Candy.ts`: Declaración de las clases de dulces que tendremos, con una jerarquía abstracta
- `./src/types/ShoppingCart.ts`: La clase `ShoppingCart` mantiene una lista de `items` de dulces

Y también, por primera vez, tenemos ¡pruebas! Que fueron escritas con TypeScript y [Jest](https://jestjs.io/):

- `./src/types/Candy.test.ts`: Pruebas para el tipo `Candy`
- `./src/types/ShoppingCart.test.ts`: Pruebas para el tipo `ShoppingCart`

### Modo Estricto

Capaz que conozcas el [modo estricto de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode), pero el modo estricto de TypeScript es distinto.

Los modos estrictos de TypeScript (¡así es, hay más de uno!) son configuraciones que se pasan al compilador. Estas configuraciones, como las otras de TypeScript, se definen en `tsconfig.json`. 

Si echamos una mirada en nuestro `tsconfig.json`, lo veremos dentro de `compilerOptions`: 

```json
  "compilerOptions": {
    "noImplicitAny": true
  }
```

Aquí tenemos `noImplicitAny` activado. Este es uno de los varios modos estrictos de TypeScript. Existen más:

- [`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny)
- [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#noImplicitAny)
- [`strictFunctionTypes`](https://www.typescriptlang.org/tsconfig#strictFunctionTypes)
- [`strictBindCallApply`](https://www.typescriptlang.org/tsconfig#strictBindCallApply)
- [`strictPropertyInitialization`](https://www.typescriptlang.org/tsconfig#strictPropertyInitialization)
- [`noImplicitThis`](https://www.typescriptlang.org/tsconfig#noImplicitThis)
- [`alwaysStrict`](https://www.typescriptlang.org/tsconfig#alwaysStrict)

Por cierto, si quieres activar todos estos ☝️, puedes activar `strict` así no mas:

```json
  "compilerOptions": {
    "strict": true
  }
```

Activar estos modos en tu aplicación causará que la compilación te avise si ciertas de estas reglas no se cumple.

En esta unidad, vamos a activar un par de estas reglas e ir arreglando el código en ese ritmo.

### `noImplicitAny`

Esta regla bloquea tener inferencia de tipos. Por ejemplo:

```typescript
const porDos = (numero) => numero * 2;

console.log(porDos(4));
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBADiATgERBGBeGAKMBXAWwFNEQBKTAPhn2NJgCoYAmAbgCh3RIQAbIgHS8QAc2wIUabABYyZVkA)!

Este código no se compilará con el error:

```bash
Parameter 'numero' implicitly has an 'any' type.
```

## 02. Desafío

En esta lección, vamos a mejorar nuestro código con la regla `noImplicitAny`. 

### Chequeos del código

Arreglemos nuestra base de código para que los siguientes comandos funcionen:

```bash
npm run test
npm run lint
npm run check
```

Examinemos los tres:

- `npm run test` echa a andar las pruebas
- `npm run lint` echa a andar el linter [`ESLint`](https://eslint.org/) para hacer análisis estático
- `npm run check` echa a andar la herramienta [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) para verificar que nuestro código Svelte funciona correctamente

### Arreglar las pruebas

Al correr `npm run test`, se nos presenta:

```bash
> svelte-app@1.0.0 test
> jest src

 FAIL  src/types/__tests__/Candy.test.ts
  ● Test suite failed to run

    src/types/Candy.ts:2:14 - error TS7010: 'priceCents', which lacks return-type annotation, implicitly has an 'any' return type.

    2     abstract priceCents();
                   ~~~~~~~~~~
    src/types/Candy.ts:3:14 - error TS7010: 'name', which lacks return-type annotation, implicitly has an 'any' return type.

    3     abstract name();
                   ~~~~

 FAIL  src/types/__tests__/ShoppingCart.test.ts
  ● Test suite failed to run

    src/types/ShoppingCart.ts:2:5 - error TS7008: Member 'items' implicitly has an 'any[]' type.

    2     items?;
          ~~~~~
    src/types/ShoppingCart.ts:8:13 - error TS7006: Parameter 'item' implicitly has an 'any' type.

    8     addItem(item) {
                  ~~~~

Test Suites: 2 failed, 2 total
Tests:       0 total
Snapshots:   0 total
Time:        3.391 s
Ran all test suites matching /src/i.
```

Vemos, por ejemplo, el siguiente error:

```bash
Parameter 'item' implicitly has an 'any' type.
```

Arreglemos estos dandoles el tipo `any` o `any[]`.

### Arreglar el linting

Al correr `npm run lint`, se nos presenta:

```bash
> svelte-app@1.0.0 lint
> eslint . --ext .ts
```

¡Ah, bueno! Se ve bién

### Arreglar el check

Al correr `npm run check`, se nos presenta:

```bash

> svelte-app@1.0.0 check
> svelte-check --tsconfig ./tsconfig.json


====================================
Loading svelte-check in workspace: /home/ramonh/coding/ts-course-draft/leccion-11-ts-estricto-noImplicitAny
Getting Svelte diagnostics...

====================================
svelte-check found 0 errors, 0 warnings, and 0 hints
```

¡Ah, ya! También funciona.

## 03. Crédito extra

### ¿Pero porqué hacer esto, que tiene de conveniente?

A medida que iremos activando estas reglas, veremos que el código se irá mejorando en el sentido de seguridad de tipos y legibilidad del código. 

Iremos encontrando problemitas con lo que tenemos en la base corriente y eliminándolos con los modos estrictos.
