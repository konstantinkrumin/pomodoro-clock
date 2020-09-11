import React, { useContext } from "react";

import Context from "../../context";

export default function PlayPauseButton() {
  const { handleStartStop, FontAwesomeIcon } = useContext(Context);

  return (
    <button className="btn" id="start_stop" onClick={handleStartStop}>
      <FontAwesomeIcon icon={["fas", "play"]} />{" "}
      <FontAwesomeIcon icon={["fas", "pause"]} />
    </button>
  );
}
