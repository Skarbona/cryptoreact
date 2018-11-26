import React from 'react';
import {AppContext} from "../../containers/AppProvider";

const Page = ({name,children}) => {
    return (
        <AppContext.Consumer>
            {({page}) => {
              if (page !== name){
                  return null;
              } else {
                  return <div>{children}</div>
              }
            }}
        </AppContext.Consumer>
    );
};

export default Page;
