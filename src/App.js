import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";
import CoinsList from "./CoinsList";
import PaginatedIteam from "./PaginatedIteam";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input
              type="text"
              placeholder="Search Coin name"
              className="coin-input"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
          </form>
        </div>
        <PaginatedIteam  iteam={filteredCoin} />
      </div>
    </React.Fragment>
  );
}

export default App;
