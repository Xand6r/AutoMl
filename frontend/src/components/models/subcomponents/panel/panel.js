import React from 'react';
import PropTypes from 'prop-types';
import { Statistic} from 'antd';

import './panel.scss'

const METRICS_DICT = {
    "classification":['recall','precision','f1_score']
} 

const PanelHeader = ({
    title, metrics, type
}) => {
    console.log(metrics)
    return (
        <div>
            <div className="panel">
                <div className="panel__tag">
                    {type}
                </div>
                <div className="panel__title">
                    {title}
                </div>
                <div className="panel__statistics">
                        {
                            METRICS_DICT[type].map((metric) => (
                                <Statistic
                                    title={metric.toUpperCase()}
                                    value={metrics?metrics[metric]:0}
                                />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

PanelHeader.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    metrics: PropTypes.instanceOf(Object).isRequired,
}

export default PanelHeader
