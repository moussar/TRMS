import React from "react";
import Card from "../containers/card";
import CardComposer from "../containers/cardComposer";

const ListCards = ({ data, idList, toggleForm, formIsOn, forceToggleForm }) => {
  return (
    <div className="list-cards">
      {data.map((card, index) => (
        <Card key={card.id} {...card} index={index} />
      ))}
      <CardComposer
        status="List"
        nbCards={data.length}
        idList={idList}
        toggleForm={toggleForm}
        formIsOn={formIsOn}
        forceToggleForm={forceToggleForm}
      />
    </div>
  );
};

export default ListCards;
