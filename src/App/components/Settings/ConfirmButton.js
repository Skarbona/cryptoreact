import React from 'react';

import { AppContext } from "../../containers/AppProvider";
import {MAX_FAVOURITES} from "../../constans";

const ConfirmButton = (props) => {
    return (
        <AppContext.Consumer>
            {({confirmFavourites}) => {
                return (
                    <div className="app-confirm">
                        {`Max Number of Favourites items is: ${MAX_FAVOURITES}`}
                        <div className="app-confirm__button"
                           onClick={confirmFavourites}
                        >
                            Confirm Favourites
                        </div>
                    </div>
                )
            }}
        </AppContext.Consumer>
    );
};

export default ConfirmButton;
