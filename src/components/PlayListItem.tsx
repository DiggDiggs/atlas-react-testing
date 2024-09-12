import React from "react";

// Define the types for the props
interface PlayListItemProps {
  title: string;
  artist: string;
  length: string;
  onClick: () => void;
}

function PlayListItem({ title, artist, length, onClick }: PlayListItemProps) {
  return (
    <div
      className="mb-2 flex w-full cursor-pointer justify-between pr-3 font-medium transition-colors hover:bg-gray-200"
      onClick={onClick}
    >
      <div className="wrapper text-left text-sm">
        <div className="text-base">{title}</div>
        <div className="text-emerald-800">{artist}</div>
      </div>
      <div className="length flex items-center">
        <div className="text-sm text-emerald-800">{length}</div>
      </div>
    </div>
  );
}

export default PlayListItem;
