import React, { createContext, useContext, useEffect } from "react";
import { fetchPagesAsync } from "./api";
import { initialState } from "./reducer";
import useAppReducer from "./useAppReducer";

const AppContext = createContext(initialState);

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const { title, pages, currentPage, showPage, user, dispatch } =
    useAppReducer();

  useEffect(() => {
    fetchPagesAsync().then((newPages) => {
      dispatch({ type: "UPDATE_PAGES", payload: newPages });
    });
  }, []);

  const resetTitle = () => {
    dispatch({ type: "RESET_TITLE" });
  };

  const decrementPage = () => {
    if (currentPage > 0) {
      dispatch({
        type: "SWITCH_PAGE",
        payload: currentPage - 1,
      });
    }
  };

  const incrementPage = () => {
    if (currentPage < pages.length - 1) {
      dispatch({
        type: "SWITCH_PAGE",
        payload: currentPage + 1,
      });
    }
  };

  const updateTitle = (value) => {
    dispatch({ type: "UPDATE_TITLE", payload: value });
  };

  const toggleContent = () => {
    dispatch({ type: "TOGGLE_CONTENT" });
  };

  const createNewPage = (page) => {
    dispatch({ type: "ADD_NEW_PAGE", payload: page });
  };

  return (
    <AppContext.Provider
      value={{
        title,
        pages,
        currentPage,
        showPage,
        user,
        resetTitle,
        decrementPage,
        incrementPage,
        updateTitle,
        toggleContent,
        createNewPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
