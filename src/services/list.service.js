//import axios from "axios";

let data = JSON.parse(localStorage.getItem("lists")) || [];

if (data.length === 0) {
  localStorage.setItem("lists", JSON.stringify([]));
}

function _getLists(resolve, reject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 0);
  });
}

function _createList(newlist) {
  return new Promise((resolve, reject) => {
    let id = Date.now();
    let list = { id, ...newlist, cards: [] };
    data.push(list);
    localStorage.setItem("lists", JSON.stringify([...data]));
    setTimeout(() => {
      resolve(list);
    }, 0);
  });
}

function _updateList(list) {
  return new Promise((resolve, reject) => {
    data = [
      ...data.map(u => (u.id === list.id ? { ...list, cards: u.cards } : u))
    ];
    localStorage.setItem("lists", JSON.stringify([...data]));
    setTimeout(() => {
      resolve(list);
    }, 0);
  });
}

function _updateListCrads(card, oldListId, newListId) {
  return new Promise((resolve, reject) => {
    let lists = JSON.parse(localStorage.getItem("lists"));
    let indexOldlist = lists.findIndex(list => String(list.id) === oldListId);
    let indexNewList = lists.findIndex(list => String(list.id) === newListId);
    let cards = lists[indexOldlist]["cards"].filter(c => c.id !== card.id);

    if (oldListId === newListId) {
      // change position only
      cards.splice(card.position - 1, 0, {
        ...card,
        idList: Number(card.idList)
      });
      cards.map((c, i) => (c.position = i + 1));
      lists[indexOldlist]["cards"] = cards;
    } else {
      cards.map((c, i) => (c.position = i + 1));
      lists[indexOldlist]["cards"] = cards;

      let cardsDist = lists[indexNewList]["cards"];
      cardsDist.splice(card.position - 1, 0, {
        ...card,
        idList: Number(card.idList)
      });
      cardsDist.map((c, i) => (c.position = i + 1));
      lists[indexNewList]["cards"] = cardsDist;
    }

    localStorage.setItem("lists", JSON.stringify([...lists]));

    setTimeout(() => {
      resolve(lists);
    }, 0);
  });
}

function _deleteList(listId) {
  return new Promise((resolve, reject) => {
    data = [...data.filter(u => u.id !== listId)];
    localStorage.setItem("lists", JSON.stringify([...data]));
    resolve(data);
  });
}

export { _getLists, _createList, _updateList, _updateListCrads, _deleteList };
