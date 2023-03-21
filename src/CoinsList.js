import React from 'react'
import Coin from './Coin';

const CoinsList = (props) => {                  
  return (
    <div>
    {props.filteredCoin.map((coin) => (
        <Coin
          key={coin.id}
          image={coin.image}
          symbol={coin.symbol}
          name={coin.name}
          price={coin.current_price}
          volume={coin.market_cap}
          priceChange={coin.price_change_percentage_24h}
          marketCap={coin.total_volume}
        ></Coin>
      ))}
    </div>
  );
}

export default CoinsList;