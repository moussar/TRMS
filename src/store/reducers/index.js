import errorReducer from "./error";
import uiReducer from "./ui";
import listReducer from "./list";
import cardReducer from "./card";

const rootRedcuer = {
  list: listReducer,
  card: cardReducer,
  ui: uiReducer,
  error: errorReducer
};

export default rootRedcuer;
