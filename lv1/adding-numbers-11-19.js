function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
  }
  console.log(answer)
  return answer;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];

solution(absolutes, signs);
console.log('result : 9');
