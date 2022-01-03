const A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {


  while (A.length > 1) {
    for (let j = 1; j < A.length; j++) {
      if (A[0] == A[j]) {

        A.splice(j, 1);
        A.splice(0, 1);
      }
    }
  }
  return A[0];

}

function solution2(A) {

  let e = new Set();

  for (let i in A) {
    if (!e.has(A[i])) {
      e.add(A[i]);
    } else {
      e.delete(A[i]);
    }
  }
  const result = [...e];
  return result[0];

}

// console.log(solution(A));
console.log(solution2(A));
