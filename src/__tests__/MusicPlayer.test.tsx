import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test, describe } from "@jest/globals";
import MusicPlayer from "../MusicPlayer";

describe("MusicPlayer Component", () => {
  test("initially displays the first song in the playlist", () => {
    render(<MusicPlayer />);

    // Check if the title of the first song is displayed in the main player area
    expect(
      screen.getByRole("heading", { name: /Painted in Blue/i }),
    ).toBeInTheDocument();

    // Check if the artist of the first song is displayed
    expect(screen.getByText("Soul Canvas")).toBeInTheDocument();

    // Check if the song is also in the playlist
    const playlistItem = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "div" &&
        content.includes("Painted in Blue") &&
        element.nextElementSibling?.textContent?.includes("Soul Canvas")
      );
    });
    expect(playlistItem).toBeInTheDocument();
  });
});
