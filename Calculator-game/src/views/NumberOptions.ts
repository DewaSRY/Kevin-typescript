import MO from "@/app/MathQuizObserver";
import GameOptions from "@/app/GameOptions";
import { Observer } from "@/app/MathQuizObserver";
import GOP from "@/app/GenerateOptions";
export default class NumberOptions extends Observer {
  private root: Element;
  private gameOptions: GameOptions | null = null;
  //   private insertNumber: number;
  constructor(root: Element) {
    super();
    this.subject.subscribe(this);
    this.root = root;

    this.root.addEventListener("click", () => {
      if (this.gameOptions === null) return;
      this.gameOptions.setAnswer();
      MO.getSubject().notify();
    });
  }
  update(): void {
    this.gameOptions = GOP.getGameOptions()!;
    this.root.innerHTML = this.gameOptions.getNumberAsString();
  }
}
