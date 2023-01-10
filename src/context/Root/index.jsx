import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const RootContext = createContext({});

import React from "react";
import { getCurrentUser, login } from "../../api/authentication";
import {
  loginFailed,
  loginRequest,
  loginSuccess,
  setLoader,
  unsetLoader,
} from "./actions";
import reducer, { initialState } from "./reducer";

export function useRootContext() {
  return useContext(RootContext);
}

export default function RootContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const doLogin = useCallback((values) => {
    dispatch(loginRequest());
    login(values)
      .then((user) => {
        dispatch(loginSuccess(user));
        sessionStorage.setItem("currentUsername", user.username);
      })
      .catch((e) => dispatch(loginFailed(e.message)))
      .finally(() => dispatch(unsetLoader()));
  }, []);

  const fetchCurrentUser = useCallback((username) => {
    dispatch(setLoader());
    getCurrentUser(username)
      .then((user) => {
        dispatch(loginSuccess(user));
      })
      .finally(() => dispatch(unsetLoader()));
  }, []);

  const providerValue = useMemo(
    () => ({ state, doLogin, fetchCurrentUser }),
    [state]
  );

  return (
    <RootContext.Provider value={providerValue}>
      {children}
    </RootContext.Provider>
  );
}
