const correspondingTip = (billValue) => {
  if (billValue < 0) return -1;

  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

// 1.
console.log(
  'Testing corresponding tip with the 100 bill: Tip value = ' +
    correspondingTip(100)
);

// 2.
const bills = [125, 555, 44];

const tips = bills.map(correspondingTip);
console.log('Tips array base on bills array ' + "[" +bills + "]");
console.log(tips);

const total = bills.map((bill) => {
  return bill + correspondingTip(bill);
});

console.log('Total array base on bills array and its tips');
console.log(total);
