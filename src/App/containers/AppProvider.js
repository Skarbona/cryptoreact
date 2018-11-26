import React, {Component} from 'react';
import cc from 'cryptocompare'
import _ from 'lodash';
import moment from 'moment';
import { MAX_FAVOURITES, TIME_UNITS } from '../constans';

export const AppContext = React.createContext();

class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'Dashboard',
            setActivePage: this.setActivePage,
            confirmFavourites: this.confirmFavourites,
            addCoin: this.addCoin,
            theme: 'dark',
            themeSelector: this.themeSelector,
            removeCoin: this.removeCoin,
            setFilteredCoins: this.setFilteredCoins,
            setCurrentFavourite: this.setCurrentFavourite,
            changeCartSelect: this.changeCartSelect,
            timeInterval: 'months',
            favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            coinList: null,
            prices: null,
            modal: {
                display: false,
                text: '',
                type: 'alert'
            },
        }
    }

    componentDidMount = () => {
        const { storageDataHandler, fetchCoins } = this;

        storageDataHandler();
        fetchCoins();
    };

    themeSelector = () => {
        const { state: { theme } } = this;
        if(theme === 'dark') {
            this.setState({theme: 'light'})
        }
        if(theme === 'light') {
            this.setState({theme: 'dark'})
        }
    };

    changeCartSelect = value => {
            this.setState({
                timeInterval: value,
                historicalArray: null,
            }, this.fetchHistorical)
    };

    addCoin = key => {
        const { state: { favourites } }= this;

        if (favourites.length < MAX_FAVOURITES && !favourites.includes(key)) {
            let tempFavourites = [...favourites, ...[key]];
            let random = Math.random();
            this.setState({
                favourites: tempFavourites,
                modal: {
                    display: true,
                    text: 'Added to favourites. Remember to Save new settings!',
                    random: random,
                    type: 'success'
                }});

            setTimeout(()=>{
                if(random === this.state.modal.random) {
                    this.setState({ modal: {}});
                }
            },2000)
        }

        if(favourites.length === MAX_FAVOURITES) {
            let random = Math.random();
            this.setState({ modal: {
                display: true,
                random: random,
                text: 'You cannot add more items. Remove existing one',
                type: 'alert'
                }});

            setTimeout(()=>{
                if(random === this.state.modal.random) {
                    this.setState({ modal: {}});
                }
            },2000)
        }

        if(favourites.includes(key)) {
            let random = Math.random();
            this.setState({ modal: {
                display: true,
                random: random,
                text: 'This item exist in your favourite items',
                type: 'alert'}});

            setTimeout(()=>{
                if(random === this.state.modal.random) {
                    this.setState({ modal: {}});
                }
            },2000)
        }
    };

    removeCoin = key => {
        let random = Math.random();
        let favourites = [...this.state.favourites];
        this.setState({
            favourites: _.pull(favourites, key),
            modal: {
                display: true,
                random: random,
                text: 'Item Removed from favourites. Remember to save changes!',
                type: 'success'}

        });

        setTimeout(()=>{
            if(random === this.state.modal.random) {
                this.setState({ modal: {}});
            }
        },2000)
    };

    confirmFavourites = () => {
        const { state: { favourites }, storageCallBackHandler } = this;
        this.setState({
            firstVisit: false,
            currentFavourite: favourites[0],
            prices: null,
            historical: null,
            page: 'Dashboard'
        }, () => storageCallBackHandler() );
        localStorage.setItem('cryptoDash', JSON.stringify({
            visited: true,
            favourites,
            currentFavourite: favourites[0]}))
    };

    fetchPrices = async () => {
        const { ccPrices, state: { firstVisit } } = this;
        if(firstVisit) return;
        let prices = await ccPrices();
        this.setState({prices})
    };

    ccPrices = async () => {
        const { state: { favourites } } = this;
        let returnData = [];
        for (let favourite of favourites) {
            try {
                let priceData = await cc.priceFull(favourite, 'USD');
                returnData.push(priceData)
            } catch(e) {
                console.warn(e)
            }
        }
        return returnData;
    };

    setActivePage = page => this.setState({page});

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    };

    fetchHistorical = async () => {
        const { state: { firstVisit, currentFavourite, timeInterval }, workWithHistoricalData } = this;

        if(firstVisit) return;
        let results = await workWithHistoricalData();
        let historicalArray = [{
            name: currentFavourite,
            data: results.map((result,index) => [
                moment().subtract({[timeInterval]: TIME_UNITS - index}).valueOf(),
                result.USD
            ])
        }];
        this.setState({ historicalArray });

    };

    workWithHistoricalData =  () => {
        const { state: { currentFavourite, timeInterval } } = this;
        let promises = [];
        for(let units = TIME_UNITS; units>0; units--){
            try {
                promises.push(
                    cc.priceHistorical(
                        currentFavourite, ['USD'], moment().subtract({[timeInterval]: units}).toDate()
                    )
                )
            } catch (e) {
                console.warn(e)
            }

        }
        return Promise.all(promises);
    };

    setCurrentFavourite = (symbol) => {
        const { fetchHistorical } = this;
        this.setState({
            currentFavourite: symbol,
            historicalArray: null,
        }, () => fetchHistorical());

        localStorage.setItem('cryptoDash', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptoDash')),
            currentFavourite: symbol
        }));
    };

    storageCallBackHandler = () => {
        const { fetchPrices, fetchHistorical } = this;
        fetchPrices();
        fetchHistorical();
    };

    storageDataHandler = () => {
        const { storageCallBackHandler } = this;
        let storageData = JSON.parse(localStorage.getItem('cryptoDash'));

        if(!storageData) {
            this.setState({
                page: 'Settings',
                firstVisit: true,
                favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            })
        } else {
            if(storageData.favourites) {
                this.setState({
                    favourites: storageData.favourites,
                    currentFavourite: storageData.currentFavourite,
                }, () => storageCallBackHandler() )
            }
        }

    };



    render() {
        const { props: { children }, state  } = this;
        return (
            <AppContext.Provider value={state}>
                {children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
