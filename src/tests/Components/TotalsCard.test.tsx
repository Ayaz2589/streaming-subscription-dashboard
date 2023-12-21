import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { TotalsCard } from "../../Components";

describe("Totals Card", () => {
  beforeEach(() => {
    render(<TotalsCard title="Earnings" value="$10" onClick={() => {}} />);
  });

  it("renders total cards component", () => {
    expect(screen.getByTestId("totals-card-container")).toBeDefined();
  });

  it("renders total cards component with Earnings title", () => {
    expect(screen.getByText("Earnings")).toBeDefined();
  });

  it("renders total cards component with value", () => {
    expect(screen.getByText("$10")).toBeDefined();
  });
});
