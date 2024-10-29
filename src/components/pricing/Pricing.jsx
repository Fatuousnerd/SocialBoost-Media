import './pricing.scss';
import { Data } from './Data';
import PricingMobile from "./pricingMobile/PricingMobile";
import useDeviceType from "../useDeviceType/useDeviceType";

const Content = ({ item }) => {
    return (
        <>
            <a href={item.link}>
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
            </a>
        </>
    )
};

const Pricing = () => {
    const { isMobile, isTablet, isDesktop } = useDeviceType();
    return (
        <>
            {isDesktop &&
                <div className="pricing" id='pricing'>
                    {Data.map(item => (
                        <Content key={item.id} item={item} />
                    ))}
                </div>
            }
            {isMobile && <PricingMobile/>}
        </>
    )
}

export default Pricing