import { normalize } from "normalizr";

const api = ({ dispatch }) => next => action => {
  if (action.type !== "API") {
    return next(action);
  }

  const { service, success, failure, schema } = action.payload || {};
  const { before, after } = action.callback || {};

  if (before) {
    before();
  }

  service
    .then(data => {
      if (schema) {
        data = normalize(data, schema);
      }
      dispatch(success(data));
    })
    .catch(error => {
      dispatch(failure(error));
    })
    .finally(() => {
      if (after) {
        after();
      }
    });
};

export default api;
