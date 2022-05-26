const initialState = {
  facts: [],
  isLoading: false,
};

const CatFactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RANDOM_FACTS":
      return {
        ...state,
        facts: action.facts,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default CatFactsReducer;
