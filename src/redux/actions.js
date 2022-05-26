import { getRandomFactsApi } from "../services";

export const getRandomFacts = (facts) => ({ type: "GET_RANDOM_FACTS", facts });
export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  isLoading,
});

export const getRandomFactsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return getRandomFactsApi()
    .then((res) => {
      dispatch(getRandomFacts(res));
    })
    .then(() => dispatch(setIsLoading(false)));
};
