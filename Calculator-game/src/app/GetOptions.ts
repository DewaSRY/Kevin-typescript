/**
 *
 */
import GameOptions from "./AnswerOptions";
import RandomsNumber from "./RandomApp";
export default class GetOptions {
  private static allGameOptions: GameOptions[] = [];

  public static setRightOptions(answer: number) {
    let otherOptions = RandomsNumber.getArrOfNumbers(100, answer);
    const { allGameOptions, clearOptions } = GetOptions;
    clearOptions();
    otherOptions.forEach((num) => {
      allGameOptions.push(new GameOptions(num, false));
    });

    allGameOptions.push(new GameOptions(answer, true));
    RandomsNumber.shuffle(allGameOptions);
  }

  public static getAllOptions() {
    const { allGameOptions } = GetOptions;

    return allGameOptions;
  }
  private static clearOptions() {
    const { allGameOptions } = GetOptions;
    let optionsLength = allGameOptions.length;
    if (optionsLength <= 0) return;
    while (optionsLength) {
      allGameOptions.pop();
      optionsLength--;
    }
  }
  private static *gameOptionsGenerator() {
    const { allGameOptions } = GetOptions;
    for (let GM of allGameOptions) yield GM;
  }
  static createGenerator = GetOptions.gameOptionsGenerator();
  public static getGameOptions(): GameOptions {
    let optionsIter = GetOptions.createGenerator.next();
    if (optionsIter.done === true) {
      GetOptions.createGenerator = GetOptions.gameOptionsGenerator();
      return GetOptions.getGameOptions();
    }
    return optionsIter.value;
  }
}

// describe("test", () => {
//   it("first test", () => {
//     GetOptions.setRightOptions(34);
//     console.log("test");
//     console.log(GetOptions.getGameOptions());
//   });
// });
