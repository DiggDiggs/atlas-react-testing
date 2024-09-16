import { describe, it, expect, vi } from "vitest"; // Import from vitest
import React from "react";
import { render } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem";

describe("PlayListItem Component", () => {
  it("should match the snapshot", () => {
    const mockProps = {
      title: "Test Title",
      artist: "Test Artist",
      length: "3:45",
      onClick: vi.fn(), // Replace jest.fn() with vi.fn()
    };

    const { asFragment } = render(<PlayListItem {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
