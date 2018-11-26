import React from 'react';
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid/PriceGrid'
import ChartSection from './ChartSection'


const Dashboard = () => {
    return (
        <Page name="Dashboard">
            <PriceGrid/>
            <ChartSection/>
        </Page>
    );
};

export default Dashboard;
