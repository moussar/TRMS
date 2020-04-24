const api = ({ dispatch }) => next => action => {
  if (action.type !== "ASYNC") {
    return next(action);
  }

  const { promise } = action.payload || {};
  const { success, failure } = action.dispatch || {};
  const { before, after } = action.callback || {};

  if (before) {
    dispatch(before());
  }

  promise
    .then(data => {
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
