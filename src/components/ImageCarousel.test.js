import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageCarousel from "./ImageCarousel";

// Mock images for testing
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

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/c.jpg",
    );
    expect(screen.getByText("3 / 3")).toBeInTheDocument();
  });

  it("wraps around forward past the last image", () => {
    render(<ImageCarousel images={mockImages} />);

    fireEvent.click(screen.getByTestId("carousel-next"));
    fireEvent.click(screen.getByTestId("carousel-next"));
    fireEvent.click(screen.getByTestId("carousel-next"));

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/a.jpg",
    );
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
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

    fireEvent.click(screen.getByTestId("carousel-dot-1"));

    expect(screen.getByTestId("carousel-dot-0")).toHaveAttribute(
      "aria-selected",
      "false",
    );
    expect(screen.getByTestId("carousel-dot-1")).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("renders an empty carousel without images, controls, dots, or counter", () => {
    render(<ImageCarousel images={[]} />);

    expect(screen.getByTestId("image-carousel")).toBeInTheDocument();
    expect(screen.queryByTestId("carousel-image")).toBeNull();
    expect(screen.queryByTestId("carousel-next")).toBeNull();
    expect(screen.queryByTestId("carousel-prev")).toBeNull();
    expect(screen.queryByRole("tablist")).toBeNull();
    expect(screen.queryByText(/\d+ \/ \d+/)).toBeNull();
  });

  it("hides arrows, dots, and counter for a single image", () => {
    render(<ImageCarousel images={[{ src: "/img/solo.jpg", alt: "Solo" }]} />);

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/solo.jpg",
    );
    expect(screen.queryByTestId("carousel-next")).toBeNull();
    expect(screen.queryByTestId("carousel-prev")).toBeNull();
    expect(screen.queryByTestId("carousel-dot-0")).toBeNull();
    expect(screen.queryByText("1 / 1")).toBeNull();
  });

  it("opens a popup when the current image is clicked", () => {
    render(<ImageCarousel images={mockImages} />);

    fireEvent.click(screen.getByRole("button", { name: "Open image 1" }));

    expect(
      screen.getByRole("button", { name: "Close image popup" }),
    ).toBeInTheDocument();
    expect(screen.getAllByAltText("Photo A")).toHaveLength(2);
  });

  it("closes the popup when the close button is clicked", () => {
    render(<ImageCarousel images={mockImages} />);

    fireEvent.click(screen.getByRole("button", { name: "Open image 1" }));
    fireEvent.click(screen.getByRole("button", { name: "Close image popup" }));

    expect(
      screen.queryByRole("button", { name: "Close image popup" }),
    ).toBeNull();
    expect(screen.getAllByAltText("Photo A")).toHaveLength(1);
  });

  it("clicking a non-current image navigates instead of opening the popup", () => {
    render(<ImageCarousel images={mockImages} />);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Go to image 2" })[0],
    );

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/b.jpg",
    );
    expect(
      screen.queryByRole("button", { name: "Close image popup" }),
    ).toBeNull();
  });

  it("shows an error state when an image fails to load", () => {
    render(<ImageCarousel images={mockImages} />);

    fireEvent.error(screen.getByTestId("carousel-image"));

    expect(screen.getByText("Image unavailable")).toBeInTheDocument();
  });

  it("keeps image load errors tied to the failing image when navigating", () => {
    render(<ImageCarousel images={mockImages} />);

    fireEvent.error(screen.getByTestId("carousel-image"));
    fireEvent.click(screen.getByTestId("carousel-next"));

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "src",
      "/img/b.jpg",
    );
    expect(screen.getByText("Image unavailable")).toBeInTheDocument();
  });

  it("uses the default alt text when an image alt is missing", () => {
    render(<ImageCarousel images={[{ src: "/img/no-alt.jpg" }]} />);

    expect(screen.getByTestId("carousel-image")).toHaveAttribute(
      "alt",
      "Gallery image",
    );
  });

  it("applies custom aspect ratio and className values", () => {
    render(
      <ImageCarousel
        images={mockImages}
        aspectRatio="aspect-square"
        className="custom-carousel"
      />,
    );

    expect(screen.getByTestId("image-carousel")).toHaveClass("custom-carousel");
    expect(screen.getByTestId("image-carousel").firstChild).toHaveClass(
      "aspect-square",
    );
  });
});
