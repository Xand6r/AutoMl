import React from 'react';
import Select from 'react-select';
import Tab from '../preprocessing/tab';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { message, Spin } from 'antd';


export default function Expertise({
    stateChanger, state
}) {
    
    const RegressionModelTypes = [
        { value: 'linear_regression', label: 'Linear Regression' },
        { value: 'ridge_regression', label: 'Ridge Regression' },
        { value: 'lasso_regression', label: 'Lasso Regression' },
        { value: 'elastic_net_regression', label: 'ELastic Net Regression' },
        { value: 'random_forest', label: 'Random Forest Regressor' },
        { value: 'Support_vector_regression', label: 'Support Vector Regression' },
    ]
    const classificationModelTypes = [
        { value: 'logistic_regression', label: 'Logistic Regression' },
        // { value: 'xgb', label: 'Xtreme gradient boosting' },
        // { value: 'catb', label: 'cat boosting classifier' },
        // { value: 'random_forest', label: 'Random Forest Classifier'},
    ]
    const modelTypes = [
        classificationModelTypes,
        RegressionModelTypes
    ]
    const MODEL_PARAMETER_SELECTION = [
        'Auto', 'Manual'
    ];
    const MODEL_CATEGORY = [
        'Classification', 'Regression'
    ]

    const checkDetailsState = () => (state['use_case'] && (state['action'] === "Auto")) || (state['use_case'] && (state['action'] === "Manual") && state['model_type'])


    return (
        <div className="expertise">

            <div className="personaldetails__heading">
                <div className="personaldetails__heading__header">
                    Model
                </div>
            </div>

            <div className="expertise__formsection">

                <div className="expertise__formsection__section">
                    <div className="expertise__formsection__section__header">
                        <div className="--heading">Model Selection</div>
                    </div>

                    <div className="expertise__formsection__section__form">

                        <div className="--input_wrapper --select">
                            <label class="double" htmlFor="position">
                                Select Model Use Case
                                <span>Select classification or regression use case</span>
                            </label>

                            <div className="--gendersection">
                                {
                                    MODEL_CATEGORY.map((category, index)=>(
                                        <Tab 
                                            key={Math.random()}
                                            option={category}
                                            index={index}
                                            active={category === state.use_case }
                                            changeTab={()=>{
                                                message.info("only classification as allowed for now")
                                                {/* stateChanger({
                                                    ...state,
                                                    use_case:category
                                                }) */}
                                                }
                                            }
                                        />
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                    <div className="expertise__formsection__section__form">

                        <div className="--input_wrapper --select">
                            <label class="double" htmlFor="position">
                                Select model
                                <span>Automatic model selection or manual model selection</span>
                            </label>

                            <div className="--gendersection">
                                {
                                    MODEL_PARAMETER_SELECTION.map((param, index)=>(
                                        <Tab 
                                            key={Math.random()}
                                            option={param}
                                            index={index}
                                            active={state.action === param }
                                            changeTab={() => {
                                                message.info("only manual model is allowed as allowed for now")
                                                {/* stateChanger({
                                                    ...state,
                                                    action: param
                                                }) */}
                                            }}
                                        />
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                    {
                        (state.action === 'Auto')? "":
                        (
                        <>
                            <div className="expertise__formsection__section__form">

                                <div className="--input_wrapper --select">
                                    <label class="double" htmlFor="position">
                                        Model Type
                                        <span>The Types of models which are available to train data with.</span>
                                    </label>
                                    <div className="--singleselect">
                                        <Select
                                            options={modelTypes[MODEL_CATEGORY.indexOf(state.use_case)]}
                                            isSearchable
                                            placeholder="Select your model"
                                            className="--item"
                                            onChange={(selectedOption)=>{
                                                stateChanger({
                                                    ...state,
                                                    model_type:selectedOption.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                        </>

                        )
                    }
                    
                </div>
            </div>

            <div className="expertise__footer">

                <div className="--button_group">
                    <Link className="link" to="/train/3">
                        <div className="cancel">
                            Back
                        </div>
                    </Link>
                    <Link
                        className="link"
                        to={checkDetailsState()?"/train/4":"/train/3"}
                        onClick={() =>{
                            if(!checkDetailsState()){
                                message.error("please fill in all fields before moving on")
                            }
                        }}
                    >
                        <div className="next">
                            Next
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

Expertise.propTypes = {
    stateChanger: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired
}
