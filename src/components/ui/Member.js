import React from "react";

const Member = ({ name, initials }) => {
  return (
    <div className="member">
      <span className="member-initials" title={`${name}`}>
        {initials}
      </span>
      <span
        className="member-gold-badge"
        title="This member has Trello Gold."
      />
    </div>
  );
};

export default Member;
