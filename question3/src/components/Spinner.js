import React from "react";

const Spinner = (m) => {
  return (
    <div className="loader-container">
      <div className="loader" />
      <span className="loading-text">Loading...</span>
    </div>
  );
};

export default Spinner;
