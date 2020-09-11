import React, { useContext } from "react";

import Context from "../context";

export default function RunningTimeSection() {
  const { timerTitle, displayTime } = useContext(Context);

  return (
    <div id="running-time-section">
      <h2 id="timer-label">{timerTitle}</h2>
      <h3 id="time-left">{displayTime}</h3>
    </div>
  );
}
