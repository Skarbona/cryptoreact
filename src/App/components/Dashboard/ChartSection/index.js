import React from 'react';
import Chart from './Chart'
import Spothlight from './Spotlight'
import { AppContext } from "../../../containers/AppProvider";

const ChartSection = () => {
    return (
        <div className="app-dashboard__chart-section">
            <AppContext.Consumer>
                {({currentFavourite,coinList,historicalArray,changeCartSelect}) => {
                    if(!currentFavourite) return;
                    return (
                        <div>
                            <Spothlight coinList={coinList}
                                        currentFavourite={currentFavourite}/>
                            <Chart historicalArray={historicalArray}
                                   changeCartSelect={changeCartSelect} />

                        </div>
                    )
                }}
            </AppContext.Consumer>
        </div>
    );
};

export default ChartSection;
