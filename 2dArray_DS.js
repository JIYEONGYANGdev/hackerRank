// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// 6*6 매트릭스
// -9<= arr[i][j] <= 9
// 0<= i, j, <= 5

function hourglassSum(arr) {
  // 2차원 배열에서 나올 수 있는 모든 모래시계 모양 속 값의 합
  // 모든 값을 배열로 우선 찾아서 저장해두고 그 중 최대값 반환
  // or 바로 최대값 구하기
  
  // 3부분으로 구조분해 하거나
  
  // 3줄이니까 for loop 
  
  // 대조 최대값 설정
  // let max = Number.MIN_SAFE_INTEGER; 
  // 여기서는 -9로 3*3(가운데 줄- 가운데 한 칸만 합. 모래시계모양이니까) 이 가득했을 때 합계가 최소이므로  -9*7 = -63 보다 하나 작은 -64 으로 설정해도 무방
  
  let max = -64;
  
  // 시간복잡도 O(n*m) 이중 for loop
  for (let i = 0; i <= 3; i++) { // 가장 바깥 Loop => Hourglass의 맨 윗줄 (index j =3까지가 최대)
    for (let j = 0; j <= 3; j++) { // 세로 인덱스 값
      let sumOfTop = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]; // 첫 줄
      let sumOfMid = arr[i + 1][j + 1];
      let sumOfBottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      let sum = sumOfTop + sumOfMid + sumOfBottom;

      if (max < sum) {
        max = sum;
      }
    }
  }
  
  return max;
}

console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0] ,
  [0, 0, 1, 2, 4, 0]
])) // 19
console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
])) // 13
console.log(hourglassSum([
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
])); // 28