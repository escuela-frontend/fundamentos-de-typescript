# Lección 10: Guardias de Tipos

¡A continuación, vamos a agregarle aún más seguridad a nuestra aplicación!

Vamos a aprender sobre propiedades opcionales, tipos unión e intersección y guardias de tipos.

## 01. Conceptos Esenciales

### ¿Qué son propiedades opcionales?

TypeScript nos permite declarar propiedades que posiblemente no existan al inicializarse. Por ejemplo, en nuestra clase `Persona`:

```typescript
class Persona {
   edad?: number;
   
   constructor(public nombre: string) {}
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKCmAnCB7AdmaBvAUNf8AJmIQPwBc0aArgLYBGSA3Hvq9MOhAC6LXDcUiABQAHavRABLYFRQNE8Sj0RS0AcwCU2AL44dQA)!

Aquí podemos ver que la clase tiene una propiedad `nombre`, pero la de `edad` tiene un signo de interrogación. Esto quiere decir que es una propiedad opcional. Puede ser de tipo `number` o `undefined`. O sea, si creamos una instancia de `Persona`, no requiere que se defina una edad. Por ejemplo:

```typescript 
const humano: Persona = new Persona("Mirabel");
console.log(humano.edad < 100); // => Object is possibly 'undefined'.
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKCmAnCB7AdmaBvAUNf8AJmIQPwBc0aArgLYBGSA3Hvq9MOhAC6LXDcUiABQAHavRABLYFRQNE8Sj0RS0AcwCU2AL449OTmh7QAFnTBoUlBMnSYAvFXgB3OElQZhAIgCyUxDBGEG9NFiNUEHgAOhAUdWFzWksUaKISaAAeaABGAAY8sOggA)!

Este error nos indica que tenemos que asegurarnos que `humano.edad` tenga un valor. 

### Guardias de tipos

Volvamos a nuestro ejemplo de chequear que Mirabel tenga menos de 100 años de edad. Podemos usar una guardia de tipo, o sea che

Bueno además permitirnos tener esa opcionalidad, también nos protegemos al usar estas propiedades:

```typescript
if (humano.edad) {
   console.log(humano.edad < 100); // => 15
}
```

> ✨ ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKCmAnCB7AdmaBvAUNf8AJmIQPwBc0aArgLYBGSA3Hvq9MOhAC6LXDcUiABQAHavRABLYFRQNE8Sj0RS0AcwCU2AL449OTmh7QAFnTBoUlBMnSYAvFXgB3OElQZhAIgCyUxDBGEG9NFikAM2hhc1pLFAA6IhJtXHwOLhQQeASQFHUYiysk4kJoAB5oAEYABhqw-SA)!

Con esto, podemos tener por seguro que la edad se haya definido.

### ¿Qué ha cambiado en esta lección?

Lo principal se encuentra en `./src/types/Dice.ts` en la línea 2:

```typescript
face?: Face;
```

Si tratamos de construir la aplicación con el comando:

     $ npm run build

Veremos que falla con un error:

```bash
> dice-game@0.0.0 build
> vue-tsc --noEmit && vite build

src/types/Dice.ts:12:12 - error TS2532: Object is possibly 'undefined'.

12     return this.face.value();
              ~~~~~~~~

Found 1 error.
```

## 02. Desafío

En esta lección, vamos a arreglar nuestra aplicación usando una guardia de tipo.

### ¿Qué pasa si no hay lado de dado?

En el caso donde `face` sea `undefined`, lanzemos un error que diga "Imposible no tener lado de dado". Lanzar un error es igual que en JavaScript:

```typescript
throw new Error(message);
```

## Crédito extra

¡Pongámos nuestra nueva propiedad opcional en práctica!

Cambiemos la firma de nuestra función `faceForValue` en la línea 18:

```typescript
  private faceForValue(value: number): Face | undefined {
```

El valor de retorno de `faceForValue` ahora puede ser de tipo `Face` o `undefined`. Esto se llama un **tipo unión**.

Ahora podemos cambiarlo para que el `switch` por defecto retorne un `undefined`.

### Reflexiones

¿De qué nos sirven las guardias de tipos?
