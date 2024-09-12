import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

// Define the prop types for the CurrentlyPlaying component
interface CurrentlyPlayingProps {
  currentSong: {
    coverArtUrl: string;
    title: string;
    artist: string;
  };
  playNext: () => void;
  playPrevious: () => void;
}

// Convert the component to TypeScript using React.FC with defined prop types
const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  currentSong,
  playNext,
  playPrevious,
}) => {
  return (
    <div className="currently-playing flex w-full flex-col justify-center p-4">
      {/* Pass props to child components */}
      <CoverArt src={currentSong.coverArtUrl} alt={currentSong.title} />
      <SongTitle title={currentSong.title} artist={currentSong.artist} />
      <PlayControls playNext={playNext} playPrevious={playPrevious} />
      <VolumeControl />
    </div>
  );
};

export default CurrentlyPlaying;
