const data = [
  {
    id: 1,
    name: 'dsadas',
    grade: 8,
  },
  {
    id: 2,
    name: 'jhgjhg',
    grade: 2,
  },
  {
    id: 3,
    name: 'dsadas',
    grade: 9,
  },
  {
    id: 4,
    name: 'dsadas',
    grade: 5,
  },
];

Array.prototype.newFuntion = function (callBack) {
  const newArr = [];
  for (var i = 0; i < this.length; i++) {
    const currObj = this[i];
    newArr.push(callBack(currObj));
  }

  return newArr;
};

const test = data.newFuntion((item) => {
  return item.grade > 8 ? item.grade * 2 : item.grade;
});

console.log(test);
