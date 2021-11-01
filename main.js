function solution(lottos, win_nums) {
    var answer = [];
    
    // 1. 내가 입력한 로또번호와 정답 로또 번호의 갯수를 센다. 
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    // 2. 내가 입력한 로또 번호에서 0의 갯수를 센다.(0은 알아볼 수 없는 숫자를 의미한다고 했음으로)
    const zero = lottos.filter(lotto => lotto == 0).length;
    
    console.log(`correct: ${correct}, zero: ${zero}`);

    // 3. 순위를 정한다. 
    // 3-1.최소 순위는 7-맞은로또의 수
    // case1) 맞은수가 0,1일떄 6위
    // case2) 1보다 큰수일때 6개 다맞추면 1위임으로 7-6= 1 1위가 된다.  
    let rank_min = 7 - correct >= 6 ? 6 : 7 - correct;

    // 3-2.최고 순위 
    // 최소순위에서 0의 갯수를 빼면 최고 순위 
    // 예) 맞은 로또의 수가 2일때 7-2 = 5위이다.
    // (이떄 순위는 일부지워진, 0으로 대체한 것을 제외한 것임으로) 0의 갯수를 뺴맨 최고 순위를 알수있다.
    let rank_max = rank_min - zero < 1 ? 1 : rank_min - zero;

    console.log(`rank_max: ${rank_max}, rank_min: ${rank_min}`);
    // 결과값을 answer에 넘겨준다. 
    answer = [rank_max, rank_min];
    return answer;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums =[31, 10, 45, 1, 6, 19];	

solution(lottos, win_nums);