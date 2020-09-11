import React from "react";

import DecrementButton from "./decrementButton";
import IncrementButton from "./incrementButton";

export default function SetupLengthBlock(props) {
  return (
    <div id={`${props.type}-length-block`}>
      <DecrementButton type={props.type} />
      <h3 id={`${props.type}-length`}>{props.duration}</h3>
      <IncrementButton type={props.type} />
    </div>
  );
}
