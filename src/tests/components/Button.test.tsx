
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("<Button /> component test", () => {
  const label = "Click Me"
  const bgSecondary = "bg-[#ff567f]";

  it("renders the button with the correct label", () => {
    render(<Button label={label} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the correct class name by variant", () => {
    render(<Button label={label} variant="secondary" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    
    expect(buttonElement).toHaveClass(bgSecondary);
  });
})