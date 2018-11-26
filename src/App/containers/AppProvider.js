import React, {Component} from 'react';

class AppProvider extends Component {

    state = {
        page: 'Dashboard'
    };

    setActivePage = page => this.setState({page});

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AppProvider;
