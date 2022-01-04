// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const S = '{[()()]}';
const S1 = '({[])}';
const S2 = ')';
function solution(S) {
  let result = 0;
  let arr = new Array();
  const N = S.length;

  if (N % 2 == 1) {
    return 0;
  }

  for (let i = 0; i < N; i++) {

    if (S[i] == '{' || S[i] == '[' || S[i] == '(') {
      arr.push(S[i]);
    }

    switch (S[i]) {
      case '}':
        if (arr[arr.length - 1] == '{') {
          arr.pop();
        }
        break;
      case ')':
        if (arr[arr.length - 1] == '(') {
          arr.pop();
        }
        return 0;
        break;
      case ']':
        if (arr[arr.length - 1] == '[') {
          arr.pop();
        }
        break;
    }
  }

  result = arr.length == 0 ? 1 : 0;
  return result;
}

console.log(solution(S1));