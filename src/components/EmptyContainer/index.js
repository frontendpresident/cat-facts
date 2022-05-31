import { Empty, Row } from "antd";
import React from "react";

const EmptyContainer = () => {
  return (
    <Row className="empty-container" justify="center" align="middle">
      <Empty />
    </Row>
  );
};

export default EmptyContainer;
