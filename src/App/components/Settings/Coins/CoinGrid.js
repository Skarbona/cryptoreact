import React from 'react';
import { AppContext } from "../../containers/AppProvider";

const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => <div className="app-coin-grid">
                {Object.keys(coinList).slice(0,100).map(coinKey => {
                    return <div className="app-coin-grid__single">{coinKey}</div>
            })}</div>}
        </AppContext.Consumer>
    );
};

export default CoinGrid;
