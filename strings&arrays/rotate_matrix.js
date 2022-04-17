const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

/*
   0:0 0:1 0:2     0:2 1:2 2:2
   1:0 1:1 1:2 =>  0:1 1:1 2:1
   2:0 2:1 2:2     0:1 1:0 2:0
*/

function rotate(source) {
    const rotated = source[0].map(_ => []);

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].length; j++) {
            rotated[j][source.length - 1 - i] = source[i][j];
        }
    }

    return rotated;
};

function rotate180(source) {
    return rotate(rotate(source));
}

function rotate180(source) {
    return rotate(rotate180(source));
}

function print(array) {
    array.forEach(i => console.log(i);
};

print(rotate(matrix));
print(rotate180(matrix));
print(rotate270(matrix));