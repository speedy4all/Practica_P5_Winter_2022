import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { fetchDashoard } from "../../api/places";
import {
  dashboardLoaded,
  dashboardLoadFailed,
  dashboardLoading,
} from "./actions";
import reducer, { initialState } from "./reducer";

const DashboardContext = createContext({});

export function useDashboardContext() {
  return useContext(DashboardContext);
}

export default function DashboardContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadDashboard = useCallback(() => {
    dispatch(dashboardLoading());
    fetchDashoard()
      .then((data) => {
        dispatch(dashboardLoaded(data));
      })
      .catch((err) => {
        dispatch(dashboardLoadFailed(err.message));
      });
  }, []);

  const providerValue = useMemo(
    () => ({ dashboard: state, loadDashboard }),
    [state]
  );
  return (
    <DashboardContext.Provider value={providerValue}>
      {children}
    </DashboardContext.Provider>
  );
}
