import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { AreaChart } from "../../Components";

describe("Area Chart", () => {
  beforeEach(() => {
    render(<AreaChart />);
  });

  it("renders area chart component", () => {
    expect(screen.getByTestId("area-chart-container")).toBeDefined();
  });
});
