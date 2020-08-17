import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Link,
    Route // for later
  } from 'react-router-dom';

import {component as NavBar} from '../../../utilities/navbar';
import {component as SectionTab} from '../subcomponents/sectionTab';
import {component as SpeakerCard} from '../../../utilities/speakerCard'
import {component as PersonalDetail} from '../subcomponents/preprocessing';
import {component as Expertise} from '../subcomponents/generalDetails';
import {component as ModelSelection} from '../subcomponents/modelSelection';
import {component as ModelTrain} from '../subcomponents/modelTrain';

import './train.scss';


const STEPS = [
    'General Details', 'Preprocessing',
    'Model Selection', 'Train'
]
const GENERAL_DETAILS_STATE = {
    model_name:'Project One',
    url:'https://res.cloudinary.com/xand6r/raw/upload/v1597574095/datasets/iris_gudrhr.csv',
    file:'',
    target_options:[],
    target:''
}
const PREPROCESSING_STATE = {
    preprocessing_action:'Auto',
    encoding:'',
    normalisation:'',
    balancing:''
}
const MODEL_PARAMETERS ={
    use_case:'Classification',
    action:'Manual',
    model_type:null
}

export default function Register({
    location
}) {
    const [activeTab, setactiveTab] = useState(0);
    const [previewHidden, setPreviewHidden ] = useState(false);
    const [generalDetails, setgeneralDetails] = useState(GENERAL_DETAILS_STATE);
    const [preprocessing, setPreprocessing] = useState(PREPROCESSING_STATE);
    const [parameters, setParameters] = useState(MODEL_PARAMETERS);

    const fullState = {
        ...generalDetails,
        ...preprocessing,
        ...parameters
    }

    useEffect(()=>{
        const {pathname} = location;
        const currentTab = pathname.split("/")[2]
        if(!currentTab){
            setactiveTab(0)
            return
        }
        setactiveTab(Number(currentTab)-1)
    },[setactiveTab, location])

    const makeActive = (clickedIndex) => {
        setactiveTab(clickedIndex)
    }

    return (
        <div className="register">
            {/* the navigation bar component */}
            <NavBar />
            {/* the navigation bar component */}

            {/* the section for tapping which form to fill  */}
            <div className="register__activetab">
                {
                    STEPS.map((step, index)=>(
                        <Link
                            key={Math.random()}
                            className="link"
                            //to={`/train/${index+1}`}
                        >
                            <SectionTab
                                
                                index={index}
                                text={step}
                                active={index === activeTab }
                                changeTab={makeActive}
                            />
                        </Link>
                    ))
                }
            </div>
            {/* the section for tapping which form to fill  */}

            {/* the section actually showing the mail content */}
            <div className="register__content">
                <div>
                <div 
                    className={`register__content__preview ${(previewHidden)?"--small":"--large"}`}
                >
                    <div className="register__content__preview__header">
                        <span>Model Preview</span>
                        <i
                            onClick={()=>{setPreviewHidden(!previewHidden)}}
                            className={(previewHidden)?"fa fa-eye":"fa fa-eye-slash"}
                        >
                        </i>
                    </div>
                    {
                        (!previewHidden)?
                            <div className="register__content__preview__card">

                                <SpeakerCard
                                />
                            </div>
                            :""
                    }
                    <div className="register__content__preview__footer">
                        preview the basic model based on the selected parameters
                        parameters 
                    </div>
                    </div>
                </div>
                <div className="register__content__form">
                    <Switch>
                        <Route
                            path = "/train/(1)?"
                            exact
                            render={(props) => (
                                <PersonalDetail {...props} 
                                    stateChanger = {setgeneralDetails}
                                    state = {generalDetails}
                                />
                            )}
                        />
                        <Route
                            path = "/train/2"
                            exact
                            render={(props) => (
                                <Expertise {...props}
                                    state = {preprocessing}
                                    stateChanger = {setPreprocessing}
                                />
                            )}
                        />
                        <Route
                            path = "/train/3"
                            exact
                            render={(props) => (
                                <ModelSelection {...props}
                                    state = {parameters}
                                    stateChanger = {setParameters}
                                />
                            )}
                        />
                        <Route
                            path = "/train/4"
                            exact
                            render={(props) => (
                                <ModelTrain {...props}
                                    state = {fullState}
                                />
                            )}
                        />
                        
                    </Switch>
                </div>
            </div>

        </div>
    )
}

Register.propTypes = {
    location: PropTypes.instanceOf(Object).isRequired
}