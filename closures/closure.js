// Sin Closures
const moneyBox = (coins) => {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox $${saveCoins}`);
};

moneyBox(200);
moneyBox(500);

// Con Closures
const moneyBox = () => {
  let saveCoins = 0;

  const countCoins = function (coins) {
    saveCoins += coins;
    console.log(`MoneyBox $${saveCoins}`);
  };

  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(20);
myMoneyBox(200);
myMoneyBox(2500);
