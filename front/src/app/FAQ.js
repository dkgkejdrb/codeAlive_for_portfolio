import Header2 from "../app/Header2";
import { Button, Collapse } from "antd";
import { useEffect, useState } from "react";
import faqBtnUp from "../Assets/faqBtnUp.png";
import faqBtnDown from "../Assets/faqBtnDown.png";
import Contact from "./Contact";
import Footer from "./Footer";

const { Panel } = Collapse;



const FAQ = () => {




    const [ totalView, setTotalView ] = useState(false);
    const [ totalBack, setTotalBack ] = useState('#FFF');
    const [ totalColor, setTotalColor ] = useState('#000000');

    const [ informationView, setInformationView ] = useState(false);
    const [ informationBack, setInformationBack ] = useState('#FFF');
    const [ informationColor, setInformationColor ] = useState('#000000');

    const [ webuseView, setWebuseView ] = useState(false);
    const [ webuseBack, setWebuseBack ] = useState('#FFF');
    const [ webuseColor, setWebuseColor ] = useState('#000000');

    const [ purchaseView, setPurchaseView ] = useState(false);
    const [ purchaseBack, setPurchaseBack ] = useState('#FFF');
    const [ purchaseColor, setPurchaseColor ] = useState('#000000');


    // 처음 FAQ 화면 진입 시, '전체 탭' 클릭한 상태로 출력
    useEffect(()=>{
        setTotalView(true);
        setTotalBack('#000000');
        setTotalColor('#FFF');
    }, [])


    const [ isClicked1_1, setIsClicked1_1 ] = useState(false);
    const [ faqBtnHeight1_1, setFaqBtnHeight1_1] = useState('0');
    const [ faqBtnImage1_1, setFaqBtnImage1_1 ] = useState(`url(${faqBtnDown})`);
    const [ faqBtnBack1_1, setFaqBtnBack1_1 ] = useState('#EEEEEE');

    const [ isClicked1_2, setIsClicked1_2 ] = useState(false);
    const [ faqBtnHeight1_2, setFaqBtnHeight1_2] = useState('0');
    const [ faqBtnImage1_2, setFaqBtnImage1_2 ] = useState(`url(${faqBtnDown})`);
    const [ faqBtnBack1_2, setFaqBtnBack1_2 ] = useState('#EEEEEE');
    const [ isClicked1_3, setIsClicked1_3 ] = useState(false);

    const [ faqBtnHeight1_3, setFaqBtnHeight1_3] = useState('0');
    const [ faqBtnImage1_3, setFaqBtnImage1_3 ] = useState(`url(${faqBtnDown})`);
    const [ faqBtnBack1_3, setFaqBtnBack1_3 ] = useState('#EEEEEE');

    const [ isClicked1_4, setIsClicked1_4 ] = useState(false);
    const [ faqBtnHeight1_4, setFaqBtnHeight1_4] = useState('0');
    const [ faqBtnImage1_4, setFaqBtnImage1_4 ] = useState(`url(${faqBtnDown})`);
    const [ faqBtnBack1_4, setFaqBtnBack1_4 ] = useState('#EEEEEE');


    const btnHandler = (e) => {
        const id = e.target.id;
    
        if (id === 'tab_total' || id === 'tab_total_text' ) {
            setTotalView(true); setInformationView(false); setWebuseView(false); setPurchaseView(false); 
            setTotalBack('#000000'); setTotalColor('#FFF'); setInformationBack('#FFF'); setInformationColor('#000000');
            setWebuseBack('#FFF'); setWebuseColor('#000000'); setPurchaseBack('#FFF'); setPurchaseColor('#000000'); 
        }
        if (id === 'tab_information' || id === 'tab_information_text' ) {
            setTotalView(false); setInformationView(true); setWebuseView(false); setPurchaseView(false);
            setTotalBack('#FFF'); setTotalColor('#000000'); setInformationBack('#000000'); setInformationColor('#FFF');
            setWebuseBack('#FFF'); setWebuseColor('#000000'); setPurchaseBack('#FFF'); setPurchaseColor('#000000'); 
        }
        if (id === 'tab_webuse' || id === 'tab_webuse_text' ) {
            setTotalView(false); setInformationView(false); setWebuseView(true); setPurchaseView(false);
            setTotalBack('#FFF'); setTotalColor('#000000'); setInformationBack('#FFF'); setInformationColor('#000000');
            setWebuseBack('#000000'); setWebuseColor('#FFF'); setPurchaseBack('#FFF'); setPurchaseColor('#000000'); 
        }
        if (id === 'tab_purchase' || id === 'tab_purchase_text' ) {
            setTotalView(false); setInformationView(false); setWebuseView(false); setPurchaseView(true);
            setTotalBack('#FFF'); setTotalColor('#000000'); setInformationBack('#FFF'); setInformationColor('#000000');
            setWebuseBack('#FFF'); setWebuseColor('#000000'); setPurchaseBack('#000000'); setPurchaseColor('#FFF'); 
        }
    }

    // 펼치는 높이에 따라 setFaqBtnHeight 의 변수값 조절해야 함
    const faqBtnHandler1_1 = (e) => {
        if(isClicked1_1) {
            setIsClicked1_1(false);
            setFaqBtnHeight1_1('0px');
            setFaqBtnImage1_1(`url(${faqBtnDown})`);
            setFaqBtnBack1_1('#EEEEEE');
        } if(!isClicked1_1) {
            setIsClicked1_1(true);
            setFaqBtnHeight1_1('350px');
            setFaqBtnImage1_1(`url(${faqBtnUp})`);
            setFaqBtnBack1_1('rgb(252, 252, 252)');
        } 
    }

    const faqBtnHandler1_2 = (e) => {
        if(isClicked1_2) {
            setIsClicked1_2(false);
            setFaqBtnHeight1_2('0px');
            setFaqBtnImage1_2(`url(${faqBtnDown})`);
            setFaqBtnBack1_2('#EEEEEE');
        } if(!isClicked1_2) {
            setIsClicked1_2(true);
            setFaqBtnHeight1_2('350px');
            setFaqBtnImage1_2(`url(${faqBtnUp})`);
            setFaqBtnBack1_2('rgb(252, 252, 252)');
        }
    }

    const faqBtnHandler1_3 = (e) => {
        if(isClicked1_3) {
            setIsClicked1_3(false);
            setFaqBtnHeight1_3('0px');
            setFaqBtnImage1_3(`url(${faqBtnDown})`);
            setFaqBtnBack1_3('#EEEEEE');
        } if(!isClicked1_3) {
            setIsClicked1_3(true);
            setFaqBtnHeight1_3('350px');
            setFaqBtnImage1_3(`url(${faqBtnUp})`);
            setFaqBtnBack1_3('rgb(252, 252, 252)');
        }
    }

    const faqBtnHandler1_4 = (e) => {
        if(isClicked1_4) {
            setIsClicked1_4(false);
            setFaqBtnHeight1_4('0px');
            setFaqBtnImage1_4(`url(${faqBtnDown})`);
            setFaqBtnBack1_4('#EEEEEE');
        } if(!isClicked1_4) {
            setIsClicked1_4(true);
            setFaqBtnHeight1_4('350px');
            setFaqBtnImage1_4(`url(${faqBtnUp})`);
            setFaqBtnBack1_4('rgb(252, 252, 252)');
        }
    }

    return (
        <div className="faq" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Header2 />
            <Contact />
            <div className="Wrap" style={{ paddingTop: '85px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FCFCFC'  }}>
                <div className="wrap" style={{ width: '1450px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="Title&SubTitle" style={{ width: '100%', paddingTop: '139px' }}>
                        <div style={{ width: '100%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '35px', color: '#2D2D2D', textAlign: 'center' }}>FAQ</div>
                     <div style={{ width: '100%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '40px', color: '#2D2D2D', textAlign: 'center' }}>자주 묻는 질문</div>
                    </div>
                    <div className="Tabs" style={{ marginTop: '39px', display: 'flex' }}>
                        <div id={'tab_total'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: '345px', height: '70px', border: '1px solid #DFDFDF', borderRadius: '16px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: totalColor, backgroundColor: totalBack }}
                        onClick={(e)=>btnHandler(e)}>
                            <span id={'tab_total_text'}>전체</span>
                        </div>
                        <div id={'tab_information'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: '345px', height: '70px', border: '1px solid #DFDFDF', borderRadius: '16px', marginLeft: '21px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: informationColor, backgroundColor: informationBack }}
                        onClick={(e)=>btnHandler(e)}>
                            <span id={'tab_information_text'}>수강안내</span>
                        </div>
                        <div id={'tab_webuse'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: '345px', height: '70px', border: '1px solid #DFDFDF', borderRadius: '16px', marginLeft: '21px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: webuseColor, backgroundColor: webuseBack }}
                        onClick={(e)=>btnHandler(e)}>
                            <span id={'tab_webuse_text'}>사이트이용</span>
                        </div>
                        <div id={'tab_purchase'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: '345px', height: '70px', border: '1px solid #DFDFDF', borderRadius: '16px', marginLeft: '21px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: purchaseColor, backgroundColor: purchaseBack }}
                        onClick={(e)=>btnHandler(e)}>
                            <span id={'tab_purchase_text'}>결제 / 환불</span>
                        </div>
                    </div>
                    <div className="Contents" style={{ width: '100%', height: '100%', marginTop: '83px' }}>
                        {
                            totalView?
                                <div className="total">
                                    <div className="totalQ1">
                                        <div className="q1" style={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '66px', 
                                            backgroundColor: faqBtnBack1_1, 
                                            borderRadius: '16px',
                                        }}>
                                            <span style={{ width: '50%', marginLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: '#373737' }}>
                                                Q. PC로 수강할 수 있나요?
                                            </span>
                                            {/* 버튼 */}
                                            <div className="faqBtn" style={{ marginLeft: '486px', width: '23px', height: '14px', 
                                            backgroundImage: faqBtnImage1_1, 
                                            cursor: 'pointer',
                                            backgroundPosition: 'center'
                                            }}
                                            onClick={(e) => faqBtnHandler1_1(e)}
                                            >
                                            </div>
                                        </div>
                                        {/* 버튼 눌렀을 때, height이 0으로 축소 */}
                                        <div className="a1" style={{ transition: '0.5s ease-in-out', height: faqBtnHeight1_1, overflow: 'hidden', marginTop: '28px', paddingLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '18px', color: '#000000', lineHeight: '185%' }}>
                                            <span>
                                            PC로도 이용하실 수 있습니다.<br></br>   
                                            (1) 클래스유 홈페이지 우측 상단 로그인탭을 이용하여 결제한 계정으로 접속.<br></br>
                                            (2) 홈페이지 첫 화면 상단에 수강 중인 클래스를 클릭.<br></br>
                                            (3) 들어야하는 회차를 수강 후 미션 인증을 진행. - 결제한 계정이 기억나지 않거나, 로그인이 불가한 상태라면 고객센터로 문의바랍니다.<br></br><br></br>
                                            PC에서의 미션 인증 방법! (1)컨텐츠 수강 후, 화면 하단 미션인증 버튼을 클릭한다.<br></br>
                                            (2)사진과 내용을 입력하고 '↑' 버튼을 클릭하여 미션 인증을 진행한다. - 미션 인증 시 활동 포인트 150점이 주어집니다. 클래스를 수강 중이시라면 꼭 미션 인증을 해주세요~!
                                            </span>
                                        </div>
                                    </div>


                                    <div className="totalQ2">
                                        <div className="q1" style={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '66px', 
                                            backgroundColor: faqBtnBack1_2, 
                                            borderRadius: '16px',
                                        }}>
                                            <span style={{ width: '50%', marginLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: '#373737' }}>
                                                Q. 장학금 제도가 무엇인가요?
                                            </span>
                                            {/* 버튼 */}
                                            <div className="faqBtn" style={{ marginLeft: '486px', width: '23px', height: '14px', 
                                            backgroundImage: faqBtnImage1_2, 
                                            cursor: 'pointer', backgroundPosition: 'center'
                                            }}
                                            onClick={(e) => faqBtnHandler1_2(e)}
                                            >
                                            </div>
                                        </div>
                                        {/* 버튼 눌렀을 때, height이 0으로 축소 */}
                                        <div className="a2" style={{ transition: '0.5s ease-in-out',  
                                            height: faqBtnHeight1_2, 
                                            overflow: 'hidden', marginTop: '28px', paddingLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '18px', color: '#000000', lineHeight: '185%' }}>
                                            <span>
                                            PC로도 이용하실 수 있습니다.<br></br>   
                                            (1) 클래스유 홈페이지 우측 상단 로그인탭을 이용하여 결제한 계정으로 접속.<br></br>
                                            (2) 홈페이지 첫 화면 상단에 수강 중인 클래스를 클릭.<br></br>
                                            (3) 들어야하는 회차를 수강 후 미션 인증을 진행. - 결제한 계정이 기억나지 않거나, 로그인이 불가한 상태라면 고객센터로 문의바랍니다.<br></br><br></br>
                                            PC에서의 미션 인증 방법! (1)컨텐츠 수강 후, 화면 하단 미션인증 버튼을 클릭한다.<br></br>
                                            (2)사진과 내용을 입력하고 '↑' 버튼을 클릭하여 미션 인증을 진행한다. - 미션 인증 시 활동 포인트 150점이 주어집니다. 클래스를 수강 중이시라면 꼭 미션 인증을 해주세요~!
                                            </span>
                                        </div>
                                    </div>


                                    <div className="totalQ3">
                                        <div className="q1" style={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '66px', 
                                            backgroundColor: faqBtnBack1_3, 
                                            borderRadius: '16px',
                                        }}>
                                            <span style={{ width: '50%', marginLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: '#373737' }}>
                                                Q. 미션인증은 어떻게 하나요?
                                            </span>
                                            {/* 버튼 */}
                                            <div className="faqBtn" style={{ marginLeft: '486px', width: '23px', height: '14px', 
                                            backgroundImage: faqBtnImage1_3, 
                                            cursor: 'pointer', backgroundPosition: 'center'
                                            }}
                                            onClick={(e) => faqBtnHandler1_3(e)}
                                            >
                                            </div>
                                        </div>
                                        {/* 버튼 눌렀을 때, height이 0으로 축소 */}
                                        <div className="a1" style={{ transition: '0.5s ease-in-out',  
                                            height: faqBtnHeight1_3, 
                                            overflow: 'hidden', marginTop: '28px', paddingLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '18px', color: '#000000', lineHeight: '185%' }}>
                                            <span>
                                            PC로도 이용하실 수 있습니다.<br></br>   
                                            (1) 클래스유 홈페이지 우측 상단 로그인탭을 이용하여 결제한 계정으로 접속.<br></br>
                                            (2) 홈페이지 첫 화면 상단에 수강 중인 클래스를 클릭.<br></br>
                                            (3) 들어야하는 회차를 수강 후 미션 인증을 진행. - 결제한 계정이 기억나지 않거나, 로그인이 불가한 상태라면 고객센터로 문의바랍니다.<br></br><br></br>
                                            PC에서의 미션 인증 방법! (1)컨텐츠 수강 후, 화면 하단 미션인증 버튼을 클릭한다.<br></br>
                                            (2)사진과 내용을 입력하고 '↑' 버튼을 클릭하여 미션 인증을 진행한다. - 미션 인증 시 활동 포인트 150점이 주어집니다. 클래스를 수강 중이시라면 꼭 미션 인증을 해주세요~!
                                            </span>
                                        </div>
                                    </div>


                                    <div className="totalQ4">
                                        <div className="q1" style={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '66px', 
                                            backgroundColor: faqBtnBack1_4, 
                                            borderRadius: '16px',
                                        }}>
                                            <span style={{ width: '50%', marginLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '24px', color: '#373737' }}>
                                                Q. 클래스는 어떻게 신청하나요?
                                            </span>
                                            {/* 버튼 */}
                                            <div className="faqBtn" style={{ marginLeft: '486px', width: '23px', height: '14px', 
                                            backgroundImage: faqBtnImage1_4, 
                                            cursor: 'pointer', backgroundPosition: 'center'
                                            }}
                                            onClick={(e) => faqBtnHandler1_4(e)}
                                            >
                                            </div>
                                        </div>
                                        {/* 버튼 눌렀을 때, height이 0으로 축소 */}
                                        <div className="a1" style={{ transition: '0.5s ease-in-out',  
                                            height: faqBtnHeight1_4, 
                                            overflow: 'hidden', marginTop: '50px', paddingLeft: '95px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '18px', color: '#000000', lineHeight: '185%' }}>
                                            <span>
                                            PC로도 이용하실 수 있습니다.<br></br>   
                                            (1) 클래스유 홈페이지 우측 상단 로그인탭을 이용하여 결제한 계정으로 접속.<br></br>
                                            (2) 홈페이지 첫 화면 상단에 수강 중인 클래스를 클릭.<br></br>
                                            (3) 들어야하는 회차를 수강 후 미션 인증을 진행. - 결제한 계정이 기억나지 않거나, 로그인이 불가한 상태라면 고객센터로 문의바랍니다.<br></br><br></br>
                                            PC에서의 미션 인증 방법! (1)컨텐츠 수강 후, 화면 하단 미션인증 버튼을 클릭한다.<br></br>
                                            (2)사진과 내용을 입력하고 '↑' 버튼을 클릭하여 미션 인증을 진행한다. - 미션 인증 시 활동 포인트 150점이 주어집니다. 클래스를 수강 중이시라면 꼭 미션 인증을 해주세요~!
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            : informationView?
                                <>수강안내</>
                            : webuseView?
                                <>사이트이용</>
                            : purchaseView &&
                                <>결제 / 환불</>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;