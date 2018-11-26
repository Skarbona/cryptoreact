import React from 'react';
import ConfirmButton from './ConfirmButton'
import WelcomeMessage from './WelcomeMessage'
import Page from '../Shared/Page'
import CoinGrid from './Coins/CoinGrid'
import SettingModal from './SettingModal'
import SearchBar from './Search/SearchBar';

const Settings = () => {
    return (
        <Page name="Settings">
            <SettingModal/>
            <div className="app-settings">
                <WelcomeMessage/>
                <CoinGrid topSection/>
                <ConfirmButton />
                <SearchBar/>
                <CoinGrid />
            </div>
        </Page>
    );
};

export default Settings;
