import { render, screen } from "@testing-library/react";
import { Message } from ".";

describe("Message", () => {
  let message: HTMLDivElement;

  it("shows the message: 'Hello, world'", () => {
    render(<Message message="Hello, world" />);
    message = screen.getByText("Hello, world");
    expect(message).toBeInTheDocument();
  });
});
