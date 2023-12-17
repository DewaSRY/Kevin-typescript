/**
 *
 */
export default class ScoreBoards {
  private hightScore = 0;
  private curetScore = 0;
  private static initScore: ScoreBoards | null = null;
  constructor() {
    let getHightScore = localStorage.getItem("Hight-score");
    if (getHightScore !== null) {
      this.hightScore = +getHightScore;
    }
  }
  private updateNewHightScore(newScore: number) {
    if (newScore < this.hightScore) return;
    this.hightScore = newScore;
    localStorage.setItem("Hight-score", this.hightScore.toString() || "0");
  }
  public getHightScore() {
    return this.hightScore;
  }
  public getCurrentScore() {
    return this.curetScore;
  }
  public setNewScore(isRight: boolean) {
    if (isRight === true) {
      this.curetScore++;
    } else {
      this.curetScore--;
    }
    if (this.curetScore < 0) {
      this.curetScore = 0;
    }

    this.updateNewHightScore(this.curetScore);
  }

  static getCurrentScoreBoard() {
    if (ScoreBoards.initScore === null) {
      ScoreBoards.initScore = new ScoreBoards();
    }
    return ScoreBoards.initScore;
  }
}
