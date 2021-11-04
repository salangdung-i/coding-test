function solution(numbers, hand) {
    var answer = '';
    // 1. numbers을 순차적으로 돌린다. 
    for(let i = 0;i < numbers.length;i++){
        // 2. R(3,6,9,#) L(1,4,7,*) 케이스를 나눈다. 
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7 || numbers[i] === '*' ) {
            answer += 'L';
        } else if(numbers[i] == 3 || numbers[i] == 3 || numbers[i] == 3 || numbers[i] ==  ) {
            answer += 'R';
        } else {
            // 3. 나머지 케이스를 나눈다. 
            // 여기서 막혔다. 
        }
    }

    console.log(answer);
    return answer;
}