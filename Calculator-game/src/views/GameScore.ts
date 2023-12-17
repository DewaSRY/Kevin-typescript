import { Observer } from "@/app/MathQuizObserver";
import ScoreBoards from "@/model/ScoreBoards";
export default class GameScore extends Observer {
  private root: HTMLElement;
  private secondElement: Element;
  private hightScoreElement: Element;
  private currentScore: number;
  private hightScore: number;
  private scoreBoard: ScoreBoards;

  constructor(root: HTMLElement) {
    super();
    this.subject.subscribe(this);
    this.root = root;
    this.secondElement = this.root.querySelector("h2#current-score")!;
    this.hightScoreElement = this.root.querySelector("h2#hight-score")!;
    this.currentScore = 0;
    this.scoreBoard = ScoreBoards.getCurrentScoreBoard();
    this.hightScore = this.scoreBoard.getHightScore();
  }
  update(): void {
    if (this.currentScore >= this.hightScore) {
      this.hightScore = this.currentScore;
    }
    this.currentScore++;
    this.secondElement.innerHTML = this.currentScore.toString();
    this.hightScoreElement.innerHTML = this.hightScore.toString();
  }
  static setUp(root: HTMLElement) {
    return new GameScore(root);
  }
}
