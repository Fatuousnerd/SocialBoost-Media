import { useRef } from 'react';
import './popup.scss';
import { Close } from '@mui/icons-material';

const Popup = ({onClose}) => {
  
    const popRef = useRef()

    const closePop = (e) => {
        if(popRef.current === e.target){
            onClose()
        }
    }
    
    return (
    <>
        <div ref={popRef} onClick={closePop} className='popup'>
            <div className="close">
                <button onClick={onClose}><Close/></button>
            </div>
            <div className="modal">
                <h1>Policies & Terms</h1>
                <div className="text" id="terms">
                    <h2>Terms & Conditions</h2>
                    <p>
                    At SocialBoost Media, we are committed to providing exceptional digital marketing and web development services. 
                    By engaging with our services, you agree to comply with our terms and conditions. 
                    These include respecting our intellectual property rights, adhering to agreed payment schedules, and refraining from any actions that may harm our brand or services. 
                    We reserve the right to modify these terms at any time, and it is your responsibility to review them regularly. 
                    Your continued use of our services constitutes acceptance of any changes. 
                    Should you have any questions or concerns, please contact our support team.
                    </p>
                </div>
                <div className="text">
                    <h2>Privacy Policy</h2>
                    <p>
                    SocialBoost Media values your privacy and is dedicated to protecting your personal information. 
                    We collect and use your data solely for the purpose of delivering our services effectively. 
                    This includes managing your account, personalizing your experience, and improving our offerings. We implement robust security measures to ensure your data is safe from unauthorized access or disclosure. 
                    We do not share your information with third parties except as required by law or with your explicit consent. 
                    By using our services, you consent to our collection and use of your data in accordance with this policy.
                    </p>
                </div>
                <div className="text">
                    <h2>Cookies</h2>
                    <p>
                    Our website uses cookies to enhance your browsing experience and to gather information about how you interact with our site. 
                    Cookies help us understand your preferences, enabling us to provide you with a tailored experience. 
                    They also assist in tracking the effectiveness of our marketing campaigns and improving site functionality. 
                    By continuing to use our website, you agree to the use of cookies as described in our Cookies Policy. 
                    You can manage your cookie preferences through your browser settings, but please note that disabling cookies may affect your experience on our site.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup