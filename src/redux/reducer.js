import moment from "moment";

const filters = [
  {
    type: "source",
    title: "Facts source",
    names: [
      { name: "User", value: "user" },
      { name: "Api", value: "api" },
      { name: "All", value: "All" },
    ],
    value: { name: "All", value: "All" },
  },
  {
    type: "animal_type",
    title: "Animal Type",
    names: [
      { name: "Cat", value: "cat" },
      { name: "Dog", value: "dog" },
      { name: "Snail", value: "snail" },
      { name: "Horse", value: "horse" },
      { name: "All", value: "all" },
    ],
    value: { name: "All", value: "all" },
  },
  {
    type: "verified",
    title: "Verified",
    names: [
      { name: "Yes", value: true },
      { name: "No", value: null },
      { name: "All", value: "All" },
    ],
    value: { name: "All", value: "All" },
  },
];

const initialState = {
  allFacts: [],
  filtredFacts: [],
  isLoading: false,
  info: null,
  filters,
  time: moment(new Date(), "MMM, YYYY"),
};

const CatFactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RANDOM_FACTS":
      return {
        ...state,
        allFacts: action.facts,
        filtredFacts: action.facts,
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
    case "SET_SELECTED_FILTERS":
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.type === action.filters.type) {
            filter.value = action.filters.value;
          }
          return filter;
        }),
      };
    case "FILTRED":
      let newArr = state.allFacts;
      let filters = [];

      state.filters.forEach((item) => {
        if (item.value.name !== "All") {
          filters.push({
            type: item.type,
            value: item.value.value,
          });
        }
      });

      if (filters.length > 0) {
        filters.forEach((filter) => {
          switch (filter.type) {
            case "animal_type":
              newArr = newArr.filter(
                (item) => item.type === filter.value.toLowerCase(),
              );
              return newArr;
            case "verified":
              newArr = newArr.filter(
                (item) => item.status.verified === filter.value,
              );
              return newArr;
            case "source":
              newArr = newArr.filter((item) => {
                if (item.source) {
                  return item.source === filter.value.toLowerCase();
                }
                return null;
              });
            default:
              return newArr;
          }
        });
      }
      return {
        ...state,
        filtredFacts: newArr,
        time: moment(new Date(), "MMM, YYYY"),
      };
    case "FILTRED_BY_MONTH":
      let time = [];
      if (action.month) {
        time = state.filtredFacts.filter((item) => {
          return (
            moment(item.createdAt).format("MMM, YYYY") ===
            moment(action.month).format("MMM, YYYY")
          );
        });
      }
      return {
        ...state,
        filtredFacts: time,
        time: action.month,
      };
    case "RESET_FILTERS":
      const filtersReseted = state.filters.map((item) => {
        return {
          ...item,
          value: { name: "All", value: "All" },
        };
      });
      return {
        ...state,
        filtredFacts: state.allFacts,
        filters: filtersReseted,
        time: moment(new Date(), "MMM, YYYY"),
      };
    default:
      return state;
  }
};

export default CatFactsReducer;
