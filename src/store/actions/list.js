import * as T from "../types/list";
import { setCards } from "./card";
import { setErrors } from "./error";
import * as schema from "../schemas";

import * as API from "../../services/list.service";

const setLists = lists => ({
  type: T.SET_LISTS,
  payload: { lists }
});

const addList = list => ({
  type: T.ADD_LIST,
  payload: { list }
});

const updateList = list => ({
  type: T.UPDATE_LIST,
  payload: { list }
});

const onGetLists = () => ({
  type: "API",
  payload: {
    schema: [schema.lists],
    service: API._getLists(),
    success: ({ entities: { lists, cards } }) => [
      setCards(cards || []),
      setLists(lists || [])
    ],
    failure: error => setErrors(error)
  }
});

const onUpdateListCrads = (card, oldListId, newListId) => ({
  type: "API",
  payload: {
    schema: [schema.lists],
    service: API._updateListCrads(card, oldListId, newListId),
    success: ({ entities: { lists, cards } }) => [
      setCards(cards || []),
      setLists(lists || [])
    ],
    failure: error => setErrors(error)
  }
});

const onCreateList = (newList, after) => ({
  type: "API",
  payload: {
    service: API._createList(newList),
    success: list => addList(list),
    failure: error => setErrors(error)
  },
  callback: { after }
});

const onUpdateList = (list, after) => ({
  type: "API",
  payload: {
    service: API._updateList(list),
    success: list => updateList(list),
    failure: error => setErrors(error)
  },
  callback: { after }
});

const onDeleteList = listId => ({
  type: "API",
  payload: {
    service: API._deleteList(listId),
    success: lists => setLists(lists),
    failure: error => setErrors(error)
  }
});

export {
  onGetLists,
  onCreateList,
  onUpdateList,
  onUpdateListCrads,
  onDeleteList
};
