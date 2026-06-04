import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("renders navigation links with correct destinations", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: /About Us/i })).toHaveAttribute(
      "href",
      "/about",
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
    expect(screen.getByRole("link", { name: /Connect/i })).toHaveAttribute(
      "href",
      "/connect",
    );
  });
});
