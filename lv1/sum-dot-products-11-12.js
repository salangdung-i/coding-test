const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];


function solution(a, b) {
  var answer = 0;

  return a.reduce((acc, x, i) => acc += a[i] * b[i], 0);
  // console.log(a.reduce((acc, _, i) => { acc += a[i] * b[i] }, 0));
  // console.log(answer);
  // return answer;
}

console.log(solution(a, b));
