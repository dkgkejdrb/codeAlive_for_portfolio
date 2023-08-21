import Header from "../app/Header.js"
import MainBanner from "../app/MainBanner.js"
import VideoWrap from "../app/VideoWrap.js"

import StarWarp from "./StarWarp.js";
import Mask from "./Mask.js";

import planet from "../Assets/planet.png"
import planetWithText from "../Assets/planetWithText.png"
import planetWithText2 from "../Assets/planetWithText2.png"

import arrow from "../Assets/arrow.svg"

import Programs from "../app/Programs.js"

import Contact from "../app/Contact.js"

import ThirdLine from "./ThirdLine.js";



// 로딩 기능 구현을 위한 셋팅
import { useEffect, useState } from 'react';
import Loading from "../app/loading.js"
import FourthLine from "./FourthLine.js";
import FifthLine from "./FifthLine.js";
import Footer from "./Footer.js";


const MainPage = () => {
    const [arrowBox, setArrowBox] = useState('hidden');
    // 송차장님 솔루션
    // const [backImg, setBackImg] = useState(null);

    useEffect(()=> {
        // 송차장님 솔루션
        //Blob, base64
        // FileReader reader = new FileReader();
        // reader.onload = () => {
        //     setBackImg(reader.result)
        //     ;
        // }
        // reader.src = 'url';

        // const img = new Image();
        // img.onload = () => {
        //     // 이미지 로드 완료
        //     setTimeout(, 300);
        // }
        // img.src = 'url';
        document.body.style.cssText = `
        position: fixed;
        overflow-y: scroll;
    `;
        setTimeout(()=> {
            document.body.style.cssText = '';
            setArrowBox('');
        }, 2000);

        // 컴포넌트가 언마운트 될때 실행
        return () => {
            
        }
    }, [])
    // 로딩 기능 구현을 위한 셋팅 - 1
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get(hostUrl)
    //     .then((response) => {
    //         setLoading(false);
    //     });
    // }, []);


    // 로딩 기능 구현을 위한 셋팅 - 2
    // // 화면 로드 시, 처음에는 false, 데이터나 이미지 로딩 완료 시 true
    // const [isReady, setIsReady] = useState(false);
    // // 데이터 이미지 로딩 완료시 true
    // const onFinish = () => setIsReady(true);
    
    // // 데이터 이미지 등의 로딩이 완료 됐을 때 Promise 리턴
    // const startLoading = async () => {
    //     await new Promise((resolve) => setTimeout(resolve, 1000))
    // };
    
    // if(!isReady) {
    //     return (
    //         <Loading
    //             startAsync={startLoading}
    //             onFinish={onFinish}
    //             onError={console.error}
    //         ></Loading>
    //     );
    // } 
    return ( 
        <>
        {/* { loading ? <Loading /> : */}
        <div className="mainPage" style={{ overflow: 'hidden' }}>
            <>
            <Header />
            <Contact />
            <div
                style={{
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    overflowAnchor: 'none',
                    // background: `url(${planet})`,
                    background: `url(${planetWithText2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#00021B',
                }}>
                <div 
                    style={{
                        position: 'absolute', 
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        {/* <div
                            style={{
                                color: '#fff', 
                                fontFamily: `'Noto Sans', 'sans-serif'`,
                                fontWeight: '800',
                                fontSize: '60px',
                                lineHeight: '105.59px',
                                textShadow: '0px 2px 16px rgba(0, 0, 0, 0.85)',
                                textAlign: 'center',
                                fontFamily: 'thisHow',
                                marginLeft: '-10px'
                            }}>
                            메타버스에서 더 커질
                        </div>
                        <div
                            style={{
                                color: '#fff', 
                                fontFamily: `'Noto Sans', 'sans-serif'`,
                                fontWeight: '800',
                                fontSize: '60px',
                                lineHeight: '105.59px',
                                textShadow: '0px 2px 16px rgba(0, 0, 0, 0.85)',
                                textAlign: 'center',
                                fontFamily: 'thisHow',
                                marginLeft: '-10px'
                            }}>
                            우리의 코딩 플레이
                        </div> */}

                </div>
                <div
                    style={{
                        position: 'absolute', 
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        left: '15px',
                        alignItems : 'center'
                    }}>

                    <div
                        className="scrollBox"
                        style={{
                            width: '100px',
                            height: '100px',
                            marginTop: '20%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            visibility: arrowBox
                        }}>
                        <div
                            className="text"
                            style={{
                                color: '#fff', 
                                fontFamily: `'Noto Sans', 'sans-serif'`,
                                fontWeight: '600',
                                fontSize: '16px',
                            }}>
                            SCROLL</div>
                        <div
                            className="image"
                            style={{
                                width: '18px',
                                height: '25px',
                                marginTop: '6px',
                                backgroundImage: `url(${arrow})`,
                                backgroundSize: 'cover'
                            }}>
                        </div>
                    </div>

                </div>
                <Mask />
                <StarWarp />
            </div>
            <MainBanner />
            <VideoWrap 
                // VideoWrapSrc='./video.mp4' 
                VideoWrapSrc="https://www.codealive.co.kr/images/banner/mov_banner_creverse_v2.mp4"
            />
            <Programs />
            <ThirdLine />
            <FourthLine />
            <FifthLine />
            <Footer />
            </>  
        </div>
        {/* } */}
        </>
    );
}

export default MainPage;