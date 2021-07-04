import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const BeerInfo = () => {
  const [isLoading, setLoading] = useState(true);
  const [beerInfo, setBeerInfo] = useState({});
  const [isErrorMsg, setErrorMsg] = useState("");

  const setErrorMessage = (error) => {
    setErrorMsg(error);
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  };
  const fetchNextRandomBeer = async () => {
    try {
      const response = await axios.get("/beer/random");
      setLoading(false);
      setBeerInfo(response.data);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="beerInfo">
            {isErrorMsg && (
              <div className={"alert alert-danger"}>{isErrorMsg}</div>
            )}
            <header>
              <h1>Beer</h1>
            </header>
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
          </div>
        )}
        <button
          className="btn btn-primary my-1"
          name="action"
          onClick={fetchNextRandomBeer}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BeerInfo;
