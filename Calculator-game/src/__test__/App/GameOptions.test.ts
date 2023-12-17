import { describe, it } from "vitest";
import GenerateOptions from "@/app/GetOptions";
describe("test", () => {
  it("first test", () => {
    GenerateOptions.setRightOptions(34);
    console.log(GenerateOptions.getGameOptions());
    console.log(GenerateOptions.getGameOptions());
    console.log(GenerateOptions.getGameOptions());
    console.log(GenerateOptions.getGameOptions());
    console.log(GenerateOptions.getGameOptions());
  });
});
