// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// 오름차순으로 돌리기
// 한번에 2개의 숫자를 스위칭할 수 있음. 
// 최소로 swap 하도록.
// 서로 스위칭하는 숫자가 중요한 것 같은데

function minimumSwaps(arr) {
  // 최대값 .. 또는 최소 1 우선?
  // 중간점을 기준으로 절반을 나눠서?

  let count = 0;
  // 우선 제 자리 (Index-1)에 위치하지 않으면 서로 스위칭하는 가장 단순한 아이디어로 시작
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) { // * if문이 아닌 while loop
      let temp = arr[i];
      arr[i] = arr[temp - 1]; // index 1차이 나므로
      arr[temp-1] = temp; // arr[i] 
      count++;
    }
  }
  return count;
}

console.log(minimumSwaps([4, 3, 1, 2])); // 3
console.log(minimumSwaps([2, 3, 4, 1, 5])); // 3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // 3