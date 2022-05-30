import { Pagination, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Fact from "./Fact";
import usePagination from "../../hooks/usePagination";
import Loading from "../Loading";
import EmptyContainer from "../EmptyContainer";

const FactsContainer = () => {
  const { filtredFacts, isLoading } = useSelector((state) => state);
  const { pagination, onChange, pageSize } = usePagination(filtredFacts, 9);

  const { data, minIndex, maxIndex, current } = pagination;

  return isLoading ? (
    <Loading />
  ) : (
    <Row>
      {data.length > 0 ? (
        <React.Fragment>
          <Row justify="center">
            {data?.map(
              (data, index) =>
                index >= minIndex &&
                index < maxIndex && <Fact key={String(index)} data={data} />,
            )}
          </Row>
          {data.length > 9 && (
            <Row className="pagination" justify="center">
              <Pagination
                pageSize={pageSize}
                current={current}
                total={data.length}
                onChange={onChange}
                showSizeChanger={false}
              />
            </Row>
          )}
        </React.Fragment>
      ) : (
        <EmptyContainer />
      )}
    </Row>
  );
};

export default FactsContainer;
