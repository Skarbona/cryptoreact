import React from 'react';
import { AppContext } from "../../containers/AppProvider";

const WelcomeMessage = () => {
    return (
        <AppContext.Consumer>
            {({firstVisit}) => firstVisit ? <div>
                <h1>Welcome in CryptoFilip App!</h1>
                <p>Select and Save Favourites Items. Then go to the Dashboard</p>
           </div> : null}
        </AppContext.Consumer>
    )
};

export default WelcomeMessage;
