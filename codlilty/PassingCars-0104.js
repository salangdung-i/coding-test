// For example, given:

//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// the function should return 5, as explained above.

const A = [0, 1, 0, 1, 1];
function solution(A) {
  let result = 0;
  const stdA = A[0];

  while (A.indexOf(stdA) > -1) {
    A.splice(0, A.indexOf(stdA) + 1);
    result += A.filter(e => stdA != e).length;
    if (result > 1000000000) {
      return -1;
    }
  }
  return result;
}

function solution2(A) {
  let westcar = 0;
  let passCar = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    switch (A[i]) {
      case 0:
        passCar += westcar;
        break;
      case 1:
        westcar++;
        break;
    }
    if (passCar > 1000000000) {
      return -1;
    }
  }
  return passCar;
}

// console.log(solution(A));
console.log(solution2(A));