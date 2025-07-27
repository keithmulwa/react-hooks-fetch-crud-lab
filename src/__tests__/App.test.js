import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import '@testing-library/jest-dom';


// ✅ Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            prompt: "lorem testum 1",
            answers: ["A", "B", "C", "D"],
            correctIndex: 1,
          },
          {
            id: 2,
            prompt: "lorem testum 2",
            answers: ["E", "F", "G", "H"],
            correctIndex: 2,
          },
        ]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test("displays question prompts after fetching", async () => {
  render(<App />);
  fireEvent.click(screen.getByText("View Questions"));

  expect(
    await screen.findByText("Prompt: lorem testum 1")
  ).toBeInTheDocument();
  expect(
    await screen.findByText("Prompt: lorem testum 2")
  ).toBeInTheDocument();
});
