import React from 'react';
import Modal from '../Shared/Modal/Modal'
import {AppContext} from "../../containers/AppProvider";

const SettingModal = () => {
    return (
        <AppContext.Consumer>
            {({modal}) =>  <Modal modal={modal}/> }
        </AppContext.Consumer>
    );
};

export default SettingModal;
