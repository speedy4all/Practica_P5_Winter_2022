import React from "react";
import { useAppContext } from "../../context/App";
import "./NavBar.css";

export default function NavBar() {
  const {
    user: { name },
    title,
    resetTitle,
  } = useAppContext();

  return (
    <header className="nav-bar">
      <div className="logo-container">Logo {name}</div>
      <div className="navigation-bar">{title}</div>
      <button onClick={resetTitle}>Reset title</button>
    </header>
  );
}
