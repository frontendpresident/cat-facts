import { Pagination, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Fact from "./Fact";
import usePagination from "../../hooks/usePagination";
import Loading from "../Loading";

const FactsContainer = () => {
  const state = useSelector((state) => state);
  const { allFacts, isLoading } = state;
  const { pagination, onChange, pageSize } = usePagination(allFacts, 9);

  const { data, minIndex, maxIndex, current } = pagination;

  return isLoading ? (
    <Loading loading={isLoading} />
  ) : (
    <Row>
      <Row justify="center">
        {data?.map(
          (data, index) =>
            index >= minIndex &&
            index < maxIndex && <Fact key={String(index)} data={data} />,
        )}
      </Row>
      <Row className="pagination" justify="center">
        <Pagination
          pageSize={pageSize}
          current={current}
          total={data.length}
          onChange={onChange}
          showSizeChanger={false}
        />
      </Row>
    </Row>
  );
};

export default FactsContainer;
