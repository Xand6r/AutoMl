import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import Tab from './tab';
import { message, Spin } from 'antd';
import Select from 'react-select'



import notificationIcon from '../../assets/notification.svg';
import './preprocessing.scss';
import 'react-phone-input-2/lib/style.css';

const UPLOAD_OPTIONS = [
    'File Upload', 'URL'
];

export default function Personaldetails({
    stateChanger, state
}) {
    const [activeTab, setactiveTab] = useState(1);
    const [fileLoading, setFileLoading] = useState(false);

    const handleFormChange = (event)=>{
        const {name, value} = event.target;
        stateChanger({
            ...state,
            [name]: value
          });
    }

    const getFile = async () =>{
        setFileLoading(true)
        // if the url is empty do nothing
        if (!state.url){
            setFileLoading(false)
            return
        }
        try{
            const file = await d3.csv(state.url);
            if (file && file.columns[0] !== "<!DOCTYPE html>"){
                const target_dict = file.columns.map(column => (
                    {value:column, label:column}
                ))
                message.success("csv validated", 5);
                stateChanger({
                    ...state,
                    target_options : target_dict
                  });
            }
            else{
                message.error("please enter a valid csv file link", 5);
                stateChanger({
                    ...state,
                    url: ''
                  });
            }
            setFileLoading(false)
        }catch{
            console.log('error')
            message.error("please enter a valid csv file link", 5);
            stateChanger({
                ...state,
                url: ''
              });
            setFileLoading(false)
        }
    }


    const checkDetailsState = () => state['model_name'] && state['target'] && (state['url'] || state['file'])

    const onFileChange = event => {
        stateChanger({
            ...state,
            file:  event.target.files[0]
          });
        console.log(state)
      }; 

    const makeActive = (clickedIndex) => {
        setactiveTab(clickedIndex)
    }
    
    return (
        <div className="personaldetails">

            <div className="personaldetails__heading">
                <div className="personaldetails__heading__header">
                    General Details
                </div>
                <div className="personaldetails__heading__subheading">
                    Enter in the general details of the model
                </div>
            </div>

            <div className="personaldetails__formsection">
                {/* wrapepr for the name */}
                <div 
                    className="--wrapper"
                    onClick = {()=>{
                        message.warning('Only one project can be created for now');
                    }

                    }
                >
                    <label htmlFor="fullname">Model Name</label>
                    <input
                        disabled
                        maxLength="30"
                        type="text"
                        id="model_name"
                        name="model_name"
                        onChange={handleFormChange}
                        value={state.model_name}
                    />
                </div>
                {/* wrapepr for the name */}
                
                {/* wrapper for the gender */}
                <div className="--wrapper">
                    <label htmlFor="fullname">File Upload Option</label>
                    <div className="--gendersection">
                        {
                            UPLOAD_OPTIONS.map((tab, index)=>(
                                <Tab 
                                    key={Math.random()}
                                    option={tab}
                                    index={index}
                                    active={index === activeTab }
                                    changeTab={() =>{
                                        message.warning("file uploads disabled for now, please use a link")
                                    }}
                                />
                            ))
                        }

                    </div>
                </div>

                {
                    (activeTab === 0)? 
                    (
                        <div className="--wrapper">
                            <label htmlFor="email">Upload file</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                placeholder="Upload our file"
                                onChange={onFileChange}
                            />
                        </div>
                    ):
                    (
                        <div className="--wrapper">
                            <label htmlFor="location">Url</label>
                            <input
                                type="url"
                                id="url"
                                name="url"
                                placeholder="Enter The URL of you data"
                                onChange={handleFormChange}
                                value={state.url}
                                onBlur={getFile}
                            />
                        </div>
                    )
                }
                <div className="--wrapper --select">
                    <label htmlFor="fullname">Select your target variable</label>
                    <div className="--singleselect">
                        <Select
                            options={state.target_options}
                            isSearchable
                            placeholder="Target variable"
                            className="--item"
                            value={state.target}
                            onChange = {
                                (value)=>{
                                    stateChanger({
                                        ...state,
                                        target : value
                                    })
                            }}
                            onFocus={()=>{
                                getFile()
                            }}
                        />
                    </div>
                </div>

                

            </div>

            <div className="personaldetails__footer">
                <div className="--notification">
                    <img src={notificationIcon} alt=""/>
                    <div className="--text">
                        By uploading your data you agree to the 
                        <span> Terms and Conditions</span> and our <span>Privacy Policy</span>
                    </div>
                </div>
                <Spin
                        spinning={fileLoading}
                        tip="Loading csv headers"
                    >
                <div className="--button_group">
                    <div className="cancel">
                        Cancel
                    </div>
                    <Link
                        className="link"
                        to={checkDetailsState()?"/train/2":"/train/1"}
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
                </Spin>
            </div>

        </div>
    )
}

Personaldetails.propTypes = {
    stateChanger: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired
}