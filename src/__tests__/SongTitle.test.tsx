import React from "react";
import { render } from "@testing-library/react";
import SongTitle from "../components/SongTitle";

describe("SongTitle Component", () => {
  it("should match the snapshot", () => {
    const mockProps = {
      title: "Test Song Title",
      artist: "Test Artist Name",
    };

    const { asFragment } = render(<SongTitle {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with different title and artist", () => {
    const mockProps = {
      title: "Another Song Title",
      artist: "Another Artist Name",
    };

    const { asFragment } = render(<SongTitle {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
