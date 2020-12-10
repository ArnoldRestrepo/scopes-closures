# Curso de Scopes y Closures

## Scope:

Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

### Global Scope

No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

- Con var podemos re-asignar una variable pero es una mala práctica.

- Con let y const no podemos, aparecerá un error.

- Es una mala práctica crear una variable sin las palabras reservadas: var, let y const. Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.

- La doble asignación de una variable también es una mala práctica.

### Local Scope

Se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

### Lexical Scope / Ámbito Léxico

Se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.

El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.

### Function Scope

Usamos la declaración de variables dentro de un Scope Local en el ámbito de una función

- Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

- Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado:

```javascript
let fruit = 'apple';
fruit = 'banana';

console.log(fruit); // banana
```

- Las variables escritas con la palabra clave const no pueden ser redeclaradas o reasignadas, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.

### Block Scope

Usamos la declaración de variables usando el Scope Local dentro de un bloque de código en el ámbito de una función. No podemos llamar o ejecutar las variables por fuera de ese bloque a menos que sea con var lo cual es una mala práctica.

## Closures

Un closure es una función interna que tiene como acceso a el alcance de su función externa incluso después de que la función externa ejecute un return.

Un closure es un tipo especial de objeto que combina dos cosas: **una función y el ámbito en que se creo la función**. Esto significa que puede recordar, acceder y leer argumentos de su función externa, incluso después de que esta halla finalizado.

Pueden ser: **una función o un objeto de funciones**
