# Lección 07: Métodos Constructores

Seguro que ya te habrás pasado un buen rato jugando a los dados 😄

Vamos a cambiar nuestro juego un poco para que pueda jugarse con dados de distintos números de lados.

## 01. Conceptos Esenciales

Veamos qué es lo que ha cambiado en `./src/App.vue`, específicamente en la línea 7:

```typescript
const roll = () => Array.from({ length: 4 }, () => new Dice(6));
```

Aquí vemos que le pasamos un 6 a cada nuevo `Dice`. Esta será la cantidad de caras que tendrá cada dado.

## 02. Desafío

En esta lección vamos a modificar nuestra clase `Dice` para que acepte una cantidad de lados `sides` y lo ultilice como el máximo valor al tirarlo.

### La propiedad `sides`

Una clase puede tener propiedades tal como en JavaScript:

```typescript
class Perro {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKCmAnRB7aBvAUNHA7FAtgEaLwBc0EALogJa4DmA3Njq9MCrtYgK7BUUiABT5ipCj3oMAlBnY5oVABa0IAOjEl40ALzQtpFooC+mE0A)!

Agreguémosle una propiedad a `Dice` llamada `sides` que será del tipo `number`.

### Adaptar la función `value`

En la lección anterior habíamos programado nuestro `Dice` para que tirase al azar un número entre 1 y 6 y lo guardará en `value`. Ahora lo vamos a adaptar para que acepte entre 1 y el número de lados dados, usando la palabra clave `this`.

## 03. Crédito extra

### Propiedades public y private

En clases de TypeScript, podemos tener propiedades públicas y privadas usando las palabras claves `public` y `private`. Volvámos a nuestro ejemplo de la clase `Perro`:

```typescript
class Perro {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKCmAnRB7aBvAUNHA7FAtgEaLwBc0EALogJa4DmA3Njq9MCrtYgK7BUUiABT5ipCj3oMAlBnY5oVABa0IAOjEl40ALzQtpFooC+mE0A)!

Cambiémos el código para que `nombre` sea una propiedad pública:

```typescript
class Perro {
  constructor(public nombre: string) {}
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKCmAnRB7aBvAUNHwUDsIAXRAV2CJUQAoAHUgIxAEthp8UBbBxeALmjFEzfAHMAlBgC+mKUA)!

Este es equivalente al anterior

¡Se puede hacer con elementos privados tambien!

Tratemos de cambiar la propiedad `sides` de la clase `Dice` a privada.

En la lección anterior habíamos programado nuestro
`Dice` para que tirase al azar un número entre 1 y 6 y
lo guardará en `value`.

Ahora lo vamos a adaptar para
que acepte entre 1 y el número de caras, usando
la palabra clave `this`.

### Reflexiones

- ¿Qué beneficio hay en que una propiedad sea pública?
