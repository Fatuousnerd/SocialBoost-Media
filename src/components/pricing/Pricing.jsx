import './pricing.scss';
import { Data } from './Data';
import PricingMobile from "./pricingMobile/PricingMobile";
import useDeviceType from "../useDeviceType/useDeviceType";
import ExtForm from "../order/ExtForm";
import { createContext, useContext, useState } from 'react';
import { AppearContext } from '../services/Services';
import { ThemeContext } from '../../utils/ThemeContext';
import { useSharedState } from '../order/SharedContext';

const Content = ({ item }) => {

    const { sharedState, setSharedState } = useSharedState();

    const handleClose = () => {
        setSharedState(true)
        console.log(sharedState);
        
    }

    return (
        <>
            <button onClick={handleClose}>
                <div className="content">
                    <h1>{item.name}</h1>
                    <p className='desc'>{item.desc}</p>
                    <div className="bn">
                        {item.text.map((line, index) => (
                            <p className='txt' key={index}>{line}</p>
                        ))}
                    </div>
                    <p className='cta'><i>{item.cta}</i></p>
                    <p className="price">{item.price}</p>
                </div>
            </button>
        </>
    )
};
// export const HereContext = createContext()

const Pricing = () => {

    const { sharedState, setSharedState } = useSharedState();
    
    const { isMobile, isTablet, isDesktop } = useDeviceType();

    return (
        <>
                {isDesktop &&
                    <div className="pricing" id='pricing'>
                        {sharedState && <ExtForm />}
                        {Data.map(item => (
                            <Content key={item.id} item={item} />
                        ))}
                    </div>
                }
                {isMobile && <PricingMobile />}
        </>
    )
}

export default Pricing