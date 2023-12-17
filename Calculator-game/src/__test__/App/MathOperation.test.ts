import { describe, expect, it } from "vitest";
import MathOperation from "@/app/MathQuestions";
import { OperationsSign } from "@/app/MathApp";

describe("MathOperation ", () => {
  it.each([
    {
      suit: new MathOperation(
        1,
        2,
        3,
        OperationsSign.ADD,
        OperationsSign.MULTIPLY,
        6
      ),
      expected: "( 1 + 2 ) x 3 = ?",
    },

    {
      suit: new MathOperation(
        1,
        2,
        3,
        OperationsSign.ADD,
        OperationsSign.SUBTRACT,
        6
      ),
      expected: "1 + 2 - 3 = ?",
    },
    {
      suit: new MathOperation(
        1,
        2,
        3,
        OperationsSign.ADD,
        OperationsSign.DIVISION,
        6
      ),
      expected: "( 1 + 2 ) ÷ 3 = ?",
    },
    {
      suit: new MathOperation(
        1,
        2,
        3,
        OperationsSign.MULTIPLY,
        OperationsSign.ADD,
        6
      ),
      expected: "( 1 x 2 ) + 3 = ?",
    },
    {
      suit: new MathOperation(
        1,
        2,
        3,
        OperationsSign.DIVISION,
        OperationsSign.ADD,
        6
      ),
      expected: "( 1 ÷ 2 ) + 3 = ?",
    },
  ])("MathOperation expected to be $expected ", ({ suit, expected }) => {
    expect(suit.toString()).toBe(expected);
  });
});
