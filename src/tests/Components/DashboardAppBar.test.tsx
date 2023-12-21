import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { DashboardAppBar } from "../../Components";
import {
  LightModeButton,
  DarkModeButton,
} from "../../Components/DashboardAppBar";

describe("Area Chart", () => {
  beforeEach(() => {
    render(
      <DashboardAppBar currentSection="Home" handleDrawerToggle={() => {}} />
    );
  });

  it("renders area chart component", () => {
    expect(screen.getByTestId("dashboard-app-bar")).toBeDefined();
  });
});

describe("Light Mode Button", () => {
  beforeEach(() => {
    render(<LightModeButton />);
  });

  it("renders light mode button", () => {
    expect(screen.getByTestId("light-mode-button")).toBeDefined();
  });

  it("changes background color when clicked", () => {
    const body = document.querySelector("body");
    const button = screen.getByTestId("light-mode-button");
    if (body) {
      expect(body.style.backgroundColor).toBe("");
      button.click();
      expect(body.style.backgroundColor).toBe("rgb(66, 165, 245)");
    }
  });
});

describe("Dark Mode Button", () => {
  beforeEach(() => {
    render(<DarkModeButton />);
  });

  it("renders dark mode button", () => {
    expect(screen.getByTestId("dark-mode-button")).toBeDefined();
  });
});
