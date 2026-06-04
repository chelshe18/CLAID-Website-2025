import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App routing and layout", () => {
  test("renders the home page and footer with main navigation", async () => {
    render(<App />);

    const homeLinks = screen.getAllByRole("link", { name: /Home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks.some((link) => link.getAttribute("href") === "/")).toBe(
      true,
    );

    const connectLinks = screen.getAllByRole("link", { name: /Connect/i });
    expect(connectLinks.length).toBeGreaterThan(0);
    expect(
      connectLinks.some((link) => link.getAttribute("href") === "/connect"),
    ).toBe(true);

    const aboutLinks = screen.getAllByRole("link", { name: /About Us/i });
    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(
      aboutLinks.some((link) => link.getAttribute("href") === "/about"),
    ).toBe(true);

    expect(
      screen.getByRole("heading", { name: /CLAID @ UIUC/i }),
    ).toBeInTheDocument();

    const emailTexts = screen.getAllByText(/claiduiuc@gmail.com/i);
    expect(emailTexts.length).toBeGreaterThan(0);
  });

  test("navigates to About Us and Connect pages using nav links", async () => {
    render(<App />);

    await userEvent.click(
      screen.getAllByRole("link", { name: /About Us/i })[0],
    );

    expect(
      await screen.findByRole("heading", { name: /Meet the board/i }),
    ).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole("link", { name: /Connect/i })[0]);

    expect(
      await screen.findByRole("heading", { name: /Contact us here/i }),
    ).toBeInTheDocument();
  });
});
