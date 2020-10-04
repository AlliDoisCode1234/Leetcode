let kidsWithCandies = function (candies, extraCandies) {
  const maxNum = candies.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
  }, candies[0]);
  const answer = [];
  const length = candies.length;
  for (let i = 0; i < length; i++) {
    answer.push(candies[i] + extraCandies >= maxNum);
  }
  return answer;
};

// Testcase
// [2,3,5,1,3]
// 3
