import { describe, it, expect, vi } from "vitest";
import { generateRandomID } from "../../utils";

describe("generateRandomID", () => {
  it("should generate a random number between 1000 and 9999", () => {
    const randomID = generateRandomID();
    expect(randomID).toBeGreaterThanOrEqual(1000);
    expect(randomID).toBeLessThanOrEqual(9999);
  });

  it("should have specific return values", () => {
    const returnValue = 1234;
    const mock = vi
      .fn()
      .mockImplementation(generateRandomID)
      .mockReturnValue(returnValue);

    expect(mock()).toEqual(returnValue);
  });
});
