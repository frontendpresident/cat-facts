import { getFactInfoApi, getRandomFactsApi } from "../services";

export const getRandomFacts = (facts) => ({ type: "GET_RANDOM_FACTS", facts });
export const getFactInfo = (info) => ({ type: "GET_FACT_INFO", info });
export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  isLoading,
});
export const setSelectedFilter = (type, value) => ({
  type: "SET_SELECTED_FILTERS",
  filters: { type, value },
});
export const filtredFacts = () => ({ type: "FILTRED" });
export const deleteInfo = () => ({ type: "DELETE_INFO" });
export const filtredByMonth = (month) => ({ type: "FILTRED_BY_MONTH", month });
export const resetFilters = () => ({ type: "RESET_FILTERS" });

export const filtredByMonthThunk = (month) => (dispatch) => {
  if (month) {
    dispatch(filtredFacts());
    return dispatch(filtredByMonth(month));
  }
  return dispatch(filtredFacts());
};

export const getRandomFactsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return getRandomFactsApi()
    .then((res) => {
      dispatch(getRandomFacts(res));
    })
    .then(() => dispatch(setIsLoading(false)));
};

export const getFactInfoThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return getFactInfoApi(id)
    .then((res) => dispatch(getFactInfo(res)))
    .then(() => {
      dispatch(setIsLoading(false));
    });
};
