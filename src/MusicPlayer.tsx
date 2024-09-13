import React, { useState } from "react";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";

// Define types for the song object and playlist
interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  coverArtUrl: string;
  length: string;
}

const MusicPlayer: React.FC = () => {
  // Sample playlist with song objects
  const [playlist] = useState<Song[]>([
    {
      id: 1,
      title: "Painted in Blue",
      artist: "Soul Canvas",
      url: "song1.mp3",
      coverArtUrl: "cover1.jpg",
      length: "5:55",
    },
    {
      id: 2,
      title: "Tidal Drift",
      artist: "Echoes of the Sea",
      url: "song2.mp3",
      coverArtUrl: "cover2.jpg",
      length: "8:02",
    },
    {
      id: 3,
      title: "Fading Shadows",
      artist: "The Emberlight",
      url: "song3.mp3",
      coverArtUrl: "cover3.jpg",
      length: "3:01",
    },
    {
      id: 4,
      title: "Cosmic Drift",
      artist: "Solar Flare",
      url: "song4.mp3",
      coverArtUrl: "cover4.jpg",
      length: "5:01",
    },
    {
      id: 5,
      title: "Urban Serenade",
      artist: "Midnight Groove",
      url: "song5.mp3",
      coverArtUrl: "cover5.jpg",
      length: "4:54",
    },
    {
      id: 6,
      title: "Whispers in the Wind",
      artist: "Rust & Ruin",
      url: "song6.mp3",
      coverArtUrl: "cover6.jpg",
      length: "6:13",
    },
    {
      id: 7,
      title: "Electric Fever",
      artist: "Neon Jungle",
      url: "song7.mp3",
      coverArtUrl: "cover7.jpg",
      length: "8:41",
    },
    {
      id: 8,
      title: "Edge of the Abyss",
      artist: "Steel Horizon",
      url: "song8.mp3",
      coverArtUrl: "cover8.jpg",
      length: "2:27",
    },
    {
      id: 9,
      title: "Golden Haze",
      artist: "Velvet Waves",
      url: "song9.mp3",
      coverArtUrl: "cover9.jpg",
      length: "3:15",
    },
    {
      id: 10,
      title: "Shatter the Silence",
      artist: "Thunderclap Echo",
      url: "song10.mp3",
      coverArtUrl: "cover10.jpg",
      length: "8:22",
    },
  ]);

  // State to manage the currently playing song index
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

  // Function to play the next song
  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  // Function to play the previous song
  const playPrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length,
    );
  };

  // Current song object
  const currentSong = playlist[currentSongIndex];

  const handleClickItem = (songId: number) => {
    const songIndex = playlist.findIndex((song) => song.id === songId);
    setCurrentSongIndex(songIndex);
  };

  return (
    <div className="from-steel-blue-100 ml-auto mr-auto flex h-full w-full max-w-4xl flex-col justify-center overflow-hidden rounded-lg bg-gradient-to-b to-emerald-500 p-0 shadow-lg md:flex md:flex-row">
      <CurrentlyPlaying
        currentSong={currentSong}
        playNext={playNext}
        playPrevious={playPrevious}
      />
      <Playlist playlist={playlist} onClickItem={handleClickItem} />
    </div>
  );
};

export default MusicPlayer;