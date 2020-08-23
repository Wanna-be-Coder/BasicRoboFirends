import { CHANGE_SEARCH_FIELD } from "./constant";

const initialState = {
  searchFields: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchFields: action.payload });
    default:
      return state;
  }
};
