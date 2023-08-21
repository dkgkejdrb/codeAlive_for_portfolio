import { Carousel, Button } from "antd";
import { useState } from "react";
import banner0 from "../Assets/banner0.png"
import banner1 from "../Assets/banner1.png"
import banner2 from "../Assets/banner2.png"
import banner3 from "../Assets/banner3.png"
import banner4 from "../Assets/banner4.png"
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';


// https://react-slick.neostack.com/docs/api/

const contentStyle0 = {
    window: '100%',
    height: '400px',
    backgroundImage: `url(${banner0})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};

const contentStyle1 = {
    window: '100%',
    height: '400px',
    backgroundImage: `url(${banner1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};

// const contentStyle2 = {
//     window: '100%',
//     height: '600px',
//     backgroundImage: `url(${banner2})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center'
// };

// const contentStyle3 = {
//     window: '100%',
//     height: '600px',
//     backgroundImage: `url(${banner3})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center'
// };

// const contentStyle4 = {
//     window: '100%',
//     height: '600px',

//     backgroundImage: `url(${banner4})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center'
// };



const MainBanner = () => {
    // 재생, 일시정지 상태값
    const [play, setPlay] = useState(true)
    // 재생, 일시정지 아이콘
    const [icon, setIcon] = useState(()=> { return(<PauseOutlined />);})
    const btnHandler = (e) => {
        if (play) {
            setPlay(false)
            setIcon(()=> { return(<CaretRightOutlined />);})
        } else {
            setPlay(true)
            setIcon(()=> { return(<PauseOutlined />);})
        }
    }

    return (
        <div className="mainBanner"
        style={{
            position: "relative"
        }}
        >
            <div className="carouselWrap">
                <Carousel 
                autoplay={play} autoplaySpeed={3000}
                >
                    <div>
                        <div style={contentStyle0}></div>
                    </div>
                    <div>
                        <div style={contentStyle0}></div>
                    </div>
                    {/* <div>
                        <div style={contentStyle1}></div>
                    </div>
                    <div>
                        <div style={contentStyle2}></div>
                    </div>
                    <div>
                        <div style={contentStyle3}></div>
                    </div>
                    <div>
                        <div style={contentStyle4}></div>
                    </div> */}
                </Carousel>
                <button
                onClick={(e) => btnHandler(e)} 
                style={{
                    backgroundColor: "transparent",
                    border: 'none',
                    width: '12px',
                    height: '11px',
                    fontSize: '5px',
                    position: 'absolute',
                    bottom: '5%',
                    right: '46.8%',
                    fontSize: '12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    zIndex: '10',
                    }}>
                    {icon}
                    </button>
            </div>
        </div>
    );
}

export default MainBanner;