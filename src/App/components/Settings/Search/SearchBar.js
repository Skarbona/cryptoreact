import React from 'react';
import { AppContext } from "../../../containers/AppProvider";
import _ from 'lodash';
import fuzzy from 'fuzzy';

const handlerFilter = _.debounce((inputValue,coinList,setFilteredCoins) => {
    let coinSymbols = Object.keys(coinList);
    let coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);
    let allStringToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringToSearch, {})
        .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result,symKey) => {
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
    });

    setFilteredCoins(filteredCoins);

},1000);

const filterCoins = (e,coinList,setFilteredCoins) => {
    e.preventDefault();
    let inputValue = e.target.value;
    if(!inputValue){
        setFilteredCoins(null);
        return;
    }
    handlerFilter(inputValue,coinList,setFilteredCoins);

};

const SearchBar = () => {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins,coinList}) => {
                return (
                    <div className="app-search-bar">
                        <input
                            onKeyUp={(e) => filterCoins(e,coinList,setFilteredCoins)}
                            type="text"
                            placeholder="Search all coins. Start typing..." />
                    </div>
                    )
            }}
        </AppContext.Consumer>
    );
};

export default SearchBar;
