import { Link } from 'react-scroll';
import React, {useEffect, useState} from 'react';

const Contact = () => {
    const [displayValue, setDisplayValue] = useState('none');

    useEffect(() => { 
        window.addEventListener('scroll', DisplayOn, { capture : true });
}, []);

    const DisplayOn = () => {
        if(window.scrollY <=0 ) {
            setDisplayValue('none');
        }
        else {
            setDisplayValue('');
        }
    }

    return (
        <div className='ContactWrap'>
            <a className='ContactBtn'>
                <h2>
                    도입<br></br>문의
                </h2>
            </a>
            <Link className='ContactSliderBtn' to='/#home' spy={true} smooth={true} style={{cursor:'pointer', display : displayValue}}>
                <h1>
                    ^
                </h1>
            </Link>
        </div>
    );
}

export default Contact;