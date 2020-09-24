//nums = array of integers
// pair (i,j) is called good IF nms[i] == nums[j] AND i < j
// Return the number of good pairs

const numIdenticalPairs = (nums) => {
  const map = new Map();
  let count = 0;
  for (n of nums) {
    if (map.has(n)) {
      count += map.get(n);
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, map.get(n) || 1);
    }
  }
  return count;
};

// Testcase [1,2,3,1,1,3]
// Runtime: 76 ms
