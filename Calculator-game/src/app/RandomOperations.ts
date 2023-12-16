// import { describe, expect, it } from "vitest";
import Randoms from "./RandomsNumber.ts";
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
export default class RandomOperations {
  public static randomOperation: fnNumericOperation<valueOperation> = (
    oneNumber,
    twoNumber
  ) => {
    let randomNum = Randoms.getRandomOperation(4);
    switch (randomNum) {
      case 1:
        return {
          result: RandomOperations.subtract(oneNumber, twoNumber),
          operation: OperationsSign.SUBTRACT,
        };
      case 2:
        return {
          result: RandomOperations.multiple(oneNumber, twoNumber),
          operation: OperationsSign.MULTIPLY,
        };
      case 3:
        return {
          result: RandomOperations.division(oneNumber, twoNumber),
          operation: OperationsSign.DIVISION,
        };
      default:
        return {
          result: RandomOperations.add(oneNumber, twoNumber),
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
    return oneNumber * twoNumber;
  };

  private static division: fnNumericOperation<number> = (
    oneNumber,
    twoNumber
  ) => {
    try {
      let devonsResult = oneNumber / twoNumber;
      return devonsResult;
    } catch (error) {
      return 0;
    }
  };
}

// console.log("hallo");
