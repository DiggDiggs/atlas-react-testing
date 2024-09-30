import React from "react";
import PlayListItem from "./PlayListItem";

// Define the type for each playlist item
interface PlaylistItem {
  id: string;
  title: string;
  artist: string;
  length: string;
}

// Define the props for the PlayList component
interface PlayListProps {
  playlist: PlaylistItem[]; // Expecting an array
  onClickItem: (id: string) => void;
}

const PlayList: React.FC<PlayListProps> = ({ playlist, onClickItem }) => {
  // Check if playlist is an array and has at least one item
  if (!Array.isArray(playlist) || playlist.length === 0) {
    return <div>No songs available</div>;
  }

  return (
    <div className="w-full border-t p-8 md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold">Playlist</h2>
      {playlist.map((item) => (
        <PlayListItem
          key={item.id}
          title={item.title}
          artist={item.artist}
          length={item.length}
          onClick={() => onClickItem(item.id)}
        />
      ))}
    </div>
  );
};

export default PlayList;
