import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Dashboard } from "../../Components";

describe("Dashboard", () => {
  it("renders without component", () => {
    render(<Dashboard updateCurrentSection={() => {}} />);
    expect(screen.getByTestId("dashboard-container")).toBeDefined();
  });
});
