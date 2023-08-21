import React, { useEffect, useState } from 'react';
import { Link as LinkToRegsiter } from 'react-scroll';
import { Link } from 'react-router-dom';
import contactBtn from "../Assets/contactBtn.svg"
import contactArrow from "../Assets/contactArrow.svg"
import contactArrow2 from "../Assets/contactArrow2.svg"

const Contact = () => {
    const [displayValue, setDisplayValue] = useState('none');

    useEffect(() => {
        window.addEventListener('scroll', DisplayOn, { capture: true });
    }, []);

    const DisplayOn = () => {
        if (window.scrollY <= 0) {
            setDisplayValue('none');
        }
        else {
            setDisplayValue('');
        }
    }
    // LinkToRegister 도입 문의 새페이지로 이동
    return (
      <div className="ContactWrap">
        <Link
          className="ContactBtn"
          to="/contact"
          style={{
            backgroundImage: `url(${contactBtn})`,
            display: displayValue,

            alignItems: "center",
            justifyContent: "flex-start",
            textDecoration: "none",
            position: "fixed",
            bottom: "19%",
            right: "2%",
            width: "203px",
            height: "72px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: "0.3s ease-in-out",
            zIndex: "10",
          }}
        ></Link>
        <LinkToRegsiter
          className="ContactSliderBtn"
          to="/"
          spy={true}
          smooth={true}
          style={{
            cursor: "pointer",
            position: "fixed",
            bottom: "11%",
            right: "2.4%",
            width: "67px",
            height: "67px",
            borderRadius: "50%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            transition: "0.3s ease-in-out",
            backgroundImage: `url(${contactArrow2})`,
            display: displayValue,
            zIndex: "99999",
          }}
        >
          <h1></h1>
        </LinkToRegsiter>
      </div>
    );
}

export default Contact;