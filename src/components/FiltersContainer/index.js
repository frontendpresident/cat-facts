import { Divider, Row, Select, Typography } from "antd";
import React from "react";

const { Title } = Typography;
const { Option } = Select;

const FiltersContainer = () => {
  return (
    <React.Fragment>
      <Divider />
      <Title level={4} type="secondary" className="filter-title">
        Filters:
      </Title>
      <Row className="filters" justify="space-between">
        <Select placeholder="Facts source">
          <Option>1</Option>
        </Select>

        <Select placeholder="Fact verify">
          <Option>1</Option>
        </Select>

        <Select placeholder="Animal type">
          <Option>1</Option>
        </Select>

        <Select placeholder="Facts swear words">
          <Option>Yes</Option>
          <Option>No</Option>
        </Select>
      </Row>
      <Divider />
    </React.Fragment>
  );
};

export default FiltersContainer;
