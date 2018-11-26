import React from 'react';

const Spotlight = ({currentFavourite,coinList}) => {
    const coin = coinList[currentFavourite];
    return (
        <div className="app-dashboard__chart-section__spotlight">
            <div className="spotlight-name">
                {coin.CoinName}
            </div>
            <div className="spotlight-image">
                <img alt={coin.CoinName} src={`http://cryptocompare.com/${coin.ImageUrl}`} />
            </div>
        </div>
    );
};

export default Spotlight;
