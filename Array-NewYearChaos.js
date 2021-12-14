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

function minimumBribes(q) {
  // 원래 사람 순서를 파악 하기 위해 max 값?
  let origin = Array(Math.max(...q)).fill(0)
  for (let i = 1; i < origin.length; i++) {
    origin[i] = i;  }
  console.log(origin)

}

console.log(minimumBribes([2, 1, 5, 3, 4])); // 3
console.log(minimumBribes([2, 5, 1, 3, 4])); // 'Too chaotic'