// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [10, 2, 5, 1, 8, 20];
// const A = [10, 50, 5, 1];
function solution(A) {
  const N = A.length;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        if (A[i] + A[j] - A[k] > 0 && A[i] - A[j] + A[k] > 0 && A[j] + A[k] + - A[i] > 0) {
          return 1;
        }
      }
    }
  }

  return 0;
}

function solution2(A) {
  const N = A.length;
  const arr = A.sort((a, b) => a - b);

  for (let i = 0; i < N - 2; i++) {
    if (arr[i] < 0) {
      continue;
    }
    if (arr[i] + arr[i + 1] > arr[i + 2]) {
      return 1;
    }
  }
  return 0;
}

// console.log(solution(A));
console.log(solution2(A));