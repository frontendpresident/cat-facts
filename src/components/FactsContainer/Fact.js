import { Button, Card, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Fact = ({ data }) => {
  const { text, _id } = data;

  return (
    <Row className="facts">
      <Card
        actions={[
          <Link to={`/${_id}`}>
            <Button type="link">Learn more</Button>
          </Link>,
        ]}
      >
        <Row className="text">
          <p>{text.substring(0, 50)}</p>
        </Row>
      </Card>
    </Row>
  );
};

export default Fact;
