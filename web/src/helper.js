import { useState } from "react";

const State = function (init = undefined) {
  const [state, setState] = useState(init);
  Object.defineProperty(this, "val", {
    get: () => {
      return state;
    },
    set: (v) => {
      setState(v);
    },
  });
};

const createState = (init = undefined) => new State(init);

export { createState };
