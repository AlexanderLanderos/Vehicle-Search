import React, { createContext, useReducer } from "react";
export interface State {
  user: {}
}
export const initialState: State = {
  user: {}
}

export const StateContext = createContext(()={})