// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

// 번호 순서대로 있는 사람들(queue)
// 앞으로 최대 2명까지 자리를 바꿀 수 있다.
// 5번이 2번 제치고, 2번 사람이 1번 자리를 제침 => 각자 2명 이하로 제친 것이므로 합해서 카운팅
// 한명이 2명을 초과해서 넘어야 하면 'Too chaotic' 반환
// * No value return, print the minimum num of swap or 'Too chaotic'

// 2nd try
// ! 뒤에서부터 돌아야 한다 ** 
// 'Too chaotic' 케이스부터 처리한다
function minimumBribes(q) {
  let count = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) >= 3) {
      // console.log('Too chaotic); return;
      return 'Too chaotic';
    }
    // 1-2 번 swap 한 경우
    for (let j = q[i] - 2; j < i; j++) { // * 현재 위치보다 1 또는 2 작은 위치에서 swap 했는지 찾기 위해 q[i] -2 부터.
      if (q[j] > q[i]) {
        count++;
      }
    }
  }
  // if(count) console.log(count);
  return count;
}

/*
function minimumBribes(q) {
  // 원래 사람 순서를 파악 하기 위해 max 값?
  // let origin = Array(Math.max(...q)).fill(0);
  // for (let i = 0; i < origin.length; i++) {
  //   origin[i] = i + 1;
  // }
  // console.log(origin)

  // 완전탐색?
  let count = 0;
  for (let i = 0; i < q.length-1; i++) {
    if (q[i] !== i + 1 && q[i] > i+1) {
      let dst = Math.abs(i + 1 - q[i]);
      if (dst <= 2) count += dst;
      else {
        return 'Too chaotic'
      }
    }
  }
  return count;

  // ! 나는 원래 자리를 제쳐진 작은 수는 무시하고 진행했는데,
  // ! swap 한 순서가 있음 이걸 유의해서 조건에 넣어야 함
}
*/

console.log(minimumBribes([2, 1, 5, 3, 4])); // 3
console.log(minimumBribes([2, 5, 1, 3, 4])); // 'Too chaotic'
console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])); // 4
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])); // 'Too chaotic'
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); // 7 <- edge case
