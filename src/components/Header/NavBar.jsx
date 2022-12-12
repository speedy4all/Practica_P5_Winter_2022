import React from "react";
import useAppReducer from "../../containers/useAppReducer";
import "./NavBar.css";

export default function NavBar() {

  const {user, title, dispatch } = useAppReducer({ name: 'Bogdan', age: 25 });
  const resetTitle = () => {
    dispatch({ type: "RESET_TITLE" })
  }

  return (
    <header className="nav-bar">
      <div className="logo-container">Logo {user.name}</div>
      <div className="navigation-bar">{title}</div>
      <button onClick={resetTitle}>Reset title</button>
    </header>
  );
}
