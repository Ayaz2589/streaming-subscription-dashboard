import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Dashboard } from "../../Components";

describe("Dashboard", () => {
  beforeEach(() => {
    render(<Dashboard updateCurrentSection={() => {}} />);
  });

  it("renders dashboard component", () => {
    expect(screen.getByTestId("dashboard-container")).toBeDefined();
  });

  it("renders dashboard component with 6 totals cards", () => {
    expect(screen.getAllByTestId("totals-card-grid-item")).toHaveLength(6);
  });

  it("renders dashboard component with 1 line chart", () => {
    expect(screen.getByTestId("line-chart")).toBeDefined();
  });

  it("renders dashboard component with 1 bar chart", () => {
    expect(screen.getByTestId("bar-chart")).toBeDefined();
  });
});
