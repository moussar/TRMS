import React, { useMemo } from "react";
import { connect } from "react-redux";
import { denormalize } from "../../utlis";
import { useToggle } from "../../hooks";
import ListCards from "../ui/ListCards";

const ListCardsContainer = ({ cards, list }) => {
  const [toggleForm, formIsOn, forceToggleForm] = useToggle(false);
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

export default connect((state, ownProps) => ({
  cards: state.card.cards
}))(ListCardsContainer);
