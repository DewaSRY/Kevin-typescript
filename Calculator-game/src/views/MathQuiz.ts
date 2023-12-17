import { Observer } from "@/app/MathQuizObserver";
import GenerateOperation from "@/app/GenerateOperation";
import GOP from "@/app/GenerateOptions";

// import GameOptions from "@/app/GameOptions";
// import RandomsNumber from "@/app/RandomsNumber";
import NumberOptions from "./NumberOptions";
export default class MathQuiz extends Observer {
  private root: HTMLElement;
  // private optionsELement: NodeListOf<Element>;
  // private allGameOptions: GameOptions[] = new Array<GameOptions>();
  private questions: HTMLElement;
  constructor(root: HTMLElement) {
    super();
    this.root = root;
    this.subject.subscribe(this);
    this.root.querySelectorAll("p.option")!.forEach((element) => {
      new NumberOptions(element);
    });
    this.questions = this.root.querySelector("h2#math-question")!;
  }
  static setUp(root: HTMLElement) {
    return new MathQuiz(root);
  }

  update(): void {
    let quizOperations = GenerateOperation.getRandomCalCulation();
    GOP.setRightOptions(quizOperations.getResult());
    this.setMathQuestion(quizOperations.toString());
    console.log(quizOperations.toString());
    console.log("result is " + quizOperations.getResult());
  }
  private setMathQuestion(questions: string) {
    this.questions.innerText = questions;
  }
}
