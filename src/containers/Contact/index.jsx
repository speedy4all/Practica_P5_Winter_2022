import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  return (
    <>
      <div className="contact-section">Contact</div>
      <Outlet />
    </>
  );
}
