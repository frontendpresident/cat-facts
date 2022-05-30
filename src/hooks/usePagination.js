import { useEffect, useState } from "react";

const usePagination = (array, pageSize) => {
  const [pagination, setPagination] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

  useEffect(() => {
    if (array.length > 0) {
      setPagination((prevState) => ({
        ...prevState,
        data: array,
        totalPage: array.length / pageSize,
        minIndex: 0,
        maxIndex: pageSize,
      }));
    } else {
      setPagination({
        data: [],
        totalPage: 0,
        current: 1,
        minIndex: 0,
        maxIndex: 0,
      });
    }
  }, [array]);

  const onChange = (page) => {
    setPagination((prevState) => ({
      ...prevState,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    }));
  };

  return { pagination, onChange, pageSize };
};

export default usePagination;
