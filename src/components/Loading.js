import { Spin, Row } from "antd";
import React from "react";

const Loading = ({ loading }) => {
  return (
    <Row justify="center" align="middle" className="loading">
      <Spin size="large" spinning={loading} />
    </Row>
  );
};

export default Loading;
