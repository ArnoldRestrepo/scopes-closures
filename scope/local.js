function helloWorld() {
  const world = 'Hello World';
  console.log(world);
}
helloWorld();

var scope = 'I am just a Global';

const functionScope = () => {
  const scope = 'I am just a Local';

  const func = () => {
    return scope;
  };

  console.log(func());
};

functionScope();
console.log(scope);
