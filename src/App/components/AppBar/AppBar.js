import React from 'react';
import AppBarChild from './AppBarChild';
import Logo from './Logo'
import ThemeSelector from './ThemeSelector'


const AppBar = () => {
    return (
        <div className="crypto-wrapper__bar">
            <Logo />
            <AppBarChild name=""/>
            <AppBarChild name="Dashboard"/>
            <AppBarChild name="Settings"/>
            <ThemeSelector />
        </div>
    );
};

export default AppBar;
