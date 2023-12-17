/**
 *
 */
import GameOptions from "./GameOptions";
import RandomsNumber from "./RandomsNumber";
export default class GenerateOptions {
  private static allGameOptions: GameOptions[] = [];

  public static setRightOptions(answer: number) {
    let otherOptions = RandomsNumber.getArrOfNumbers(100, answer);
    const { allGameOptions, clearOptions } = GenerateOptions;
    clearOptions();
    otherOptions.forEach((num) => {
      allGameOptions.push(new GameOptions(num, false));
    });

    allGameOptions.push(new GameOptions(answer, true));
    RandomsNumber.shuffle(allGameOptions);
  }

  public static getAllOptions() {
    const { allGameOptions } = GenerateOptions;

    return allGameOptions;
  }
  private static clearOptions() {
    const { allGameOptions } = GenerateOptions;
    let optionsLength = allGameOptions.length;
    if (optionsLength <= 0) return;
    while (optionsLength) {
      allGameOptions.pop();
      optionsLength--;
    }
  }
  private static *gameOptionsGenerator() {
    const { allGameOptions } = GenerateOptions;
    for (let GM of allGameOptions) yield GM;
  }
  static createGenerator = GenerateOptions.gameOptionsGenerator();
  public static getGameOptions(): GameOptions {
    let optionsIter = GenerateOptions.createGenerator.next();
    if (optionsIter.done === true) {
      GenerateOptions.createGenerator = GenerateOptions.gameOptionsGenerator();
      return GenerateOptions.getGameOptions();
    }
    return optionsIter.value;
  }
}

// describe("test", () => {
//   it("first test", () => {
//     GenerateOptions.setRightOptions(34);
//     console.log("test");
//     console.log(GenerateOptions.getGameOptions());
//   });
// });
