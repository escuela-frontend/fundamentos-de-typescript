# Lección 1 - Instalar TypeScript en una base de código JavaScript

## Conceptos Importantes

TypeScript es un lenguaje de programación de código abierto que extiende las capacidades de JavaScript, usado para desarrollar aplicaciones modernas y seguras. Fundamentalmente, TypeScript es JavaScript con adiciones:

- Orientado a objectos
- Tipos estáticos
- Funciones genéricas
- Verificación de tipos
- Clases abstractas

**Por qué usar TypeScript:**

- Agregar una herramienta más a nuestro juego tiene que considerarse cuidadósamente. Si no podemos justificar esta herramienta, capaz que no valga la pena usarla.

- Por este motivo vamos a examinar los beneficios de TypeScript. Una de los aspectos más importantes de TypeScript es que es un superconjunto de JavaScript. ¿Qué quiere decir esto?

- Tódo el código que escribimos en JavaScript también es código TypeScript válido. O sea, el conocimiento de JavaScript es un requerimiento para aprender TypeScript.

![Imagen demostrando el logo de TypeScript como superconjunto al lado del logo de JavaScript](https://user-images.githubusercontent.com/656318/170575087-a148f14b-f1b6-4c8d-b9e7-80db7acb7def.jpg)

**Pero entonces ¿qué es lo que aporta TypeScript?**

- Tipos Estrictos: No solo se puede trabajar con tipos en TypeScript tal como en JavaScript. Una variable de tipo `string` siempre será `string` y asignarle ese tipo nos garantiza que no será accidentalmente de otro tipo.

**¿Dónde puedo usar TypeScript?**

- TypeScript se compila a JavaScript y puede ser usada en cualquier aplicación que se escriba con JavaScript.

![Imagen demostrando el logo de TypeScript moviendose hacia un compilador y de ahí a el logo de JavaScript](https://user-images.githubusercontent.com/656318/151954144-faa78375-20f1-4d49-b7d6-fd09e784d562.png)

**¿Puedo usar librerías existentes de JavaScript con TypeScript?**

- ¡Por supuesto! Ya que TypeScript es un superconjunto de JavaScript, puedes usar librerías escritas originalmente para JavaScript. Es más, muchas tienen sus archivos DTS `d.ts`, que agregan capacidades especificas para TypeScript.


## Ejercicio

En esta unidad vamos a convertir una aplicación de React escrita con JavaScript a TypeScript. ¡Ojo! no es necesario conocer completamente React para este curso. Si deseas aprender más de React, te recomiendo el [maravilloso curso de Matías en la Escuela Frontend](https://www.escuelafrontend.com/react). 


Nuestra app se llama "Palabras Amables". Puedo usar esta para poder anotar y acordarme de las cosas lindas que se me dicen.Esta aplicación fué creada con [`create-react-app`](https://create-react-app.dev/) una herramienta para autogenerar aplicaciones React.

![image](https://user-images.githubusercontent.com/656318/152138927-8c031cef-a2b5-4d79-87e0-b028da9514c2.png)

Tu desafío es instalar lo siguiente en el proyecto usando `npm`.

- `typescript` ¡Es el paquete más importante que estamos instalando! Trae toda la funcionalidad y compilador para TypeScript.

- `@types/node` [Definiciones de tipos](https://github.com/ramonh/ts-course-draft/tree/main/leccion-00-como-funciona-typescript#puedo-usar-librer%C3%ADas-existentes-de-javascript-con-typescript) para Node.js

- `@types/react` [Definiciones de tipos](https://github.com/ramonh/ts-course-draft/tree/main/leccion-00-como-funciona-typescript#puedo-usar-librer%C3%ADas-existentes-de-javascript-con-typescript) para React.js

- `@types/react-dom` [Definiciones de tipos](https://github.com/ramonh/ts-course-draft/tree/main/leccion-00-como-funciona-typescript#puedo-usar-librer%C3%ADas-existentes-de-javascript-con-typescript) para `react-dom`.

Y reflexiones en lo siguiente: 

- Instalamos TypeScript, ¿pero lo estamos usando?
- ¿Por qué tantos paquetes de `npm`?
- ¿Por qué instalamos los paquetes de TypeScript con `--save-dev`?

Es importante tener en cuenta que podemos autogenerar una aplicación con TypeScript, sin embargo, el propósito aqui es añadirselo a una existente. Tras instalar los paquetes, echa a andar la aplicación con el siguente comando:

```bash
$ npm run dev
```

¡Ojo! Que los vamos a instalar con la opción `--save-dev`
