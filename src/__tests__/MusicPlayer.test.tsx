import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import MusicPlayer from "../MusicPlayer";

afterEach(cleanup);

describe("MusicPlayer Component", () => {
  it("initially displays the first song in the playlist", () => {
    render(<MusicPlayer />);

    expect(
      screen.getByRole("heading", { name: /Painted in Blue/i }),
    ).toBeTruthy();

    const artistInPlayer = screen.getAllByText("Soul Canvas")[0]; // Select the first instance
    expect(artistInPlayer).toBeTruthy();

    const artistInPlaylist = screen.getAllByText("")[1]; // Select the second instance
    expect(artistInPlaylist).toBeTruthy();
  });
});
