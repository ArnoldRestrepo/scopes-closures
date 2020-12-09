var hello = 'Hello World';
// !Mala práctica el volver declarar
var hello = 'Hello World +';
var hello2 = 'Hola en Español';

function anotherFunction() {
  console.log(hello);
  console.log(hello);
  console.log(hello2);
}

anotherFunction();

// !Mala Práctica
const helloWorld = () => {
  globalVar = 'Hello World';
};

helloWorld();
console.log(globalVar);
