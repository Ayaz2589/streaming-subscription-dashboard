import { describe, it, expect, vi } from "vitest";
import { generateProjectTaskList } from "../../utils";

describe("generateProjectTaskList", () => {
  it("should generate an array of 10 tasks", () => {
    const taskList = generateProjectTaskList();
    expect(taskList).toBeInstanceOf(Array);
    expect(taskList.length).toBe(10);
  });

  it("should generate an array of 20 tasks", () => {
    const taskList = generateProjectTaskList(20);
    expect(taskList).toBeInstanceOf(Array);
    expect(taskList.length).toBe(20);
  });

  it("should have specific return values", () => {
    const returnValue = [
      {
        id: 2591,
        started: "11/26/2023",
        task: "Conduct team training session",
        admin: "Emily Johnson",
        status: "completed",
      },
    ];
    const mock = vi
      .fn()
      .mockImplementation(generateProjectTaskList)
      .mockReturnValue(returnValue);

    expect(mock(1)).toEqual(returnValue);
  });
});
