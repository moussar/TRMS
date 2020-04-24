const logger = store => next => action => {
  console.log("logger");
  const stateBefore = store.getState();
  next(action);
  const stateAfter = store.getState();
  const style = color => `color:${color};font-weight:bold;font-size:13px`;

  console.group("%c " + action.type + " " + Date(), style("grey"));
  console.log("%c prev state", style("orange"), stateBefore);
  console.log("%c action", style("blue"), action);
  console.log("%c next state", style("green"), stateAfter);
  console.groupEnd();
};

export default logger;
