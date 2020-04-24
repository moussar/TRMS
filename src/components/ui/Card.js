import React from "react";
import Member from "./Member";

const Card = ({ title, members, toggleModal, toggleForm }) => {
  return (
    <div className="card">
      <div className="card-details">
        <span className="card-title" onClick={toggleModal}>
          {title}
        </span>
        <span
          className="icon-sm icon-edit card-btn-edit dark-hover"
          onClick={toggleForm}
        />
        <div className="card-badges">
          <div className="card-badge">
            <span className="card-badge-icon icon-sm icon-comment" />
            <span className="card-badge-text">2</span>
          </div>
        </div>
        <div className="card-members">
          {members &&
            members.map(member => <Member key={member.id} {...member} />)}
        </div>
      </div>
    </div>
  );
};

export default Card;
