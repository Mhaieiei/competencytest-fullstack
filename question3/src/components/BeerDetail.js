import React, { useState } from "react";

const BeerDetail = (props) => {
  const { beerInfo } = props;
  return (
    <div className="table">
      <table className="table-info">
        {beerInfo &&
          Object.keys(beerInfo).map((key) => (
            <tr key={key}>
              <td>{key}:</td>
              <td>{beerInfo[key]}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default BeerDetail;
