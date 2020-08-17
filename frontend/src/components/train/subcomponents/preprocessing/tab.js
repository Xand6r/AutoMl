import React from 'react';
import PropTypes from 'prop-types';
import './tab.scss';

const Tab = ({
    option,
    active,
    changeTab,
    index
}) => {
    return (
        <div
            onClick={()=>{changeTab(index)}}
            className={`gendertab ${(active)?'--selected':'--unselected'}`}
        >
            <div className="gendertab__text">
                {option}
            </div>   
        </div>
    )
}

Tab.propTypes = {
    index:PropTypes.number.isRequired,
    option:PropTypes.string.isRequired,
    active:PropTypes.bool.isRequired,
    changeTab:PropTypes.func.isRequired,}

export default Tab
