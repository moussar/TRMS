import * as T from "../types/error";

const errorsReducer = (error = [], action) => {
  switch (action.type) {
    case T.SET_ERRORS:
      return [...error, action.payload.error];
    case T.CLEAN_ERRORS:
      return [];
    default:
      return error;
  }
};

export default errorsReducer;
