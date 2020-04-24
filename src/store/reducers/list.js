import * as T from "../types/list";

export const initialState = {
  lists: []
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case T.SET_LISTS:
      return {
        ...state,
        lists: action.payload.lists
      };
    case T.ADD_LIST:
      return {
        ...state,
        lists: { ...state.lists, [action.payload.list.id]: action.payload.list }
      };
    case T.UPDATE_LIST:
      let lists = { ...state.lists };
      lists[action.payload.list.id] = action.payload.list;
      return {
        ...state,
        lists
      };
    default:
      return state;
  }
};
export default listReducer;
