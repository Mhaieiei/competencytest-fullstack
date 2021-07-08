import React from "react";

const Alert = (props) => {
  const { message, type } = props;
  const alertType = `alert alert-${type}`;
  /** alert type could be success, info, warning, danger (css bootstrap) */
  return <div className={alertType}>{message}</div>;
};

export default Alert;
