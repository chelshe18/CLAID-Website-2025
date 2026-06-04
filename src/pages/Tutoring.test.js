import React from "react";
import { render, screen } from "@testing-library/react";
import Tutoring from "./Tutoring";

jest.mock("../components/ImageCarousel", () => {
  const MockCarousel = ({ images }) => (
    <div data-testid="image-carousel" data-image-count={images.length} />
  );
  MockCarousel.displayName = "ImageCarousel";
  return MockCarousel;
});

const renderTutoring = () => render(<Tutoring />);

describe("Tutoring page", () => {
  // Static content

  test("renders the main heading", () => {
    renderTutoring();
    expect(
      screen.getByRole("heading", { name: /^Tutoring$/i }),
    ).toBeInTheDocument();
  });

  test("renders the branch description", () => {
    renderTutoring();
    expect(
      screen.getByText(
        /CLAID Tutoring Branch runs two main tutoring programs/i,
      ),
    ).toBeInTheDocument();
  });

  // Chinese corner section

  test("renders the Chinese Corner section heading", () => {
    renderTutoring();
    expect(
      screen.getByRole("heading", { name: /Chinese Corner/i }),
    ).toBeInTheDocument();
  });

  test("renders the correct day for Chinese Corner", () => {
    renderTutoring();
    expect(screen.getByText(/Every Thursday/i)).toBeInTheDocument();
  });

  // [TODO]
  // NOTE: THIS IS ACTUALLY THE WRONG TIME SDKJFHSLKDAJ
  // PLEASE CHANGE THIS TEST WHEN UPDATING THE WEBSITE
  test("renders the correct time for Chinese Corner", () => {
    renderTutoring();
    expect(screen.getByText(/7:00 PM - 8:30 PM/i)).toBeInTheDocument();
  });

  test("renders the correct location for Chinese Corner", () => {
    renderTutoring();
    expect(screen.getByText(/Illini Union Basement/i)).toBeInTheDocument();
  });

  // Gallery section

  test("renders the Photo Album section heading", () => {
    renderTutoring();
    expect(
      screen.getByRole("heading", { name: /Photo Album/i }),
    ).toBeInTheDocument();
  });

  test("renders the ImageCarousel", () => {
    renderTutoring();
    expect(screen.getByTestId("image-carousel")).toBeInTheDocument();
  });

  test("passes the images array to ImageCarousel", () => {
    renderTutoring();
    const carousel = screen.getByTestId("image-carousel");
    expect(carousel).toHaveAttribute("data-image-count", "0");
  });
});
