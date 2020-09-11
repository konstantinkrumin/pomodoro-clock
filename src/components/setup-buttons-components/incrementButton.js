import React, { useContext } from "react";

import Context from "../../context";

export default function IncrementButton(props) {
  const { handleClick, startOrStop, FontAwesomeIcon } = useContext(Context);

  return (
    <button
      className="btn btn-arrows"
      id={`${props.type}-increment`}
      onClick={handleClick}
      disabled={startOrStop}
    >
      <FontAwesomeIcon icon={["fas", "arrow-up"]} />
    </button>
  );
}
