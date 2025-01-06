

function findOdd(array) {
  const counts = {};

  for (const num of array) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (const key in counts) {
    const integer = counts[key];

    if (integer % 2 !== 0) {
      return Number(key);
    }
  }
};

describe("Challenge 1", () => {
  test("findOdd should find the integer that appears an odd number of times", () => {
    expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5, 6,])).toBe(5);
  });
});

// challenge 2

function sumPairs(array, result) {
  const seen = new Map();

  for (let i = 0; i < array.length; i++) {
      const numberPair = result - array[i];

      if (seen.has(numberPair)) {
          return [numberPair, array[i]];
      }

      seen.set(array[i], i);
  }

  return [0,0];
};

describe("Challeng 2", () => {
  test("sumPairs should output the sum of two numbers in an array", () => {
    expect(sumPairs([11, 3, 7, 5], 10)).toEqual([3, 7]);
    expect(sumPairs([4, 3, 2, 3, 4], 6)).toEqual([4, 2]);
    expect(sumPairs([0, 0, -2, 3], 2)).toEqual([0,0]); 
  });
});

// challenge 3

function nextLarger(int) {
  let arrayOfNumbers = int.toString().split("");

  // Find the first smaller digit from the end
  let i = arrayOfNumbers.length - 2;
  while (i >= 0 && arrayOfNumbers[i] >= arrayOfNumbers[i + 1]) {
      i--;
  }

  if (i < 0) return -1;

  // Find the next larger digit and swap them
  let n = arrayOfNumbers.length - 1;
  while (arrayOfNumbers[n] <= arrayOfNumbers[i]) {
      n--;
  }
  [arrayOfNumbers[i], arrayOfNumbers[n]] = [arrayOfNumbers[n], arrayOfNumbers[i]];

  // Sort the arrayOfNumbers 
  let left = arrayOfNumbers.slice(0, i + 1);
  let right = arrayOfNumbers.slice(i + 1).sort();

  return parseInt(left.concat(right).join(""), 10);
};

describe("Challenge 3", () => {
  test("nextLarger should take an integer and return the next largest number", () => {
    expect(nextLarger(2017)).toBe(2071);
  });
});
