function solution(nums) {
  var answer = 0;
  let sumNum = 0;

  //1. 3개 뽑아서 더한거 배열에 넣기 
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumNum = nums[i] + nums[j] + nums[k];

        //2. 소수인지 확인
        if (primecheck(sumNum)) answer++;
      }
    }
  }

  return answer;
}

function minority(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num > 1;
}

function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    console.log(`${i}, ${Math.sqrt(n)}`)
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

const nums = [1, 2, 3, 4];
solution(nums);
