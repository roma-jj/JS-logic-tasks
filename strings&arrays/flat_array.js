function flatten(array) {
  const res = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        const flat = flatten(array[i]);
        for (let j = 0; j < flat.length; j++) {
        res.push(array[i][j]);
        }
    } else {
        res.push(array[i]);
    }
  }

  // array.toString().split(',').map(num => +num);
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]