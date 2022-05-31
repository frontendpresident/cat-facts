import {
  Button,
  Col,
  DatePicker,
  Divider,
  Row,
  Select,
  Typography,
} from "antd";
import moment from "moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedFilter,
  filtredFacts,
  filtredByMonthThunk,
  resetFilters,
} from "../../redux/actions";

const { Title } = Typography;
const { Option } = Select;

const FiltersContainer = () => {
  const { filters, time } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChangeSelect = useCallback(
    (type) => (_, option) => {
      const data = { name: option.children, value: option.value };
      dispatch(setSelectedFilter(type, data));
      dispatch(filtredFacts());
    },
    [],
  );

  const getDisabledDate = useCallback((current) => {
    return current && current > moment().endOf("month");
  }, []);

  const resetAllFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <React.Fragment>
      <Divider />
      <Row className="filters" justify="space-between">
        {filters.map((filter, i) => (
          <Col key={String(i)}>
            <Title level={5} type="secondary">
              {filter.title}
            </Title>
            <Select
              placeholder={filter.title}
              value={filter.value.value}
              onChange={handleChangeSelect(filter.type)}
            >
              {filter.names.map((item, index) => (
                <Option key={String(index)} value={item.value}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        ))}
        <Col>
          <Title level={5} type="secondary">
            From month
          </Title>
          <DatePicker
            picker="month"
            disabledDate={getDisabledDate}
            format="MMM, YYYY"
            onChange={(time, timeString) => dispatch(filtredByMonthThunk(time))}
            value={time}
          />
        </Col>
        <Col>
          <Row style={{ height: "100%" }} align="bottom">
            <Button type="primary" onClick={resetAllFilters}>
              Reset filters
            </Button>
          </Row>
        </Col>
      </Row>
      <Divider />
    </React.Fragment>
  );
};

export default FiltersContainer;
