import React from 'react';
import '../styles/icon.css';
import stethoscopeImg from '../images/stethoscope.png';

const Peticon = () => {
    return ( 
        <a href="/">
            <div className="label">
                <img src={stethoscopeImg} alt='pupIcon' className='pupIcon'/>  
                <p className="puphub">
                    <b>
                        <span className="text-wrapper">Pup</span>
                        <span className="span">hub</span>
                    </b>
                </p>
            </div>
        </a>
     );
}
 
export default Peticon;


     