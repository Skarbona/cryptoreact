import React from 'react';

const selectData = ['Days', 'Weeks', 'Months'];

const ChartSelect = ({changeCartSelect}) => {
    return (
        <div className="app-dashboard__chart-section__selection">
            <select defaultValue="months" onChange={e => changeCartSelect(e.target.value)}>
                {selectData.map(select => <option key={select} value={select.toLowerCase()}>{select}</option>)}
            </select>
        </div>
    );
};

export default ChartSelect;
