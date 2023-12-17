import { Observer } from "@/app/MathQuizObserver";
import GenerateOperation from "@/app/GenerateOperation";

import GameOptions from "@/app/GameOptions";
import RandomsNumber from "@/app/RandomsNumber";
import NumberOptions from "./NumberOptions";
export default class MathQuiz extends Observer {
  private root: HTMLElement;
  private optionsELement: NodeListOf<Element>;
  private allGameOptions: GameOptions[] = new Array<GameOptions>();
  private questions: HTMLElement;
  //   private insertNumber: number;
  constructor(root: HTMLElement) {
    super();
    this.root = root;
    this.subject.subscribe(this);
    this.optionsELement = this.root.querySelectorAll("p.option")!;
    this.questions = this.root.querySelector("h2#math-question")!;
    // this.root.addEventListener("click", () => this.update());
  }
  static setUpt(root: HTMLElement) {
    return new MathQuiz(root);
  }

  update(): void {
    let quizOperations = GenerateOperation.getRandomCalCulation();
    let otherOptions = RandomsNumber.getArrOfNumbers(
      20,
      quizOperations.getResult()
    );

    this.setMathQuestion(quizOperations.toString());
    this.setAllOptions(quizOperations.getResult(), otherOptions);
    this.setUpTheOptions();
  }
  private setMathQuestion(questions: string) {
    this.questions.innerText = questions;
  }

  private setAllOptions(rightAnswer: number, otherNumbers: number[]) {
    this.allGameOptions.push(new GameOptions(rightAnswer, true));
    for (let num of otherNumbers) {
      this.allGameOptions.push(new GameOptions(num, false));
    }
    RandomsNumber.shuffle(this.allGameOptions);
  }
  private setUpTheOptions() {
    this.optionsELement.forEach((ele, i) => {
      let gameOptions = this.allGameOptions[i];
      new NumberOptions(ele, gameOptions);
    });
  }
}
