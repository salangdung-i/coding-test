const A = [2, 3, 1, 5];
function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });

  for (i = 1; i < A.length + 1; i++) {
    if (A[i - 1] != i) {
      return i;
    }
  }
  return A.length + 1;
}

console.log(solution(A));
