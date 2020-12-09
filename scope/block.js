const fruits = () => {
  if (true) {
    var fruit1 = 'apple';
    const fruit2 = 'banana';
    let fruit3 = 'orange';
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
};

fruits();

const bucle = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

bucle();
