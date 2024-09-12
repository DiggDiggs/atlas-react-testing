import volumeSVG from "../assets/volume.svg";
import muteSVG from "../assets/mute.svg";
import useVolumeControl from "../hooks/useVolumeControl";

function VolumeControl() {
  const { volume, muteStatus, handleVolumeChange, toggleMute } =
    useVolumeControl();

  return (
    <div className="flex items-center justify-center">
      <button className="volume" onClick={toggleMute}>
        <img
          src={muteStatus || volume === 0 ? muteSVG : volumeSVG}
          alt="Volume Icon"
          className="size-7"
        />
      </button>
      <input
        type="range"
        id="volumeSlider"
        min={0}
        max={100}
        value={volume}
        className="h-8 w-full accent-steel-blue-700 outline-2 outline-offset-2 outline-transparent"
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default VolumeControl;
