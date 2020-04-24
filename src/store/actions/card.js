import * as T from "../types/card";
import { setErrors } from "./error";

import * as API from "../../services/card.service";

const setCards = cards => ({
  type: T.SET_CARDS,
  payload: { cards }
});

const addCard = card => ({
  type: T.ADD_CARD,
  payload: { card }
});

const updateCard = card => ({
  type: T.UPDATE_CARD,
  payload: { card }
});

const onCreateCardAsync = (newCard, after) => ({
  type: "ASYNC",
  payload: {
    promise: API._createCard(newCard)
  },
  dispatch: {
    success: card => addCard(card),
    failure: error => setErrors(error)
  },
  callback: { after }
});

const onCreateCard = (newCard, after) => ({
  type: "API",
  payload: {
    service: API._createCard(newCard),
    success: card => addCard(card),
    failure: error => setErrors(error)
  },
  callback: { after }
});

const onUpdateCard = (card, after) => ({
  type: "API",
  payload: {
    service: API._updateCard(card),
    success: card => updateCard(card),
    failure: error => setErrors(error)
  },
  callback: { after }
});

const onDeleteCard = cardId => ({
  type: "API",
  payload: {
    service: API._deleteCard(cardId),
    success: cards => setCards(cards),
    failure: error => setErrors(error)
  }
});

export {
  setCards,
  onCreateCard,
  onUpdateCard,
  onDeleteCard,
  onCreateCardAsync
};
