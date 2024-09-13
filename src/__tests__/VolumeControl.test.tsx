import React from "react";
import { render } from "@testing-library/react";
import VolumeControl from "../components/VolumeControl";
import "@testing-library/jest-dom/extend-expect"; // for extended matchers

// Mock the custom hook useVolumeControl
jest.mock("../hooks/useVolumeControl", () => ({
  __esModule: true,
  default: () => ({
    volume: 50,
    muteStatus: false,
    handleVolumeChange: jest.fn(),
    toggleMute: jest.fn(),
  }),
}));

describe("VolumeControl Component", () => {
  it("should match the snapshot when volume is not muted", () => {
    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot when volume is 0 (muted)", () => {
    // Mock the hook to simulate muted status
    jest.mock("../hooks/useVolumeControl", () => ({
      __esModule: true,
      default: () => ({
        volume: 0,
        muteStatus: true,
        handleVolumeChange: jest.fn(),
        toggleMute: jest.fn(),
      }),
    }));

    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot when volume is at max", () => {
    // Mock the hook to simulate volume at max
    jest.mock("../hooks/useVolumeControl", () => ({
      __esModule: true,
      default: () => ({
        volume: 100,
        muteStatus: false,
        handleVolumeChange: jest.fn(),
        toggleMute: jest.fn(),
      }),
    }));

    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });
});
