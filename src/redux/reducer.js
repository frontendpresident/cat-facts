const initialState = {
  allFacts: [],
  filtredFacts: [],
  isLoading: false,
  info: null,
};

const CatFactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RANDOM_FACTS":
      return {
        ...state,
        allFacts: action.facts,
      };
    case "GET_FACT_INFO":
      return {
        ...state,
        info: action.info,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "DELETE_INFO":
      return {
        ...state,
        info: null,
      };
    default:
      return state;
  }
};

export default CatFactsReducer;
