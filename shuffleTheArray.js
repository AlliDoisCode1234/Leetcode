// array of nums - (2n) elements [x1,x2,...,xn,y1,y2,...,yn]
// return array in form of [x1,y1,x2,y2,...,xn,yn]

// Shuffle like a deck of cards

// Example:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffle = (nums, n) => {
  const results = [];
  let a = n;
  for (let i = 0; i < n; i++) {
    results.push(nums[i]);
    results.push(nums[a]);
    a++;
  }
  return results;
};

// Testcase:
// [2,5,1,3,4,7]
// 3
