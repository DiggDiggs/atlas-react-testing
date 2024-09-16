import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import VolumeControl from "../components/VolumeControl";

// Mock the custom hook useVolumeControl
vi.mock("../hooks/useVolumeControl", () => ({
  __esModule: true,
  default: () => ({
    volume: 50,
    muteStatus: false,
    handleVolumeChange: vi.fn(),
    toggleMute: vi.fn(),
  }),
}));

describe("VolumeControl Component", () => {
  it("should match the snapshot when volume is not muted", () => {
    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot when volume is 0 (muted)", () => {
    // Mock the hook to simulate muted status
    vi.mock("../hooks/useVolumeControl", () => ({
      __esModule: true,
      default: () => ({
        volume: 0,
        muteStatus: true,
        handleVolumeChange: vi.fn(),
        toggleMute: vi.fn(),
      }),
    }));

    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot when volume is at max", () => {
    // Mock the hook to simulate volume at max
    vi.mock("../hooks/useVolumeControl", () => ({
      __esModule: true,
      default: () => ({
        volume: 100,
        muteStatus: false,
        handleVolumeChange: vi.fn(),
        toggleMute: vi.fn(),
      }),
    }));

    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });
});
