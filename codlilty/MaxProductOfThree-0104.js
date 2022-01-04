// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const A = [-3, 1, 2, -2, 5, 6];
function solution(A) {
  const N = A.length;
  const sortA = A.sort((a, b) => a - b);

  let left, right, tirple;
  console.log(sortA);

  if (sortA[N - 1] < 0) {
    tirple = sortA[N - 1] * sortA[N - 2] * sortA[N - 3];
  } else {
    left = sortA[0] * sortA[1] * sortA[N - 1];
    right = sortA[N - 1] * sortA[N - 2] * sortA[N - 3];
    tirple = left > right ? left : right;
  }

  return tirple;
}

console.log(solution(A));