import { OperationsSign } from "./MathApp.ts";

export default class MathQuestions {
  constructor(
    private numberOne: number,
    private numberTwo: number,
    private numberThree: number,
    private operationOne: OperationsSign,
    private operationTwo: OperationsSign,
    private result: number
  ) {}

  public setUp(
    numberOne: number,
    numberTwo: number,
    numberThree: number,
    operationOne: OperationsSign,
    operationTwo: OperationsSign
  ) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    this.numberThree = numberThree;
    this.operationOne = operationOne;
    this.operationTwo = operationTwo;
  }

  public getNumOne() {
    return this.numberOne;
  }
  public getNumTwo() {
    return this.numberTwo;
  }
  public getNumThree() {
    return this.numberThree;
  }
  public getOperationOne() {
    return this.operationOne;
  }
  public getOperationTwo() {
    return this.operationTwo;
  }
  public getResult() {
    return this.result;
  }
  public toString() {
    let fistOperation = `${this.numberOne} ${this.operationOne} ${this.numberTwo}`;
    let nextSecondOperation = ` ${this.operationTwo} ${this.numberThree} = ?`;
    if (this.thereMultiOrDivide()) {
      fistOperation = `( ${fistOperation} )`;
    }

    return fistOperation + nextSecondOperation;
  }
  public equalTo(obj: MathQuestions) {
    if (obj === null) return false;
    return (
      this.numberOne === obj.getNumOne() &&
      this.numberTwo === obj.getNumTwo() &&
      this.numberThree === obj.getNumThree() &&
      this.operationOne === obj.getOperationOne() &&
      this.operationTwo === obj.getOperationTwo()
    );
  }
  private thereMultiOrDivide() {
    return (
      this.isMultiOrDivide(this.operationOne) ||
      this.isMultiOrDivide(this.operationTwo)
    );
  }
  private isMultiOrDivide(sign: OperationsSign) {
    return sign === OperationsSign.DIVISION || sign === OperationsSign.MULTIPLY;
  }
}
