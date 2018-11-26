import React from 'react';
import Sun from './ThemeSVG/Sun'
import Moon from './ThemeSVG/Moon'

import {AppContext} from "../../containers/AppProvider";


const ThemeSelector = () => {
    return (
        <div className="crypto-wrapper__bar__theme-selector">
            <AppContext.Consumer>
                {({themeSelector,theme}) => {
                    let icon = null;
                    if (theme === 'dark') icon = <Sun />;
                    if (theme === 'light') icon = <Moon />;
                    return (
                        <div onClick={themeSelector}>
                            {icon}
                        </div>

                    );
                }}
            </AppContext.Consumer>
        </div>
    );
};

export default ThemeSelector;
