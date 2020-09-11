import React, { useContext } from "react";

import Context from "../../context";

export default function DecrementButton(props) {
  const { handleClick, startOrStop, FontAwesomeIcon } = useContext(Context);

  return (
    <button
      className="btn btn-arrows"
      id={`${props.type}-decrement`}
      onClick={handleClick}
      disabled={startOrStop}
    >
      <FontAwesomeIcon icon={["fas", "arrow-down"]} />
    </button>
  );
}
