function solution(stones, k) {
  var answer = '';
  let array = [];
  for (let i = 0; i < stones.length; i++) {
    array.push(abs(tones[i] - k));
    console.log(array);
  }

  return answer;
}

const stones = [1, 3, 2];
const k = 3;

solution(stones, k);
console.log('result : 202');