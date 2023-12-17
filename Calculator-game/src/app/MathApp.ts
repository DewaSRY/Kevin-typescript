// import { describe, expect, it } from "vitest";
import Randoms from "./RandomApp.ts";
export const enum OperationsSign {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "x",
  DIVISION = "÷",
}
interface fnNumericOperation<T> {
  (oneNumber: number, twoNumber: number): T;
}

type valueOperation = {
  result: number;
  operation: OperationsSign;
};

/**
 *
 */
export default class MathApp {
  public static randomOperation: fnNumericOperation<valueOperation> = (
    oneNumber,
    twoNumber
  ) => {
    let randomNum = Randoms.getRandomOperation(4);
    switch (randomNum) {
      case 1:
        return {
          result: MathApp.subtract(oneNumber, twoNumber),
          operation: OperationsSign.SUBTRACT,
        };
      case 2:
        return {
          result: MathApp.multiple(oneNumber, twoNumber),
          operation: OperationsSign.MULTIPLY,
        };
      case 3:
        return {
          result: MathApp.division(oneNumber, twoNumber),
          operation: OperationsSign.DIVISION,
        };
      default:
        return {
          result: MathApp.add(oneNumber, twoNumber),
          operation: OperationsSign.ADD,
        };
    }
  };

  private static add: fnNumericOperation<number> = (oneNumber, twoNumber) => {
    return oneNumber + twoNumber;
  };
  private static subtract: fnNumericOperation<number> = (
    oneNumber,
    twoNumber
  ) => {
    return oneNumber - twoNumber;
  };
  private static multiple: fnNumericOperation<number> = (
    oneNumber,
    twoNumber
  ) => {
    let result = MathApp.fixNum(oneNumber * twoNumber);
    return result;
  };

  private static division: fnNumericOperation<number> = (
    oneNumber,
    twoNumber
  ) => {
    try {
      let devonsResult = oneNumber / twoNumber;
      devonsResult = MathApp.fixNum(devonsResult);
      return devonsResult;
    } catch (error) {
      return 0;
    }
  };
  private static fixNum(number: number) {
    return Number(number.toFixed(1));
  }
}

// console.log("hallo");
