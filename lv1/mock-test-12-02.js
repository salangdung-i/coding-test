function solution(answers) {
  var answer = [];
  const check2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const check3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let student1 = [];
  let student2 = [];
  let student3 = [];

  //학생의 찍은 번호 셋팅
  for (let i = 1; i <= answers.length; i++) {
    student1.push(i % 5 == 0 ? 5 : i % 5);
    student2.push(check2[(i - 1) % 8]);
    student3.push(check3[(i - 1) % 10]);
  }

  // 답안체크 
  let score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (student1[i] == answers[i]) score[0] += 1;
    if (student2[i] == answers[i]) score[1] += 1;
    if (student3[i] == answers[i]) score[2] += 1;
  }

  //순위 비교하는 구문
  if (isNaN(Math.max(score))) {
    // console.log('ssss');
    let winner = [];
    const maxNum = Math.max(...score);
    for (let i = 0; i < 3; i++) {

      if (score[i] == maxNum) {
        answer.push(i + 1);
      }
    }
  } else {
    answer = score.indexOf(Math.max(score)) + 1;
  }
  return answer;
}

const answers = [1, 3, 2, 4, 2];

console.log(solution(answers));