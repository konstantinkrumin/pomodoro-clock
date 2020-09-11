import React from "react";

import SessionSetup from "./sessionSetup";
import Timer from "./timer";

export default function BlockContainer(props) {
  return (
    <div id="block-container">
      <h1 id="title">Pomodoro Clock</h1>
      <SessionSetup name="Break" duration={props.breakLength} />
      <SessionSetup name="Session" duration={props.sessionLength} />
      <Timer />
    </div>
  );
}
