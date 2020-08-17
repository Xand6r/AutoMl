import React, {useState} from 'react';
import Select from 'react-select';
import Tab from '../preprocessing/tab';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { message } from 'antd';


import './generalDetails.scss';
import 'react-tagsinput/react-tagsinput.css';
import './tag.scss'
export default function Expertise({
    stateChanger, state
}) {
     
    const encoder_options = [
        { value: 'binary', label: 'Binary encoder' },
        { value: 'onehot', label: 'Onehot encoder' },
        { value: 'sumencoder', label: 'Sum encoder' }
    ]

    const scaler_options = [
        { value: 'standard', label: 'Standard scaler' },
        { value: 'robust', label: 'Robust scaler' },
        { value: 'minmax', label: 'Minmax scaler' }
    ]

    const balancing_options = [
        { value: 'up_sample_minority_class', label: 'Minority Upsample' },
        { value: 'random_over_sampling', label: 'Random Oversampling' },
        { value: 'down_sample_majority_class', label: 'Majority Downsample' },
        { value: 'random_under_sampling', label: 'Random Undersampling' }
      ]

    const MODEL_PARAMETER_SELECTION = [
        'Auto', 'Manual'
    ];

    const checkDetailsState = () =>{
        return (state['preprocessing_action'] === "Auto") || (
            state['encoding'] && state['normalisation'] && state['balancing']
        )
    }
    const [activeTab, setactiveTab] = useState(0);

    const makeActive = (clickedIndex) => {
        message.info("we currently only support auto parameter tuning");
        return;
        setactiveTab(clickedIndex)
        stateChanger({
            ...state,
            preprocessing_action: MODEL_PARAMETER_SELECTION[clickedIndex]
          })
    }



    return (
        <div className="expertise">

            <div className="personaldetails__heading">
                <div className="personaldetails__heading__header">
                    Preprocessing
                </div>
            </div>

            <div className="expertise__formsection">

                <div className="expertise__formsection__section">
                    <div className="expertise__formsection__section__header">
                        <div className="--heading">Preprocessing Parameters</div>
                    </div>

                    <div className="expertise__formsection__section__form">

                        <div className="--input_wrapper --select">
                            <label class="double" htmlFor="position">
                                Select model training technique
                                <span>Automatically train the model on the platform or manually select parameters.</span>
                            </label>
                            <div className="--gendersection">
                                {
                                    MODEL_PARAMETER_SELECTION.map((gender, index)=>(
                                        <Tab 
                                            key={Math.random()}
                                            option={gender}
                                            index={index}
                                            active={index === activeTab }
                                            changeTab={makeActive}
                                        />
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                    {
                        (activeTab === 0)? "":
                        (
                        <>
                            <div className="expertise__formsection__section__form">

                                <div className="--input_wrapper --select">
                                    <label class="double" htmlFor="position">
                                        Encoding technique
                                        <span>The Encoding techniques which are available.</span>
                                    </label>
                                    <div className="--singleselect">
                                        <Select
                                            options={encoder_options}
                                            isSearchable
                                            placeholder="Encode your data"
                                            className="--item"
                                            value={state.encoding}
                                            onChange = {(value)=>{
                                                stateChanger({
                                                    ...state,
                                                    encoding: value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="expertise__formsection__section__form">

                                <div className="--input_wrapper --select">
                                    <label class="double" htmlFor="position">
                                        Scaling and Normalisation technique
                                        <span>The scaling and normalisation techniques which are available.</span>
                                    </label>
                                    <div className="--singleselect">
                                        <Select
                                            options={scaler_options}
                                            isSearchable
                                            placeholder="Normalise your data"
                                            className="--item"
                                            value={state.normalisation}
                                            onChange = {(value)=>{
                                                stateChanger({
                                                    ...state,
                                                    normalisation: value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                            </div> 

                            <div className="expertise__formsection__section__form">

                                <div className="--input_wrapper --select">
                                    <label class="double" htmlFor="position">
                                        Data Balancing technique
                                        <span>The Technique to use to balance the dataset</span>
                                    </label>
                                    <div className="--singleselect">
                                        <Select
                                            options={balancing_options}
                                            isSearchable
                                            placeholder="Balance your data"
                                            className="--item"
                                            value={state.balancing}
                                            onChange = {(value)=>{
                                                stateChanger({
                                                    ...state,
                                                    balancing: value
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
                    <Link className="link" to="/train/1">

                        <div className="cancel">
                            Back
                        </div>

                    </Link>
                    <Link
                        to={checkDetailsState()?"/train/3":"/train/2"}
                        className="link"
                        onClick={() =>{
                            console.log(state)
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
