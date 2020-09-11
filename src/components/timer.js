import React from "react";

import RunningTimeSection from "./runningTimeSection";
import ControlButtons from "./control-buttons-components/controlButtons";

export default function Timer() {
  return (
    <div id="timer-container">
      <RunningTimeSection />
      <ControlButtons />
    </div>
  );
}
