import React, { useContext } from "react";

import Context from "../../context";

import PlayPauseButton from "./playPauseButton";
import ResetButton from "./resetButton";

export default function ControlButtons() {
  const { beepSound } = useContext(Context);

  return (
    <div id="start-stop-buttons-container">
      <PlayPauseButton />
      <ResetButton />
      <audio id="beep" src={beepSound} />
    </div>
  );
}
