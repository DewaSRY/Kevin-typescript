import ScoreBoards from "@/model/ScoreBoards";

export default class AnswerOptions {
  private isRight: boolean;
  private numbers: number;
  constructor(numbers: number, isRight: boolean) {
    this.isRight = isRight;
    this.numbers = numbers;
  }

  setUp(numbers: number, isRight: boolean) {
    this.isRight = isRight;
    this.numbers = numbers;
  }
  public getNumberAsString() {
    return this.numbers.toString();
  }
  public setAnswer() {
    ScoreBoards.getCurrentScoreBoard().setNewScore(this.isRight);
  }
}
