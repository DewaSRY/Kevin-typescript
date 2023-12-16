import { describe, expect, it } from "vitest";
import RandomsNumber from "@/app/RandomsNumber.ts";

describe("RandomsNumber", () => {
  let insideRange = (num: number, maxNumber: number) => {
    if (num === 0) return true;
    return num >= -1 && num <= maxNumber - 1;
  };

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
});
