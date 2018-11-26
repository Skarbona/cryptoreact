import React from 'react';
import {AppContext} from "../../containers/AppProvider";
import Loader from './Loaders/Loader'

const Content = (props) => {
    return (
        <AppContext.Consumer>
            {({coinList,prices,firstVisit}) => {
                if(!coinList) {
                    return <Loader />
                } else if(!firstVisit && !prices)  {
                    return <Loader text="Loading Prices" />
                } else {
                    return <div>{props.children}</div>
                }
            }}
        </AppContext.Consumer>
    );
};

export default Content;
