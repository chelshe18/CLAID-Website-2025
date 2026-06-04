import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Events from "./Events";

jest.mock("../components/ImageCarousel", () => {
  const MockCarousel = ({ images }) => (
    <div data-testid="image-carousel" data-image-count={images.length} />
  );
  MockCarousel.displayName = "ImageCarousel";
  return MockCarousel;
});

const renderEvents = () => render(<Events />);

describe("Events page", () => {
  // Static content

  test("renders the main heading", () => {
    renderEvents();
    expect(
      screen.getByRole("heading", { name: /^Events$/i }),
    ).toBeInTheDocument();
  });

  test("renders the branch description", () => {
    renderEvents();
    expect(
      screen.getByText(/CLAID Events Branch plans and hosts/i),
    ).toBeInTheDocument();
  });

  // Calendar section

  test("renders the Upcoming Events section heading", () => {
    renderEvents();
    expect(
      screen.getByRole("heading", { name: /Upcoming Events/i }),
    ).toBeInTheDocument();
  });

  test("renders the embedded Google Calendar iframe with correct title", () => {
    renderEvents();
    const iframe = screen.getByTitle("CLAID Google Calendar");
    expect(iframe).toBeInTheDocument();
    expect(iframe.tagName).toBe("IFRAME");
    expect(iframe).toHaveAttribute(
      "src",
      expect.stringContaining("calendar.google.com"),
    );
  });

  test("renders the calendar helper text", () => {
    renderEvents();
    expect(
      screen.getByText(/Stay updated with all upcoming CLAID/i),
    ).toBeInTheDocument();
  });

  // Gallery section

  test("renders the Event Highlights section heading", () => {
    renderEvents();
    expect(
      screen.getByRole("heading", { name: /Event Highlights/i }),
    ).toBeInTheDocument();
  });

  test("renders the ImageCarousel", () => {
    renderEvents();
    expect(screen.getByTestId("image-carousel")).toBeInTheDocument();
  });

  test("passes the images array to ImageCarousel", () => {
    renderEvents();
    const carousel = screen.getByTestId("image-carousel");
    expect(carousel).toHaveAttribute("data-image-count", "0");
  });
});
