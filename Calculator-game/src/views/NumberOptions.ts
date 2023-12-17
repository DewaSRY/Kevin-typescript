import MO from "@/app/MathQuizObserver";
import GameOptions from "@/app/GameOptions";
export default class NumberOptions {
  private root: Element;
  private gameOptions: GameOptions;
  //   private insertNumber: number;
  constructor(root: Element, gameOptions: GameOptions) {
    this.root = root;
    this.gameOptions = gameOptions;
    this.root.innerHTML = gameOptions.getNumberAsString();
    this.root.addEventListener("click", () => {
      this.gameOptions.setAnswer();
      MO.getSubject().notify();
      console.log(MO.getSubject().getALlSubject());
    });
  }
}
