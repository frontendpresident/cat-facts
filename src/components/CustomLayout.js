import React from "react";
import { Layout, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const CustomLayout = ({ children }) => {
  return (
    <Layout className="layout-container">
      <Header>
        <Title level={3}>Cat facts</Title>
      </Header>

      <Content>{children}</Content>
    </Layout>
  );
};

export default CustomLayout;
