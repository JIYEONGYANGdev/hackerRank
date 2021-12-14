// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


/*
# Input Format

The first line contains two space-separated integers n and , d the size of a and the number of left rotations.
The second line contains n space-separated integers, each an a[i].
*/
/*
* Complete the 'rotLeft' function below.

* The function is expected to return an INTEGER_ARRAY.
* The function accepts following parameters:
*  1. INTEGER_ARRAY a
*  2. INTEGER d
*/

// 2left rotation : 인덱스 -2 로 shift, index [0] => [arr.length-2] 로 순환 circular
// left rotaion 후 update된 array 반환

function rotLeft(a, d) {
  // d_index - a < 0
  let result = [];
  for (let i = 0; i < d.length; i++) {
    if (i < a) {
      result[d.length-Math.abs(i-a)] = d[i]
    }
    else {
      result[i - a] = d[i];
    }
  }
  return result;
}

console.log(rotLeft( 4,
  [1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]

console.log(rotLeft(10,
  [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]));
// 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77

console.log(rotLeft(13,
  [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97]));
//87 97 33 47 70 37 8 53 13 93 71 72 51 100 60
