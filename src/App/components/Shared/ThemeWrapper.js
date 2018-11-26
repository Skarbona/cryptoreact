import React from 'react';
import {AppContext} from "../../containers/AppProvider";

const ThemeWrapper = (props) => {
    return (
        <AppContext.Consumer>
            {({theme}) => {
                const classArray = ["crypto-wrapper"];
                classArray.push(theme);
                return (
                    <div className={classArray.join(" ")}>
                        {props.children}
                    </div>
                )
            }}
        </AppContext.Consumer>
    );
};

export default ThemeWrapper;
