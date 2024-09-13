// src/__tests__/MusicPlayer.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import MusicPlayer from "../MusicPlayer.js"; // Adjust the import path as necessary

test("renders CurrentlyPlaying and Playlist components", () => {
  render(<MusicPlayer />);

  // Check if CurrentlyPlaying component is rendered
  expect(screen.getByText(/Currently Playing/i)).toBeInTheDocument();

  // Check if Playlist component is rendered
  expect(screen.getByText(/Playlist/i)).toBeInTheDocument();
});

test("initially displays the first song in the playlist", () => {
  render(<MusicPlayer />);

  // Check if the title of the first song is displayed
  expect(screen.getByText(/Painted in Blue/i)).toBeInTheDocument();

  // Check if the artist of the first song is displayed
  expect(screen.getByText(/Soul Canvas/i)).toBeInTheDocument();
});

test("plays the next song when playNext is called", () => {
  render(<MusicPlayer />);

  // Simulate playing the next song
  fireEvent.click(screen.getByText(/Next/i)); // Adjust this if there's no "Next" button

  // Check if the title of the second song is displayed
  expect(screen.getByText(/Tidal Drift/i)).toBeInTheDocument();
});

test("plays the previous song when playPrevious is called", () => {
  render(<MusicPlayer />);

  // Simulate playing the previous song
  fireEvent.click(screen.getByText(/Previous/i)); // Adjust this if there's no "Previous" button

  // Check if the title of the last song is displayed
  expect(screen.getByText(/Shatter the Silence/i)).toBeInTheDocument();
});

test("changes the current song when a playlist item is clicked", () => {
  render(<MusicPlayer />);

  // Simulate clicking on a playlist item
  fireEvent.click(screen.getByText(/Tidal Drift/i));

  // Check if the title of the clicked song is displayed
  expect(screen.getByText(/Tidal Drift/i)).toBeInTheDocument();
  expect(screen.getByText(/Echoes of the Sea/i)).toBeInTheDocument();
});
