import React from 'react';
import {AppContext} from "../../../containers/AppProvider";
import PriceItem from './PriceItem'
import PriceNull from './PriceNull'

const PriceGrid = () => {
    return (
        <div className="app__dashboard-prices-grid">
            <AppContext.Consumer>
                {({prices,currentFavourite,setCurrentFavourite}) => {
                    if(!prices) {
                        return <PriceNull/>
                    } else {
                        return prices.map((price,index) => (
                            <PriceItem
                                setCurrentFavourite={setCurrentFavourite}
                                key={Object.keys(price)[0]}
                                currentFavourite={currentFavourite}
                                index={index}
                                price={price}
                            />))
                    }

                }}
            </AppContext.Consumer>
        </div>
    );
};

export default PriceGrid;
