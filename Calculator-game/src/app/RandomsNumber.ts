/**
 *
 */
export default class RandomsNumber {
  public static getRandomOperation(lengthNumber: number) {
    if (lengthNumber <= 0)
      throw new Error("Please insert number bigger then 1");
    return Math.round(Math.random() * lengthNumber - 1);
  }
}
