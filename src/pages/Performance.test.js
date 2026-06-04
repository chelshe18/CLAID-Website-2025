import React from "react";
import { render, screen } from "@testing-library/react";
import Performance from "./Performance";

jest.mock("../components/ImageCarousel", () => {
  const MockCarousel = ({ images }) => (
    <div data-testid="image-carousel" data-image-count={images.length} />
  );
  MockCarousel.displayName = "ImageCarousel";
  return MockCarousel;
});

// Mock the trailer video import to return a test string instead of the actual file path
jest.mock(
  "../assets/performance/CLAID 2026 Show Trailer.mp4",
  () => "test-trailer.mp4",
  { virtual: true },
);

const renderPerformance = () => render(<Performance />);

describe("Performance page", () => {
  // Static content

  test("renders the main heading", () => {
    renderPerformance();
    expect(
      screen.getByRole("heading", { name: /^Performance$/i }),
    ).toBeInTheDocument();
  });

  test("renders the branch description", () => {
    renderPerformance();
    expect(
      screen.getByText(
        /CLAID Performance Branch aims to spread Chinese culture/i,
      ),
    ).toBeInTheDocument();
  });

  // Showcase section

  test("renders the showcase heading", () => {
    renderPerformance();
    expect(
      screen.getByRole("heading", { name: /Chinese New Year Showcase/i }),
    ).toBeInTheDocument();
  });

  test("renders the showcase date", () => {
    renderPerformance();
    expect(screen.getByText(/February 28, 2026/i)).toBeInTheDocument();
  });

  test("renders the showcase time", () => {
    renderPerformance();
    expect(screen.getByText(/7:00 PM - 9:00 PM/i)).toBeInTheDocument();
  });

  test("renders the showcase location", () => {
    renderPerformance();
    expect(screen.getByText(/Lincoln Hall Auditorium/i)).toBeInTheDocument();
  });

  test("renders the trailer video element", () => {
    renderPerformance();
    // There should be exactly one <video> on the page (the trailer)
    const videos = document.querySelectorAll("video");
    expect(videos).toHaveLength(1);
  });

  test("trailer video has controls enabled", () => {
    renderPerformance();
    const video = document.querySelector("video");
    expect(video).toHaveAttribute("controls");
  });

  test("trailer video source points to the mp4 asset", () => {
    renderPerformance();
    const source = document.querySelector("video source");
    expect(source).toHaveAttribute("src", "test-trailer.mp4");
    expect(source).toHaveAttribute("type", "video/mp4");
  });

  // Photo gallery

  test("renders the Photo Gallery section heading", () => {
    renderPerformance();
    expect(
      screen.getByRole("heading", { name: /Photo Gallery/i }),
    ).toBeInTheDocument();
  });

  test("renders the ImageCarousel", () => {
    renderPerformance();
    expect(screen.getByTestId("image-carousel")).toBeInTheDocument();
  });

  test("passes the images array to ImageCarousel", () => {
    renderPerformance();
    const carousel = screen.getByTestId("image-carousel");
    expect(carousel).toHaveAttribute("data-image-count", "0");
  });

  // Past showcases

  test("renders the Past Showcases section heading", () => {
    renderPerformance();
    expect(
      screen.getByRole("heading", { name: /Past Showcases/i }),
    ).toBeInTheDocument();
  });

  test("renders all three past showcase iframes", () => {
    renderPerformance();
    const iframes = screen
      .getAllByTitle(/Past Showcase Video/i)
      .filter((el) => el.tagName === "IFRAME");
    expect(iframes).toHaveLength(3);
  });

  test("each past showcase iframe links to YouTube", () => {
    renderPerformance();
    screen.getAllByTitle(/Past Showcase Video/i).forEach((iframe) => {
      expect(iframe).toHaveAttribute(
        "src",
        expect.stringContaining("youtube.com/embed"),
      );
    });
  });

  test("each past showcase iframe has allowFullScreen", () => {
    renderPerformance();
    screen.getAllByTitle(/Past Showcase Video/i).forEach((iframe) => {
      expect(iframe).toHaveAttribute("allowFullScreen");
    });
  });
});
