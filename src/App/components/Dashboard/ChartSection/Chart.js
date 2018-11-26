import React from 'react';
import ChartConfig from './ChartConfig';
import ReactHighCharts from 'react-highcharts';
import Loader from "../../Shared/Loaders/Loader";
import ChartSelect from './ChartSelect'

const Chart = ({historicalArray,changeCartSelect}) => {
    return (
        <div className="app-dashboard__chart-section__chart">
            <ChartSelect changeCartSelect={changeCartSelect}/>
            {historicalArray ? <ReactHighCharts config={ChartConfig(historicalArray)} /> : <Loader/>}
        </div>
    );
};

export default Chart;
