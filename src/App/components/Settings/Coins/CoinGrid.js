import React from 'react';
import { AppContext } from "../../../containers/AppProvider";
import CoinItem from './CoinItem';

const getFilteredCoins = (coinList,filteredCoins) => {
    return (filteredCoins && Object.keys(filteredCoins)) ||
            Object.keys(coinList).slice(0,100);
};

const displayCoins = (coinList,topSection,favourites,filteredCoins) => {
    return topSection ? favourites : getFilteredCoins(coinList,filteredCoins)
};

const onClickHandler = (topSection,coinID,addCoin,removeCoin) => {
  return topSection ? removeCoin(coinID)  : addCoin(coinID)
};

const CoinGrid = ({topSection}) => {
    return (
        <AppContext.Consumer>
            {({coinList,favourites,addCoin,removeCoin,filteredCoins}) => <div className="app-coin-grid">
                {displayCoins(coinList,topSection,favourites,filteredCoins).map(coinKey => {
                   const coinID = coinList[coinKey].Id;
                    return <CoinItem
                        onClickHandler={onClickHandler}
                        addCoin={addCoin}
                        removeCoin={removeCoin}
                        topSection={topSection}
                        key={coinID}
                        item={coinList[coinKey]} />
            })}
            </div>}
        </AppContext.Consumer>
    );
};

export default CoinGrid;
