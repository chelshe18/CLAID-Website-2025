import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home page", () => {
  test("renders hero content and navigation cards", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /CLAID @ UIUC/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Building connections between students/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contact Us/i })).toHaveAttribute(
      "href",
      "/connect",
    );
    expect(screen.getByRole("link", { name: /Events/i })).toHaveAttribute(
      "href",
      "/events",
    );
    expect(screen.getByRole("link", { name: /Performance/i })).toHaveAttribute(
      "href",
      "/performance",
    );
    expect(screen.getByRole("link", { name: /Tutoring/i })).toHaveAttribute(
      "href",
      "/tutoring",
    );
  });
});
