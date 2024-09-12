import React from "react";

// Define the types for the props
interface SongTitleProps {
  title: string;
  artist: string;
}

function SongTitle({ title, artist }: SongTitleProps) {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold leading-8 text-steel-blue-700">
        {title}
      </h2>
      <p className="mb-4 text-steel-blue-700">{artist}</p>
    </div>
  );
}

export default SongTitle;
