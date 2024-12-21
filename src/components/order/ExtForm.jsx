import React, { useContext, useState } from 'react'
import './extform.scss';
import {StateProvider} from "./SharedContext.jsx"
import { AppearContext } from "../services/Services";
import { Close } from '@mui/icons-material';
import { useSharedState } from './SharedContext.jsx';

const ExtForm = () => {

    // const { appear, setAppear } = useContext(AppearContext)
    const { sharedState, setSharedState } = useSharedState();

    const handleDis = () => {
        setSharedState(false)
    }

    return (
        <>
            <div className='extform'>
                <div className="loading">
                    <div className="load"></div>
                    <div className="load"></div>
                    <div className="load"></div>
                </div>
                <iframe aria-label='Service Order Form' frameBorder="0" allow="camera;microphone" src='https://forms.zohopublic.com/calvinkmwauragm1/form/ServiceOrderForm/formperma/BNSmOuAfag_PrfnGgCWbeIpuiHj-jCq8AXPRH2lkf3o'></iframe>
                <button onClick={handleDis}><Close className='btn'/></button>
            </div>
        </>
    );
};

export default ExtForm