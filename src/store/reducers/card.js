import * as T from "../types/card";

export const initialState = {
  cards: {}
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case T.SET_CARDS:
      return {
        ...state,
        cards: action.payload.cards
      };
    case T.ADD_CARD:
      return {
        ...state,
        cards: { ...state.cards, [action.payload.card.id]: action.payload.card }
      };
    case T.UPDATE_CARD:
      let cards = { ...state.cards };
      cards[action.payload.card.id] = action.payload.card;
      return {
        ...state,
        cards
      };
    default:
      return state;
  }
};

export default cardReducer;
