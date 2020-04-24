//import axios from "axios";

let cards = JSON.parse(localStorage.getItem("cards")) || [];
let currentMember = {
  id: 1587247747800,
  name: "Mouhssine AREGU",
  username: "moussar",
  initials: "MA"
};

function _createCard(newCard) {
  return new Promise((resolve, reject) => {
    let lists = JSON.parse(localStorage.getItem("lists"));
    let index = lists.findIndex(list => list.id === newCard.idList);
    let position = lists[index].cards.length + 1;

    newCard = {
      id: Date.now(),
      position,
      ...newCard,
      members: [currentMember]
    };
    lists[index].cards.push(newCard);

    localStorage.setItem("lists", JSON.stringify([...lists]));

    setTimeout(() => {
      resolve(newCard);
    }, 0);
  });
}

function _updateCard(card) {
  return new Promise((resolve, reject) => {
    let lists = JSON.parse(localStorage.getItem("lists"));
    let index = lists.findIndex(list => list.id === card.idList);

    let cards = lists[index].cards.map(u => (u.id === card.id ? card : u));
    lists[index].cards = cards;

    localStorage.setItem("lists", JSON.stringify([...lists]));

    setTimeout(() => {
      resolve(card);
    }, 0);
  });
}

function _deleteCard(cardId) {
  return new Promise((resolve, reject) => {
    cards = [...cards.filter(u => u.id !== cardId)];
    localStorage.setItem("cards", JSON.stringify([...cards]));
    resolve(cards);
  });
}

export { _createCard, _updateCard, _deleteCard };
