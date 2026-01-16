const printForecast = (arr) => {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    // string.concat(+'... ' + arr[i] + ' độ C in ' + i + ' days ');
    string = string.concat(`...${arr[i]} độ C in ${i + 1} days \n`);
  }

  return string;
};

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

console.log('Test1');
console.log(printForecast(test1));
console.log('Test2');

console.log(printForecast(test2));
