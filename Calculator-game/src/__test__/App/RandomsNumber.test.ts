import { describe, expect, it } from "vitest";
import RandomsNumber from "@/app/RandomsNumber.ts";

describe("RandomsNumber", () => {
  let insideRange = (num: number, maxNumber: number) => {
    if (num === 0) return true;
    return num >= -1 && num <= maxNumber - 1;
  };

  function isArrGetShuffle<T>(realArr: T[], shuffle: T[]) {
    if (realArr.length !== shuffle.length) return realArr.length;
    let matchIndex = 0;
    for (let i = 0; i < realArr.length; i++) {
      if (realArr[i] === shuffle[i]) {
        matchIndex++;
      }
    }
    return matchIndex;
  }
  it.each([
    {
      numArr: [1, 2, 3, 4, 5, 6],
    },
    {
      numArr: [1, 2, 3, 4, 5, 6],
    },
    {
      numArr: [1, 2, 3, 4, 5, 6],
    },
    {
      numArr: [1, 2, 3, 4, 5, 6],
    },
  ])("shuffle the sequents of arr $numArr", ({ numArr }) => {
    let shuffleArr = [...numArr];
    RandomsNumber.shuffle(numArr);

    let actualResult: boolean = isArrGetShuffle(numArr, shuffleArr) <= 2;
    if (!actualResult) {
      console.log(shuffleArr);
      console.log(numArr);
      expect(actualResult).toBe(true);
    }
  });

  it.each([
    {
      suite: 10,
    },
    {
      suite: 90,
    },
    {
      suite: 2,
    },
  ])("RandomsNumber generate number in range  $suite ", ({ suite }) => {
    let actual = RandomsNumber.getRandomOperation(suite);
    expect(insideRange(actual, suite)).toBeTruthy();
  });

  it.each([
    {
      suite: 10,
    },
    {
      suite: 17,
    },
    {
      suite: 2,
    },
  ])(
    "RandomsNumber generate arr number in range exclude  $suite ",
    ({ suite }) => {
      let actual = RandomsNumber.getArrOfNumbers(20, suite);
      expect(actual.includes(suite)).toBeFalsy();
    }
  );
});
