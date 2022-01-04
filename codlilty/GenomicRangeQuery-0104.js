const S = 'CAGCCTA';
const P = [2, 5, 0];
const Q = [4, 5, 6];

function solution(S, P, Q) {
  let result = new Array();

  for (i in P) {
    let p = P[i];
    let q = Q[i];
    let temp = S.slice(p, q + 1);
    console.log(temp);
    if (temp.indexOf('A') !== -1) {
      result.push(1);
    } else if (temp.indexOf('C') !== -1) {
      result.push(2);
    } else if (temp.indexOf('G') !== -1) {
      result.push(3);
    } else if (temp.indexOf('T') !== -1) {
      result.push(4);
    }
  }

  return result;
}

console.log(solution(S, P, Q));

  // for (i in S) {
  //   switch (S[i]) {
  //     case 'A':
  //       arr.push(1);
  //       break;
  //     case 'C':
  //       arr.push(2);
  //       break;
  //     case 'G':
  //       arr.push(3);
  //       break;
  //     case 'T':
  //       arr.push(4);
  //       break;
  //   }

