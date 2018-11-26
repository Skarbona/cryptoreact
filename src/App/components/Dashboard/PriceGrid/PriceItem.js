import React from 'react';

const PriceItem = ({price,index,currentFavourite,setCurrentFavourite}) => {

    let symbol = Object.keys(price)[0];
    let data = price[symbol]['USD'];
    let priceChange = data.CHANGEPCT24HOUR.toFixed(2);

    return (
        <div onClick={() => setCurrentFavourite(symbol)}
             data-active={currentFavourite === symbol}
             className="dashboard-prices-grid__single">
            <div data-price={priceChange >= 0} className="price-change">
                {priceChange}
            </div>
            <div className="price-symbol">
                {symbol}
            </div>
            <div className="price-price">
                ${parseFloat(data.PRICE.toFixed(6))}
            </div>
        </div>
    );
};

export default PriceItem;
