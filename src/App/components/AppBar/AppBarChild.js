import React from 'react';
import { AppContext } from "../../containers/AppProvider";

const AppBarChild = ({name}) => {
    return (
        <AppContext.Consumer>
            {({page,setActivePage}) => {
                return (
                    <div className="bar-button"
                         data-active={page === name}
                         onClick={()=>setActivePage(name)}
                    >
                        {name}
                    </div>
                    )}}
        </AppContext.Consumer>
    );
};

export default AppBarChild;
