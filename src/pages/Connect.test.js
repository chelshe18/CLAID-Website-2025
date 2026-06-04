import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Connect from "./Connect";

describe("Connect page", () => {
  test("renders contact form fields and external links section", async () => {
    render(
      <MemoryRouter>
        <Connect />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Contact us here/i }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your message/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText(/Name/i), "Test User");
    await userEvent.type(
      screen.getByPlaceholderText(/Email/i),
      "test@example.com",
    );
    await userEvent.type(
      screen.getByPlaceholderText(/Enter your message/i),
      "Hello CLAID",
    );

    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue("Test User");
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue(
      "test@example.com",
    );
    expect(screen.getByPlaceholderText(/Enter your message/i)).toHaveValue(
      "Hello CLAID",
    );
  });
});
