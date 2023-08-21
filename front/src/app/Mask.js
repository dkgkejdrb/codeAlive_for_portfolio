import mask from "../Assets/mask.png"
import mask1 from "../Assets/mask1.png"
import { useEffect, useState } from "react";
import { SCALE_MODES } from "pixi.js";

// 마스크-블루
import MaskBlue from "../Assets/maskBlue.png";

const Mask = () => {
    const [maskScale, setMaskScale] = useState(1);

    // 마우스 스크롤 기능 사용시 활용
    // useEffect(() => {
    //     window.addEventListener('scroll', changeScale, { capture: true });
    // }, []);

    // const changeScale = () => {
    //     setMaskScale(1 + (window.scrollY*0.003));
    // }

    useEffect(() => {
    // setInterval(() => {

    //         if(maskScale >= 3)
    //         {
    //             return;
    //         } else {
    //             setMaskScale(maskScale+0.1);
    //         }
    //         console.log(maskScale);
    //     }, 1000);
    setMaskScale(3);
    
    }, []);

    return (
        <>
            <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${mask1})`,
                // backgroundImage: `url(${MaskBlue})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'absolute',
                top: '0px',
                transform: `scale(${maskScale})`,
                transition: '5s',
                opacity: '0.5',
                zIndex: '1'
            }}></div>
        </>
    );
}

export default Mask;