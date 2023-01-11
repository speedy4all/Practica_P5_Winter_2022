import { CheckCircleOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import CardList from "../CardList";
import { CardListLoader } from "../Loader";

export default function DashboardView({ dashboard: { places, isLoading }, onCardClick }) {
  if (isLoading) {
    return <CardListLoader />;
  }

  return (
    <Space direction="vertical">
      <Typography.Title>Available places</Typography.Title>
      <Row gutter={[16, 16]}>
        <CardList list={places} onCardClick={onCardClick} />
      </Row>
    </Space>
  );
}
