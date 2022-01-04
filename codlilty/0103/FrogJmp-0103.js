
const X = 10;
const Y = 85;
const D = 30;

function solution(X, Y, D) {
  let result = 0;
  result = (Y - X) / D;
  return Math.ceil(result);
}
console.log(solution(X, Y, D));

