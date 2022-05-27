import { getFactInfoApi, getRandomFactsApi } from "../services";

export const getRandomFacts = (facts) => ({ type: "GET_RANDOM_FACTS", facts });
export const getFactInfo = (info) => ({ type: "GET_FACT_INFO", info });
export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  isLoading,
});
export const deleteInfo = () => ({ type: "DELETE_INFO" });

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
