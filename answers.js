// Question 1
const numbers = [1, 2, 3, 4, 5, 6];

const numsGreater5 = numbers.filter((val) => val > 5);
console.log(numsGreater5);

const mapNums = numbers.map((val) => ({ num: val }));
console.log(mapNums);

const multiply = numbers.reduce((curRes, curVal) => {
  return curVal * curRes;
}, 1);
console.log(multiply);

// Question 2
function findMaximum(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMaximum(...numbers));
console.log(findMaximum(...arrayOfNums));

// Question 3
function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    } else if (num < curMin) {
      curMin = num;
    }
  }
  return [curMax, curMin];
}

const [max, min] = findMinMax(...numbers);
console.log(min, max);
const [maxb, mina] = findMinMax(...arrayOfNums);
console.log(mina, maxb);

// Question 4
const howdySet = new Set();
howdySet.add(-5);
howdySet.add(6354);
howdySet.add(56);
howdySet.add(-5);

console.log(howdySet);
