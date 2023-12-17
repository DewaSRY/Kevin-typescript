import OP from "./RandomOperations.ts";
import RD from "./RandomsNumber.ts";
import MathOperation from "./MathOperation.ts";
export default class GenerateOperation {
  private static randomNumbersOperation() {
    return RD.getRandomOperation(20);
  }
  public static getRandomCalCulation(): MathOperation {
    const { oneNumber, twoNumber, threeNumber } =
      GenerateOperation.threeNumbers();
    const { operations, result } = GenerateOperation.calculateThreeNumber(
      oneNumber,
      twoNumber,
      threeNumber
    );
    return new MathOperation(
      oneNumber,
      twoNumber,
      threeNumber,
      operations[0],
      operations[1],
      result
    );
  }
  private static threeNumbers() {
    let oneNumber = GenerateOperation.randomNumbersOperation();
    let twoNumber = GenerateOperation.randomNumbersOperation();
    let threeNumber = GenerateOperation.randomNumbersOperation();
    return {
      oneNumber,
      twoNumber,
      threeNumber,
    };
  }
  private static calculateThreeNumber(
    numOne: number,
    numTwo: number,
    numThree: number
  ) {
    const { operation: operationOne, result: resultOne } = OP.randomOperation(
      numOne,
      numTwo
    );
    const { operation, result } = OP.randomOperation(resultOne, numThree);
    return {
      operations: [operationOne, operation],
      result,
    };
  }
}
