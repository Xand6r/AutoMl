import React from 'react';
import PropTypes from 'prop-types';
import axios from '../../../../axios';
import { message } from 'antd';
import './modelTrain.scss';


export default function Expertise({
    state
}) {

    const validateState = (Localstate) =>{
        const important_paramters = [
            "model_name","model_type",
            "url","target", "use_case"
        ]
        return important_paramters.every((param) =>{
            return Localstate[param]
        })
    }
    
    const trainModel = async () =>{
        if(!validateState(state)){
            message.error("kindly fill all fields in the form")
            return;
        }
        console.log(validateState(state))
        const postData = {
            "name":state.model_name,
            "model_name":state.model_type,
            "file_link" : state.url,
            "target": state.target.value,
            "model_type":state.use_case.toLowerCase()
        }
        axios.post("aiml/projects/create/",postData)
        .then(res=>{
            message.success(res.data.message,10)
            window.location.replace("/");
        })
        .catch(err=>{
            message.error(`there was an error ${err.message}`,10)
            window.location.replace("/train/1");
        })
    }
    return (
        <div className="expertise">
            <div
                className="expertise__train_button"
                onClick={trainModel}
            >
                TRAIN
            </div>
        </div>
    )
}

Expertise.propTypes = {
    state: PropTypes.instanceOf(Object).isRequired
}
