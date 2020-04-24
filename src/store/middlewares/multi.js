const multi = ({ dispatch }) => next => action => {
  if (!Array.isArray(action)) {
    return next(action);
  }
  console.log("Multi", action);

  action.forEach(item => dispatch(item));
};

export default multi;
