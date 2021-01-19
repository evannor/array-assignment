// Question 1
const arrayOfNums = [1, 3, 6.03, 4.25, 12];

const greaterThanFive = arrayOfNums.filter((num) => num > 5);
console.log(greaterThanFive);

const mappedNums = arrayOfNums.map((num) => ({ value: num }));
console.log(mappedNums);

const multiplyNums = arrayOfNums.reduce((prevVal, curVal) => prevVal * curVal);
console.log(multiplyNums);

// Question 2
const findMax = (...args) => {
  let max = 0;
  let min;
  // console.log(args);
  args.map((num) => {
    // console.log(num);
    num.filter((entry) => {
      if (entry > max) {
        max = entry;
      }
      // console.log(max);
    });
  });
  return max;
};
console.log(findMax(arrayOfNums));

// Question 3

// Question 4
const newList = new Set("Robert", { work: "cabinet maker", age: 64 });
console.log(newList);
