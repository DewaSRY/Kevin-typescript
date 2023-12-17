import OP from "./MathApp.ts";
import RD from "./RandomApp.ts";
import MathOperation from "./MathQuestions.ts";

export default class GetQuestion {
  private static rangeNumberToGenerate = 10;
  private static randomNumbersOperation(
    range = GetQuestion.rangeNumberToGenerate
  ) {
    return RD.getRandomOperation(range);
  }
  public static getRandomCalCulation(): MathOperation {
    const { oneNumber, twoNumber, threeNumber } = GetQuestion.threeNumbers();
    const { operations, result } = GetQuestion.calculateThreeNumber(
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
    let oneNumber = GetQuestion.randomNumbersOperation();
    let twoNumber = GetQuestion.randomNumbersOperation();
    let threeNumber = GetQuestion.randomNumbersOperation();
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
