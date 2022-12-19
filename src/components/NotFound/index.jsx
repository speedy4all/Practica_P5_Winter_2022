import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div>Page not found</div>
      <div>
        <button onClick={() => navigate("/")}>Go home</button>
      </div>
    </>
  );
}
