import React, { createContext, SetStateAction, Dispatch } from "react";

interface ContextProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Context = createContext<any>([]);
// const Context = createContext<
//   Array<boolean | Dispatch<SetStateAction<boolean>>>
// >([false, () => {}]);

export default Context;
