import React, { useContext } from "react";

import Context from "../../context";

export default function ResetButton() {
  const { handleReset, FontAwesomeIcon } = useContext(Context);

  return (
    <button className="btn" id="reset" onClick={handleReset}>
      <FontAwesomeIcon icon={["fas", "redo-alt"]} />
    </button>
  );
}
