import React from "react";
import { Layout, Typography, Row } from "antd";
import Logo from "../assets/icons/Logo";

const { Header, Content } = Layout;
const { Title } = Typography;

const CustomLayout = ({ children }) => {
  return (
    <Layout className="layout-container">
      <Header>
        <Row align="middle">
          <Logo />
          <Title level={2}>Cat facts</Title>
        </Row>
      </Header>

      <Content>{children}</Content>
    </Layout>
  );
};

export default CustomLayout;
