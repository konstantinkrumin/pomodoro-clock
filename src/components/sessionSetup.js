import React from "react";

import SetupLengthBlock from "./setup-buttons-components/setupLengthBlock";

export default function SessionSetup(props) {
  const type = props.name.toLowerCase();

  return (
    <div id={`${type}-setup-container`} className="setup-container">
      <h2 id={`${type}-label`}>{props.name} Length</h2>
      <SetupLengthBlock type={type} duration={props.duration} />
    </div>
  );
}
