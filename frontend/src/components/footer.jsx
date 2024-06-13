import React from 'react';
import Peticon from "./icon";
import '../styles/footer.css';
import phoneImg from '../images/phone.png';
import whatsappImg from '../images/whatsapp.png';
import facebookImg from '../images/facebook.png';
import instagramImg from '../images/instagram.png';

const Footer = () => {
    return ( 
        <div className="hr">
            <hr className="top-boarder" style={{marginLeft:'100px'}}/>
            <div className="footer">
                <div className="peticon">
                    <div className="t1"> 
                        <Peticon/><br/>TakeCare Your Pet....<br/> 
                        <br/>
                        <div className="address">
                            273/1, Negambo Road,<br/>
                            Kurunagala.<br/><br/>

                            Open Hours:<br/>

                            Mon to Sat: 9.30am - 7.30pm<br/>
                            Sun: 9.30am - 7pm
                        </div>
                    </div>
                </div>
                <div className="fotcontent" style={{marginLeft:'200px'}}> 
                    <h2 className="quest"><u>Quick Links...</u></h2>
                    <ul className="pages" style={{marginLeft:'80px'}}>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>Services</li>
                        <li>Contacts</li>
                        <li>Pet Care</li>
                    </ul>
                </div>
                <div className="fotcontent"> 
                    <h2 className="quest"><u>Have A Question?</u></h2>
                    <div className="question">
                        <img src={phoneImg} alt='home' className='quiz'/>
                        <label>:+94 75 1785 584</label><br/>
                        <img src={whatsappImg} alt='home' className='quiz1'/>
                        <label>:+94 75 177 7784</label>   
                    </div>
                </div>
                <div className="fotcontent" style={{marginLeft:'150px'}}> 
                    <div className="fotcontent-container"> 
                        <div className="follow">
                            <h2 className="quest"><u>Follow Us </u></h2>
                            <div className="contact"> 
                                <img src={facebookImg} alt='home' className='phoneicon'/>
                                <img src={instagramImg} alt='home' className='phoneicon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;

