import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { denormalize } from "../../utlis";
import { useToggle } from "../../hooks";
import ListCards from "../ui/ListCards";

const ListCardsContainer = ({ list }) => {
  const [toggleForm, formIsOn, forceToggleForm] = useToggle(false);
  const cards = useSelector(state => state.card.cards);

  const data = useMemo(
    () => denormalize(cards).filter(card => card.idList === list.id),
    [cards, list.id]
  );

  return (
    <ListCards
      data={data}
      idList={list.id}
      toggleForm={toggleForm}
      formIsOn={formIsOn}
      forceToggleForm={forceToggleForm}
    />
  );
};

export default ListCardsContainer;
