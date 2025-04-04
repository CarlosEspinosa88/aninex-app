
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("<Button /> component test", () => {
  const label = "Click Me";
  const bgSecondary = "bg-[#ff567f]";
  const disablesdClasses = "opacity-60 cursor-not-allowed";
  const mockFn = jest.fn();

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

  it("should be call onclick function after pressed it", () => {
    render(<Button label={label} onClick={mockFn} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    
    buttonElement.click();
    expect(mockFn).toHaveBeenCalledTimes(1);
  })

  it("should be disabled when the disabled prop is true", () => {
    render(<Button label={label} disabled={true} />)
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass(disablesdClasses);
  })
})