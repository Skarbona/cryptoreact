import React from 'react';


const CoinItem = ({item,topSection,onClickHandler,addCoin,removeCoin}) => {
    const CoinClass = ["app-coin-grid__single"];

    if (topSection) {
        CoinClass.push("app-coin-grid__single--top")
    }
    return (
        <div className={CoinClass.join(" ")}
             onClick={() => onClickHandler(topSection,item.Symbol,addCoin,removeCoin)}>
            <div className="coin-name">
                {item.CoinName}
            </div>
            <div className="coin-symbol">
                {item.Symbol}
            </div>
            <div className="coin-image">
                <img alt={item.CoinSymbol}
                     src={`http://cryptocompare.com/${item.ImageUrl}`} />
            </div>
        </div>
    );
};

export default CoinItem;
