import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  // arrange
  const {getByText} = render(<App />);

  // assert 1
  const greetText = getByText(/hi/i);
  expect(greetText).toBeInTheDocument();
});
