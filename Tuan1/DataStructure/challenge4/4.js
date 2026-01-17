const handleString = (string) => {
  while (string.includes('_')) {
    let idx = string.findIndex('_');
    let next = string[idx + 1];
    if (idx + 1 < string.length) {
      if (next >= 97 && next <= 121) {
        next = next - 32;
      }
    }
    for (let i = idx; i < string.length; i++) {
      string[i] = string[i + 1];
    }
  }
};

const test = handleString('underscore_case');
console.log(test);
