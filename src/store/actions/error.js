import * as T from "../types/error";

const setErrors = error => ({
  type: T.SET_ERRORS,
  payload: { error }
});

const cleanErrors = error => ({
  type: T.CLEAN_ERRORS
});

export { setErrors, cleanErrors };
