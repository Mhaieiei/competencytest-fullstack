import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import Spinner from "./Spinner";
import BeerDetail from "./BeerDetail";
import Button from "./Button";

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
            {isErrorMsg && <Alert message={isErrorMsg} type="danger" />}
            <header>
              <h1>Beer</h1>
            </header>
            <BeerDetail beerInfo={beerInfo} />
          </div>
        )}
        <Button text="Next" onChange={fetchNextRandomBeer} />
      </div>
    </div>
  );
};

export default BeerInfo;
