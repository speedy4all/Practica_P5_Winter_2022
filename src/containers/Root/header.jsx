import { Layout } from "antd";
import React from "react";

export default function Header() {
  return (
    <Layout.Header
      style={{
        width: "100%",
        color: "white",
        position: "fixed",
        top: 0,
        left: 200,
        zIndex: 1
      }}
    >
      Practica Pentalog 2022 - 2023
    </Layout.Header>
  );
}
