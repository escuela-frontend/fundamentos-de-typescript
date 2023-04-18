# Lección 07: Clases

¡Felicidades! Has terminado la primera unidad de TypeScript IRL. Ahora verémos la segunda:

## Sección 2: Continuar desarrollando una aplicación TypeScript existente

Nuestra aplicación esta vez es un juego de dados. Si te sale menos de 21, ¡ganaste! 

![Cáptura de la aplicación de jugar al 21, que muestra los cuatro dados, el valor del ganador y el botón de tirar los dados de nuevo](https://user-images.githubusercontent.com/656318/152707507-1e6ae41f-d36f-4505-a4df-7d6d2f97dfc1.png)

> Ojo: Esta app está escrita con [Vue.js](https://vuejs.org/). Tal como en la primera unidad, no es necesario conocer Vue completamente para completar este workshop. ¡Te guiaremos por todo lo necesario para triunfar!

## 01. Conceptos Esenciales

Igual que en la primera unidad, puedes echar a andar la app con los siguientes comandos:

    $ npm install
    $ npm run dev
    
Sin embargo, al tratar de abrir `http://localhost:3000`, ¡verás que nuestra app no funciona!

En `./src/App.vue`, en las lineas 6-8, podemos ver que inicializamos nuestro estado con cuatro instancias de `Dice`:

```typescript
import Dice from './types/Dice'
const roll = () => Array.from({length: 4}, () => new Dice());
const dice = ref(roll());
```

Y en la línea 14, vemos que un `Dice` tiene una función `value()`:

```vue
   <Die v-for="die in dice" :faceValue="die.value()"/>
```

Sin embargo, si miramos en `./src/types/Dice.ts`, ¡vemos que está vacio!

### ¿Cómo se ven las clases en TypeScript?

Casi igual que en JavaScript:

```typescript

class Perro {
    nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    
    ladrar() {
        console.log("¡Guau guau!");
    }
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?ssl=11&ssc=2&pln=1&pc=1#code/MYGwhgzhAEAKCmAnRB7aBvAUNH0B2KAtgEaLwBc0EALogJZ4DmA3NrmzsCnjYgK7BqKRAAoCJMpV4NGASgwdcOagAs6EAHTjS8aAF58RHayUBfRYvAATRGFHysSpVx4oQ8DSBSMRAIgCFAOJ8YHzQjCF8AIS+sia45qZAA)!

## 02. Desafío

En esta lección vamos a declarar y a ultilizar nuestra primera clase con TypeScript. Verémos que son muy similares a las de JavaScript.

### La clase `Dice`

En `./src/types/Dice.ts`, exportaremos una nueva clase llamada `Dice`.

Tendrá una función llamada `value` que retornará un número [al azar](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random) entre 1 y 6. ¡Tal como un dado de verdad!

Echa a andar el app con `npm run dev`. ¡Si todo salió bien podrás empezar a jugar a los dados!

## 03. Crédito extra

### Reflexiones

- ¿Qué tipo de retorno tendrá `value()`?
