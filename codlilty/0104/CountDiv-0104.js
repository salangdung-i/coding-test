const A = 0;
const B = 0;
const K = 11;
function solution(A, B, K) {
  let result = 0;

  if (A == B) {
    return 0;
  }

  result = Math.floor(B / K) - Math.round(A / K) + 1;
  return result;

}

function solution2(A, B, K) {
  let result = 0;
  result = parseInt(B / K) - parseInt(A / K);

  if (A % K === 0) result += 1;
  return result;
}

console.log(solution(A, B, K));

// console.log(solution2(A, B, K));
