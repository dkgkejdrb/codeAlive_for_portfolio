import Header2 from './Header2';
import introductionFirstLineBackground from '../Assets/introductionFirstLineBackground.png'
import { Image, Card } from 'antd';
import imoji1 from '../Assets/imoji1.png';
import chat1 from '../Assets/chat1.png';
import imoji2 from '../Assets/imoji2.png';
import chat2 from '../Assets/chat2.png';
import imoji3 from '../Assets/imoji3.png';
import chat3 from '../Assets/chat3.png';
import imoji4 from '../Assets/imoji4.png';
import chat4 from '../Assets/chat4.png';
import secondLineImage1 from '../Assets/secondLineImage1.png';
import secondLineImage2 from '../Assets/secondLineImage2.png';
import secondLineImage3 from '../Assets/secondLineImage3.png';
import logoGrey from '../Assets/logoGrey.svg';
import introductionThirdLineImage1 from '../Assets/introductionThirdLineImage1.png';
import introductionThirdLineImage2 from '../Assets/introductionThirdLineImage2.png';
import introductionFourthLineImage from '../Assets/introductionFourthLineImage.png';
import introductionFifthLineImage from '../Assets/introductionFifthLineImage.png';
import logoAllWhite from '../Assets/logoAllWhite.svg';
import Footer from "./Footer.js";
import Contact from './Contact';

const { Meta } = Card;

const cardStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center',  width: 566, height: 679, borderRadius: 50, boxShadow: '3px 9px 19px 6px rgba(0, 0, 0, 0.06)'};

const Introduction = () => {
    return (
        <div
            className="introduction"
            style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden'
            }}
            >
                <Header2 />
                <Contact />
                <div
                    style={{
                        paddingTop: '86px',
                        width: '100%',
                        height: '907px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: '#ECF2FF',
                        backgroundSize: 'contain',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '38px', color: '#323232' }}>
                        혹시 이런 생각해 보셨나요?
                    </div>
                    <div style={{ marginTop: '3px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '26px', color: '#323232' }}>
                        텍스트 코딩에 대한 당신의 생각은?
                    </div>

                    <div className='chatWrap' style={{ marginTop: '52px', width: '1212px', height: '527px', position: 'relative' }}>
                        <div style={{ position: 'absolute' }}>
                            <Image preview={false} src={imoji1} width={249} height={249}></Image>
                            <Image preview={false} src={chat1} width={229.15} height={78.91}></Image>
                            <span 
                            className='typingEffect'
                            style={{
                                top: '100px',
                                left: '290px',
                            }}
                            >코딩은 어려워...</span>
                        </div>
                        <div style={{ position: 'absolute',
                                top: '30px',
                                right: '0px',
                            }}>
                            <Image preview={false} src={chat2} width={350.47} height={74.51}></Image>
                            <Image preview={false} src={imoji2} width={204} height={269}></Image>
                            <span 
                            className='typingEffect typingEffect2'
                            style={{
                                top: '110px',
                                left: '30px'
                            }}
                            >그냥 외우는게 공식 아니야?</span>
                        </div>
                        <div style={{ position: 'absolute',
                                top: '210px',
                                left: '-20px',
                            }}>
                            <Image preview={false} src={imoji3} width={243.51} height={243.51}></Image>
                            <Image preview={false} src={chat3} width={382} height={88.68}></Image>
                            <span 
                                className='typingEffect typingEffect3'
                                style={{
                                    top: '95px',
                                    left: '280px'
                                }}
                            >그대로 따라가기만 하라던데...</span>
                        </div>
                        <div style={{ position: 'absolute',
                                top: '310px',
                                right: '0px',
                            }}>
                            <Image preview={false} src={chat4} width={285} height={83}></Image>
                            <Image preview={false} src={imoji4} width={242} height={242}></Image>
                            <span 
                            className='typingEffect typingEffect4'
                            style={{
                                top: '95px',
                                right: '295px'
                            }}
                            >너무 재미없어...</span>
                        </div>
                    </div>
                </div>

                <div className='secondLine' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '676px', backgroundColor: '#FFFFFF' }}>
                    <div style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '38px', color: '#323232' }}>
                        우리는 바꾸고 싶었습니다.
                    </div>
                    <div className='contentsWrap' style={{ marginTop: '33px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            className='firstImage' 
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  }}>
                            <Image preview={false} src={secondLineImage1} width={285} height={284}></Image>
                            <div style={{ marginTop: '23px', width: '375px', textAlign: 'center', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '22px', color: '#636363' }}>
                                문법 위주의 교육을 탈피하고, 컴퓨터와 대화하는 프로그래밍 교육으로
                            </div>
                        </div>
                        <div
                            className='secondImage' 
                            style={{ marginLeft: '68px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                            <Image preview={false} src={secondLineImage2} width={398} height={218}></Image>
                            <div style={{ marginTop: '90px', width: '375px', textAlign: 'center', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '22px', color: '#636363' }}>
                                따라하기보다는<br></br>스스로 문제를 고민하고 해결하도록
                            </div>
                        </div>
                        <div
                            className='thirdImage' 
                            style={{ marginLeft: '121px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  }}>
                            <Image preview={false} src={secondLineImage3} width={307} height={218}></Image>
                            <div style={{ marginTop: '80px', width: '375px', height: '78px', textAlign: 'center', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '22px', color: '#636363', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                쉽고, 흥미롭게 배우도록
                            </div>
                        </div>
                    </div>
                </div>

                <div className='thirdLine' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '1056px', backgroundColor: '#F0F0F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1120px', height: '100px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '40px', color: '#474747' }}>
                        <span style={{ paddingTop: '25px' }}>그래서 우리는</span>
                        <Image style={{ marginLeft: '15px' }} preview={false} src={logoGrey} width={297.01} height={66.54}></Image>
                        <span style={{ marginLeft: '40px', paddingTop: '25px' }}>를 만들었습니다.</span>
                    </div>
                    <div className='cards' style={{ paddingTop: '27px', display: 'flex' }}>
                    <Card
                        style={cardStyle}
                        // onMouseOver={()=>{setScale({image1: 1.1, image2: 1, image3: 1})}}
                        // onMouseOut={()=>{setScale({image1: 1, image2: 1, image3: 1})}}
                        cover={
                            <img 
                                src={introductionThirdLineImage1}
                                style={{ 
                                    marginTop: '31px',
                                    width: '505px',
                                    height: '296px', 
                                // transform: `scale(${scale.image1})`
                                }}>
                            </img>
                        }
                    >
                        <div style={{ 
                            width: '486.01px', lineHeight: '145.02%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', color: '#383838'
                        }}>
                        세계적인 실시간 3D 플랫폼 기업인 유니티와 함께요. 크레버스의 사고력 교육 노하우와 유니티의 기술력이 만나 탄생한 CodeAlive는 기존 코딩 교육 프로그램에서는 볼 수 없었던 
완전 새로운 방식의 파이썬 교육을 제공합니다
                        </div>

                        <div className='tags' style={{ marginTop : '56.55px', width: '100%', display: 'flex' }}>
                            <div
                                style={{ width: '112px', height: '52px', display:'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(238, 238, 238, 0.9)', borderRadius: '80px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', letterSpacing: '-0.01em', color: '#383838'}}>
                                #코린이
                            </div>
                            <div
                                style={{ width: '186px', height: '52px', marginLeft: '13px', display:'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(238, 238, 238, 0.9)', borderRadius: '80px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', letterSpacing: '-0.01em', color: '#383838'}}>
                                #크레버스 사고력
                            </div>
                        </div>
                    </Card>
                    <Card
                        style={cardStyle}
                        // onMouseOver={()=>{setScale({image1: 1.1, image2: 1, image3: 1})}}
                        // onMouseOut={()=>{setScale({image1: 1, image2: 1, image3: 1})}}
                        cover={
                            <img 
                                src={introductionThirdLineImage2}
                                style={{ 
                                    marginTop: '31px',
                                    width: '505px',
                                    height: '296px', 
                                // transform: `scale(${scale.image1})`
                                }}>
                            </img>
                        }
                    >
                        <div style={{ 
                            width: '486.01px', lineHeight: '145.02%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', color: '#383838'
                        }}>
                        코딩 입문자도 쉽고 재미있게 파이썬을 배울 수 있는 codeAlive는 무한한 창의력으로 진짜 세상을 코딩할 수 있도록 이끌어갑니다
                        </div>

                        <div className='tags' style={{ marginTop : '56.55px', width: '100%', display: 'flex' }}>
                            <div
                                style={{ width: '223px', height: '52px', display:'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(238, 238, 238, 0.9)', borderRadius: '80px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', letterSpacing: '-0.01em', color: '#383838'}}>
                                #무한한창의력향상
                            </div>
                            <div
                                style={{ width: '113px', height: '52px', marginLeft: '13px', display:'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(238, 238, 238, 0.9)', borderRadius: '80px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', letterSpacing: '-0.01em', color: '#383838'}}>
                                #파이썬
                            </div>
                        </div>
                    </Card>
                    </div>
                </div>

                <div className='fourthLine' style={{ width: '100%', height: '540px', backgroundColor: '#F7F7F7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '705px', height: '287px' }}>
                        <div style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '40px', color: '#2F2F2F', letterSpacing: '-0.04em', lineHeight: '146.02%' }}>컴퓨터의 진짜 언어를 배우기 시작할 때<br></br>배움을 포기하지 않고,<br></br>무한한 세상을 만들어 나가도록</div>
                        <div style={{ marginTop: '29px', position: 'relative', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '36px', color: '#2F2F2F', lineHeight: '153.02%'  }}>
                            "우리는 코딩 교육을 바꾸고 있습니다."
                            <div style={{ position: 'absolute', left: '-10px' , bottom: "0px", width: '600px', height: '9px', backgroundColor: 'rgba(66, 123, 255, 0.5)' }}>

                            </div>
                        </div>
                    </div>
                    <div style={{ width: '582.24px', height: '513.64px' }}>
                        <Image preview={false} src={introductionFourthLineImage}></Image>
                    </div>

                </div>

                <div className='fifthLine' style={{ width: '100%', height: '529px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${introductionFifthLineImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '38px', color: '#FFFFFF', lineHeight: '161.52%' }}>
                        크레버스와 유니티가 함께 만들어가는<br></br>완전 새로운 방식의 코딩 교육 프로그램
                    </div>
                    <div style={{ marginTop: '35px', display: 'flex', alignItems: 'center' }}>
                        <Image preview={false} src={logoAllWhite}></Image>
                        <span style={{ paddingTop: '20px', marginLeft: '20px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '38px', color: '#FFFFFF', }}>
                            를 만나보세요</span>
                    </div>
                </div>

                <Footer />
        </div>
    );
}

export default Introduction;