import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <header className="nav-bar">
      <div className="logo-container">Logo {props.user?.name}</div>
      <div className="navigation-bar">{props.navigationTitle}</div>
      <button onClick={props.resetTitle}>Reset title</button>
    </header>
  );
}
