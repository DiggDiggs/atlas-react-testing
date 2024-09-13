import React from "react";
import { render } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem";

describe("PlayListItem Component", () => {
  it("should match the snapshot", () => {
    const mockProps = {
      title: "Test Title",
      artist: "Test Artist",
      length: "3:45",
      onClick: jest.fn(),
    };

    const { asFragment } = render(<PlayListItem {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
