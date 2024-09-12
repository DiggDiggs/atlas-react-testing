import { useState } from "react";

export default function useVolumeControl() {
  const [volume, setVolume] = useState<number>(75);
  const [muteStatus, setMuteStatus] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(75);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);

    if (newVolume === 0) {
      setMuteStatus(true);
    } else {
      setMuteStatus(false);
      setVolume(newVolume);
    }
  };

  const toggleMute = () => {
    if (muteStatus) {
      setMuteStatus(false);
      setVolume(lastVolume);
    } else {
      setLastVolume(volume);
      setMuteStatus(true);
      setVolume(0);
    }
  };

  return { volume, muteStatus, handleVolumeChange, toggleMute };
}
