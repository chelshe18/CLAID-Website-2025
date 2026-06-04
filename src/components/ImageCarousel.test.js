import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageCarousel from "./ImageCarousel";

const mockImages = [
  { src: "/img/a.jpg", alt: "Photo A" },
  { src: "/img/b.jpg", alt: "Photo B" },
  { src: "/img/c.jpg", alt: "Photo C" },
];

describe("ImageCarousel", () => {
  it("renders the first image by default", () => {
    render(<ImageCarousel images={mockImages} />);
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/a.jpg",
    );
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "alt",
      "Photo A",
    );
  });

  it("shows a counter badge with correct count", () => {
    render(<ImageCarousel images={mockImages} />);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("advances to the next image on next-button click", () => {
    render(<ImageCarousel images={mockImages} />);
    fireEvent.click(screen.getByTestId("carousel-next"));
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/b.jpg",
    );
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  it("goes to the previous image on prev-button click", () => {
    render(<ImageCarousel images={mockImages} />);
    fireEvent.click(screen.getByTestId("carousel-prev"));
    // wraps around from index 0 → last
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/c.jpg",
    );
  });

  it("wraps around forward past the last image", () => {
    render(<ImageCarousel images={mockImages} />);
    fireEvent.click(screen.getByTestId("carousel-next")); // → b
    fireEvent.click(screen.getByTestId("carousel-next")); // → c
    fireEvent.click(screen.getByTestId("carousel-next")); // → a (wrap)
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/a.jpg",
    );
  });

  it("jumps to a specific image when a dot is clicked", () => {
    render(<ImageCarousel images={mockImages} />);
    fireEvent.click(screen.getByTestId("carousel-dot-2"));
    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/c.jpg",
    );
    expect(screen.getByText("3 / 3")).toBeInTheDocument();
  });

  it("marks the active dot as selected", () => {
    render(<ImageCarousel images={mockImages} />);
    expect(screen.getByTestId("carousel-dot-0")).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByTestId("carousel-dot-1")).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });

  it("shows a fallback message when images array is empty", () => {
    render(<ImageCarousel images={[]} />);
    expect(screen.getByText("No images available")).toBeInTheDocument();
    expect(screen.queryByTestId("carousel-image")).toBeNull();
  });

  it("hides arrows and dots for a single image", () => {
    render(<ImageCarousel images={[{ src: "/img/solo.jpg", alt: "Solo" }]} />);
    expect(screen.queryByTestId("carousel-next")).toBeNull();
    expect(screen.queryByTestId("carousel-prev")).toBeNull();
    expect(screen.queryByTestId("carousel-dot-0")).toBeNull();
  });

  it("shows an error state when an image fails to load", () => {
    render(<ImageCarousel images={mockImages} />);
    fireEvent.error(screen.getByTestId("carousel-image"));
    expect(screen.getByText("Image unavailable")).toBeInTheDocument();
  });

  it("clears the error state when navigating to another image", () => {
    render(<ImageCarousel images={mockImages} />);
    fireEvent.error(screen.getByTestId("carousel-image"));
    expect(screen.getByText("Image unavailable")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("carousel-next"));
    expect(screen.queryByText("Image unavailable")).toBeNull();
    expect(screen.getByTestId("carousel-image")).toBeInTheDocument();
  });
});
