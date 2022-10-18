import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// type: the action
// payload: it means were sending what ever data we need to the reducer
