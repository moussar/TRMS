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

function _deleteList(listId) {
  return new Promise((resolve, reject) => {
    data = [...data.filter(u => u.id !== listId)];
    localStorage.setItem("lists", JSON.stringify([...data]));
    resolve(data);
  });
}

export { _getLists, _createList, _updateList, _deleteList };
