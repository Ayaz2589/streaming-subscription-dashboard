import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders without component", () => {
    render(<App />);
    expect(screen.getByTestId("app-container")).toBeDefined();
  });
});
