import { Button, Card, Row } from "antd";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const Fact = ({ data }) => {
  const { text, _id } = data;

  const getTextSize = useCallback(() => {
    if (text.split(" ").length > 10) {
      return `${text.substring(0, 80)} ...`;
    }
    return text.substring(0, 80);
  }, []);

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
          <p>{getTextSize()}</p>
        </Row>
      </Card>
    </Row>
  );
};

export default Fact;
