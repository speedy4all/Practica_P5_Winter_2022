import { AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import menu from "./menu";

export default function Root() {
  const navigate = useNavigate();
  return (
    <Layout hasSider>
      <Layout.Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Space
          style={{ height: 100, padding: 10 }}
          direction="vertical"
          align="center"
        >
          <Typography.Text style={{ color: "white" }}>
            Pentalog Training App
          </Typography.Text>
          <AppstoreOutlined
            style={{ color: "whitesmoke", fontSize: 22 }}
            spin
          />
        </Space>
        <Menu
          theme="dark"
          onClick={(item) => console.log(item)}
          defaultSelectedKeys={["/dashboard"]}
          items={menu}
        />
        <Space
          style={{ flex: 1, height: "calc(100vh - 172px)" }}
          direction="vertical"
        >
          &nbsp;
        </Space>
      </Layout.Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Layout.Header
          style={{
            width: "100%",
            color: "white",
            position: "fixed",
            top: 0,
            left: 200,
          }}
        >
          Practica Pentalog 2022 - 2023
        </Layout.Header>
        <Layout.Content
          style={{ margin: "84px 16px 0", overflow: "initial", padding: 16 }}
        >
          Content
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
