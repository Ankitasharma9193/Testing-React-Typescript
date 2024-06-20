import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("greet renders correctly", () => {
  render(<Greet name='Ankita' />); // created a virtual dom
  const expected = screen.getByText(/I am in greet/i); // react testing library provides
  expect(expected).toBeInTheDocument();
});

test("Greet render correctly", () => {
  render(<Greet name='Ankita' />);
  const expected = screen.getByText('I am in greet Ankita');
  expect(expected).toBeInTheDocument();
});
