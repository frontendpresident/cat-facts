import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FactsContainer from "./FactsContainer";
import FiltersContainer from "./FiltersContainer";
import { getRandomFactsThunk } from "../redux/actions";

const Content = () => {
  const dispatch = useDispatch();
  const facts = useSelector((state) => state.facts);

  useEffect(() => {
    if (facts.length === 0) {
      dispatch(getRandomFactsThunk());
    }
  }, []);

  return (
    <React.Fragment>
      <FiltersContainer />
      <FactsContainer />
    </React.Fragment>
  );
};

export default Content;
