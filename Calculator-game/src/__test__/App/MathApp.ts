import { describe, expect, it, vi } from "vitest";
import Operation from "@/app/MathApp";
import Randoms from "@/app/RandomApp";

describe("RandomOperations ", () => {
  it("first addition  ", () => {
    vi.spyOn(Randoms, "getRandomOperation").mockImplementationOnce(() => 0);
    expect(Operation.randomOperation(1, 2)).toEqual({
      result: 3,
      operation: "+",
    });
  });
  it("second subtraction   ", () => {
    vi.spyOn(Randoms, "getRandomOperation").mockImplementationOnce(() => 1);
    expect(Operation.randomOperation(1, 2)).toEqual({
      result: -1,
      operation: "-",
    });
  });
  it("three multiplication  ", () => {
    vi.spyOn(Randoms, "getRandomOperation").mockImplementationOnce(() => 2);
    expect(Operation.randomOperation(1, 2)).toEqual({
      result: 2,
      operation: "x",
    });
  });

  it("four division ", () => {
    vi.spyOn(Randoms, "getRandomOperation").mockImplementationOnce(() => 3);
    expect(Operation.randomOperation(1, 2)).toEqual({
      result: 0.5,
      operation: "÷",
    });
  });
  it(" division by zero", () => {
    vi.spyOn(Randoms, "getRandomOperation").mockImplementationOnce(() => 3);
    expect(Operation.randomOperation(0, 2)).toEqual({
      result: 0,
      operation: "÷",
    });
  });
});
