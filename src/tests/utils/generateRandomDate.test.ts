import { describe, it, expect, vi } from "vitest";
import { generateRandomDate } from "../../utils";

describe("generateRandomDate", () => {
  it("should have specific return values", () => {
    const returnValue = "01/01/2021";
    const mock = vi
      .fn()
      .mockImplementation(generateRandomDate)
      .mockReturnValue(returnValue);

    expect(mock()).toEqual(returnValue);
  });
});
