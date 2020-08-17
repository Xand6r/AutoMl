import React, { useState, useEffect , useCallback } from 'react';
import axios from '../../../axios';
import {component as NavBar} from '../../../utilities/navbar';
import {
    SettingTwoTone, CaretRightOutlined 
} from '@ant-design/icons';
import PanelHeader from '../subcomponents/panel';
import {
    Collapse, Spin, notification 
} from 'antd';
import './model.scss';



const { Panel } = Collapse;
const text = (
    <p style={{ paddingLeft: 24 }}>
     Further statistics will be displayed here .... coming soon
    </p>
  );



export default function Model() {
    const [models, setModels ] = useState([]);

    const close = () => {
        // reload the page to trigger the alert
        window.location.reload()
    };
    const openNotification = useCallback(() => {
        const key = `open${Date.now()}`;
        notification.open({
          message: 'Error Fetching Models',
          description: `${"errormessage"}.\n we would keep trying, kindly check your internet`,
          key,
          onClose: close,
        });
    },[]);

    useEffect(() => {
        axios.get(`/aiml/models/all/`)
        .then(res => {
            const models = res.data.data.sort((a,b)=>b.id-a.id);
            setModels(models)
        })
        .catch((err) => {
            openNotification(err.message)
        })
    },[openNotification])

    return (
        <div className="model">
            {/* the navigation bar component */}
            <NavBar />
            {/* the navigation bar component */}

            {/* the headin text of the model page */}
            <div className="--heading">
                <div className="model__header">
                    <span>Models</span>
                    <SettingTwoTone
                        twoToneColor="#162359"
                    />
                </div>

                <div className="model__subheader">
                    Find the models which have been trained under your project here
                </div>
            </div>
            {/* the headin text of the model page */}

            {/* The collapse component to display the models information */}
            <Spin
                tip="Loading models"
                spinning={!models.length}
                delay={500}
            >
                <div className="model__collapse">
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        className="site-collapse-custom-collapse"
                    >
                    {
                        models.map((model, index) => (
                                <Panel 
                                    //{/* disabled */}
                                    header={
                                        <Spin
                                            tip="Model Currently Training "
                                            spinning={model.status === "MODEL_TRAINING"}
                                        >
                                            <PanelHeader
                                                title = {model.name}
                                                metrics = {model.metrics}
                                                type = {model.type}
                                            />
                                        </Spin>
                                    }
                                    key={model.id}
                                    className="site-collapse-custom-panel"
                                >
                                    <p>{text}</p>
                                </Panel>
                        ))
                    }

                    </Collapse>,
                </div>
            </Spin>
        </div>
    )
}
