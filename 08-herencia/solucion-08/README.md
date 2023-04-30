# Lección 8 - Herencia

En esta lección vamos a crear una jerarquía de distintas caras del dados y asignarselos a un `Dice`, encapsulando y grabando su valor.

## 1. Conceptos Esenciales

### ¿Qué son clases abstractas?

Capáz que hayas visto clases abstractas en otros lenguajes de programación, pero por si no:

Las clases abstractas son usadas para que no se puedan instanciar. Aquí tenemos un ejemplo de una clase abstracta:

```typescript
abstract class Animal {
  constructor(public nombre: string) {}
}
```

> ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/IYIwzgLgTsDGEAJYBthjAgggOwJYFthkEBvAKASQHttIoBXeKqACgAd6RldYFsr8IKAFMAXAjq5sAcwCUpAL5kFQA)!

Si tratamos de inicializar un `Animal`, TypeScript nos alega:

`Cannot create an instance of an abstract class.`

Y bueno, ahora tenemos una clase que no podemos instanciar. ¿De qué sirve?

### Las clases son súpertipos

Podemos extender nuestra clase `Animal`:

```typescript
class Perro extends Animal {
  ladrar() {
      console.log(`¡Guau guau!`);
  }
}

class Pollito extends Animal {
  twittear() {
      console.log(`¡Pío pío!`);
  }
}
```

> ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/IYIwzgLgTsDGEAJYBthjAgggOwJYFthkEBvAKASQHttIoBXeKqACgAd6RldYFsr8IKAFMAXAjq5sAcwCUpAL5klZFGgwAFYVChUEwgB4Rh2ACYYcBIqQoJUpmK3nlKr6rSrJhAOmRVpLAAGAIUA4vTA9AjSEfQAhIGyANy2Sipq6AgantwQeobGZhZ4hMQuCBAA7rgQxsBONm6UsDRgnj5+ASEaALd6bH0JyanKQA)!

### Funciones abstractas

También podemos declarar funciones abstractas dentro de una clase abstracta, lo cual requirere que las subclases las implementen:

```typescript
abstract class Animal {
  constructor(public nombre: string) {}
  abstract comer(comida: string): void;
}
```

¡Se ve bién! Sin embargo, crear una subclase que hereda de `Animal` nos muestra un nuevo error:

`Non-abstract class 'Perro' does not implement inherited abstract member 'comer' from class 'Animal'`.

Esto quiere decir que tenemos que implementar esta función:

```typescript
class Perro extends Animal {
  ladrar() {
    console.log(`¡Guau guau!`);
  }
  comer(comida: string): void {
    console.log(`¡Que rico comer ${comida}!`);
  }
}
```

> ¡Prueba este código en [este playground](https://www.typescriptlang.org/play?#code/IYIwzgLgTsDGEAJYBthjAgggOwJYFthkEBvAKASQHttIoBXeKqACgAd6RldYFsr8IKAFMAXAjq5sAcwCUpAL4UEoOnESwBw1pvy4AJsHGSZs8QDcqBgNxklZFGgwAFbVCoJhADwjDs+jBwCIlJlVH0YVnlySkpNWipkYQA6ZCppFgADAEKAcXpgegRpAvoAQkzZW0olOK0dAQMjCWgpOQsrfVDY6gSk1PSs7IBFemEEKB4PXW0EABISXSaFCqrlJXsgA)!

**¿Qué ha cambiado en esta lección?**

¡Ha cambiado bastante el archivo `./src/types/Dice.ts`! En la línea 2, encontrarás una nueva propiedad:

```typescript
face: Face;
```

También verás que cambió el constructor y el `value`, además agregamos `faceForValue`:

```typescript
  constructor(sides: number = 6) {
    let value: number = Math.floor(Math.random() * sides) + 1;
    this.sides = sides;
    this.face = this.faceForValue(value);
  }

  value(): number {
    return this.face.value();
  }
  
  private faceForValue(value: number): Face {
    switch (value) {
      case 1:
        return new OneFace();
      case 2:
        return new TwoFace();
      case 3:
        return new ThreeFace();
      case 4:
        return new FourFace();
      case 5:
        return new FiveFace();
      case 6:
        return new SixFace();
      default:
        return new OneFace();
    }
  }
```


# 2. Desafío

En esta desafío, vamos a agregar una clase abstracta llamada `Face` y sus subclases:

- OneFace
- TwoFace
- ThreeFace
- FourFace
- FiveFace
- SixFace


1. Declarar clase abstracta. En `./src/types/Dice.ts`, debajo de la clase `Dice`, agrega la clase abstracta `Face` con función abstracta `value` que retorna un `number`.

2. Las subclases de `Face`. Agrega las seis subclases que mencionamos antes, cada una con una implementación de `value()` que retorna un valor correspondiente al número.

# 3. Crédito Extra

Agrega `SevenFace` y `EightFace`. ¿Qué nos falta para poder usarlos?


Seguro que podríamos haber echo esto con un gran `if` statement. ¿Cuál es la ventaja de hacerlo con herencia?
