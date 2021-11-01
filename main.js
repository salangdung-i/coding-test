function solution(lottos, win_nums) {
    var answer = [];
    
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    const zero = lottos.filter(lotto => lotto == 0).length;
    
    console.log(`correct: ${correct}, zero: ${zero}`);

    let rank_min = 7 - correct >= 6 ? 6 : 7 - correct;
    let rank_max = rank_min - zero < 1 ? 1 : rank_min - zero;

    console.log(`rank_max: ${rank_max}, rank_min: ${rank_min}`);

    answer = [rank_max, rank_min];
    return answer;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums =[31, 10, 45, 1, 6, 19];	

solution(lottos, win_nums);