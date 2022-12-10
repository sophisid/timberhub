import React, { createContext, useReducer, Dispatch } from "react";
import { toolNameReducer, ToolNameActions } from "../reducers";

type InitialStateType = {
  toolName: string;
};

const initialState = {
  toolName: "home"
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ToolNameActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { toolName }: InitialStateType,
  action: ToolNameActions
) => ({
  toolName: toolNameReducer(toolName, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
