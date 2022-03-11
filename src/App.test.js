import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Navbar from "./components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("renders App", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("renders Navbar", () => {
    const view = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
