import React from "react";

const Button = (props) => {
  const { text, onChange } = props;
  return (
    <button
      className="btn btn-primary my-1"
      name="action"
      onClick={() => onChange()}
    >
      {text}
    </button>
  );
};

export default Button;
