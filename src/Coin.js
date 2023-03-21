import React from "react";
import classes from './Coin.module.css'
const Coin = (props) => {
  return (
    <div className={classes['coin-container']}>
      <div className={classes['coin-row']}>
        <div className={classes.coin}>
          <img src={props.image} alt="crypto"></img>
          <h1>{props.name}</h1>
          <p className={classes['coin-symbol']}>{props.symbol}</p>
        </div>
        <div className={classes["coin-data"]}>
          <p className={classes["coin-price"]}>${props.price}</p>
          <p className={classes["coin-vloume"]}>${props.volume.toLocaleString()}</p>
          {
            props.priceChange < 0 ? (<p className={classes["coin-loss"] || classes['percent']}>{props.priceChange.toFixed(2)}%</p>) :
            (<p className={classes["coin-profit"] || classes['percent']}>+{+props.priceChange.toFixed(2)}%</p>)
             
          }
          <p className={classes["coin-market-cap"]}>Mkt Cap: ${props.marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
