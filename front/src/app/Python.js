import pythonFirstLineBackgroundImage from '../Assets/pythonFirstLineBackgroundImage.png';
import pythonSecondLineImage1 from '../Assets/pythonSecondLineImage1.png';
import pythonSecondLineImage2 from '../Assets/pythonSecondLineImage2.png';
import pythonSecondLineImage3 from '../Assets/pythonSecondLineImage3.png';
import pythonSecondLineImage4 from '../Assets/pythonSecondLineImage4.png';

import pythonThirdLineBackgroundImage from '../Assets/pythonThirdLineBackgroundImage.png';
import pythonFifthLineBackgroundImage from '../Assets/pythonFifthLineBackgroundImage.png';
import pythonSixthLineSlideImage from '../Assets/pythonSixthLine.png';
import pythonSixthLineSlideImage11 from '../Assets/pythonSixthLineSlideImage11.png';
import pythonSixthLineSlideImage2 from '../Assets/pythonSixthLineSlideImage2.png';
import pythonSixthLineSlideImage21 from '../Assets/pythonSixthLineSlideImage21.png';
import pythonSixthLineSlideImage3 from '../Assets/pythonSixthLineSlideImage3.png';
import pythonSixthLineSlideImage31 from '../Assets/pythonSixthLineSlideImage31.png';
import pythonSixthLineSlideImage4 from '../Assets/pythonSixthLineSlideImage4.png';
import googleLogo from '../Assets/googleLogo.png';
import instagramLogo from '../Assets/instagramLogo.png';
import facebookLogo from '../Assets/facebookLogo.png';
import Footer from './Footer';
import Contact from './Contact';

import { Carousel, Image } from 'antd';

import Header2 from "../app/Header2";

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


const Python = () => {

    return (
        <div className="python" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Header2 />
            <Contact />
            <div style={{ width: '100%', height: '85px', background: '#26282F' }}></div>
            <div className="firstLine" style={{ width: '100%', height: '767px', backgroundImage: `url(${pythonFirstLineBackgroundImage})`, backgroundPosition: 'cover', backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#26282F' }}>
                <div className='textBox' style={{ marginLeft: '433px' }}>
                    <div className='title' style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '42px', color: '#fff', lineHeight: '153.02%' }}>
                        누구나 가장 빠르고 쉽게
                    </div>
                    <div className='text' style={{ marginTop: '30px', width: '538px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '22px', color: '#fff' }}>
                        코드얼라이브는 코딩 초보자도 쉽고 재미있게 파이썬 프로그래밍을 배울 수 있는 실시간 인터랙티브 코딩교육 플랫폼 입니다.<br></br>
                        유니티 엔진 기반의 혁신적인 프로그래밍은 미래를 준비하는 가장 빠른 방법을 안내합니다.
                    </div>
                </div>
            </div>

            <div className="secondLine" style={{ width: '100%', height: '695px', display: 'flex' }}>
                <div className='left' style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ marginTop: '155px', width: '629px', height: '369px', backgroundImage: `url(${pythonSecondLineImage1})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    </div>
                </div>
                <div className='right' style={{ width: '50%' }}>
                    <div className='textBox' style={{ marginTop: '202px', marginLeft: '134px' }}>
                        <div className='title' style={{ fontFamily: 'thisHow', fontWeight: '700', fontSize: '36px', color: '#3888FF' }}>
                            파이썬은 어떤 언어 일까요?
                        </div>
                        <div className='text' style={{ marginTop: '18px', width: '525.5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '22px', color: '#393939', lineHeight: '153.02%' }}>
                            ‘파이썬’은 가장 인기있는 프로그래밍 언어 중 하나입니다.
                            간결한 문법으로 입문자가 이해하기 쉽기 때문에 다양한 교육 기관에서 사용하고 있어요. 또한 인공지능(AI), 사물인터넷(IoT), 빅 데이터(Big data) 등 최신 기술 분야에서 많이 사용되면서 여러 기업에서 활용하고 언어입니다.
                        </div>
                    </div>
                </div>
            </div>

            <div className="thirdLine" style={{ width: '100%', height: '1053px', display: 'flex', flexDirection: 'column', backgroundImage: `url(${pythonThirdLineBackgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}>
                <div className='top' style={{ width: '100%', display: 'flex' }}>
                    <div className='left' style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                        <div className='textBox' style={{ marginRight: '111px', marginTop: '254px' }}>
                            <div className='title' style={{ fontFamily: 'thisHow', fontWeight: '700', fontSize: '36px', color: '#3888FF', lineHeight: '145%' }}>
                                많은 프로그래밍 언어들 중<br></br>왜 파이썬일까요?
                            </div>
                            <div className='text' style={{ width: '530px', marginTop: '18px', width: '525.5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '22px', color: '#393939', lineHeight: '153.02%' }}>
                            문법이 다른 프로그래밍 언어에 비해 간단하고, 직관적으로 이해하기 쉽기 때문에 입문자가 학습하기에 적합한 언어입니다. 실제로 “Hello, codeAlive!”라는 결과를 화면에 띄우기 위해 짜놓은 코드를 비교해보면 파이썬의 간결한 특성을 알 수 있습니다.
                            </div>
                        </div>
                    </div>
                    <div className='right' style={{ marginTop: '226px', width: '50%', display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ marginLeft: '111px', width: '577px', height: '363px', backgroundImage: `url(${pythonSecondLineImage2})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </div>
                <div className='bottom' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '190px' }}>
                </div>
            </div>

            <div className="fourthLine" style={{ width: '100%', height: '652px', display: 'flex', flexDirection: 'column'  }}>
                <div className='top' style={{ width: '100%', display: 'flex' }}>
                    <div className='left' style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                        <div className='textBox' style={{ marginRight: '111px', marginTop: '201px' }}>
                            <div className='title' style={{ fontFamily: 'thisHow', fontWeight: '700', fontSize: '36px', color: '#3888FF', lineHeight: '145%' }}>
                                빠른 개발 속도
                            </div>
                            <div className='text' style={{ width: '564px', marginTop: '18px', width: '525.5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '22px', color: '#393939', lineHeight: '153.02%' }}>
                                쉽고 간결한 문법 덕에 파이썬은 높은 생산성을 자랑합니다. 간결한 코드로 많은 작업을 수행할 수 있으며, 복잡한 구문으로 인한 오류 발생을 줄여 다른 프로그래밍 언어보다 빠른 개발이 가능합니다.
                            </div>
                        </div>
                    </div>
                    <div className='right' style={{ width: '50%', display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ marginLeft: '111px', width: '542px', height: '625px',backgroundImage: `url(${pythonSecondLineImage3})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fifthLine" style={{ width: '100%', height: '982px', display: 'flex', flexDirection: 'column', backgroundImage: `url(${pythonFifthLineBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}>
                <div className='top' style={{ width: '100%', display: 'flex' }}>
                    <div className='left' style={{ marginTop: '226px', width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                        <div style={{ marginRight: '111px', width: '551px', height: '371px', backgroundImage: `url(${pythonSecondLineImage4})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                    <div className='right' style={{ width: '50%', display: 'flex', justifyContent: 'flex-start' }}>
                        <div className='textBox' style={{ marginLeft: '111px', marginTop: '254px' }}>
                            <div className='title' style={{ fontFamily: 'thisHow', fontWeight: '700', fontSize: '36px', color: '#3888FF', lineHeight: '145%' }}>
                                높은 활용도
                            </div>
                            <div className='text' style={{ width: '530px', marginTop: '18px', width: '525.5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '30px', color: '#393939', lineHeight: '153.02%' }}>
                            플레이 AI에서 파이썬 다양한 데이터 분석, 머신러닝, 딥러닝 기초를 접할 수 있어요
                            </div>
                            <div className='text' style={{ width: '530px', marginTop: '18px', width: '525.5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '300', fontSize: '22px', color: '#393939', lineHeight: '153.02%' }}>
                            C언어가 임베디드 개발이나 시스템 프로그래밍,  java가 웹이나 앱개발에 특화되어 있다면 파이썬은 특정 분야에 국한되지 않고 데이터 분석, 머신러닝, 딥러닝, 웹 프로그래밍, 해킹보안 등 여러 분야에서 활용이 가능합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sixthLine" style={{ width: '100%', height: '100%', backgroundColor: '#F4F4F4' }}>
                <div className='Wrap' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                    <div className='title' style={{ marginTop: '149px', marginBottom: '61px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '36px', color: '#3888FF' }}>
                        우리는 왜 파이썬을 배워야할까요?
                    </div>
                </div>
                {/* 슬라이드를 감싸는 외부 영역, 똑같이 배경색 등의 설정이 필요함, 바닥 공간 띄우려면 paddingBottom 값 조정 */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '139px' }}>
                    <div style={{ width: '1452px' }}>
                    <Carousel dots={false} arrows autoplay>
                            <div>
                                <div style={{ width: '1452px', height: '764px', background: '#fff', display: 'flex' }}>
                                    <div className='left' style={{ width: '745px', height: '100%', paddingTop: '18px' }}>
                                        <Image preview={false} src={pythonSixthLineSlideImage}></Image>
                                    </div>
                                    <div className='right' style={{ width: '745px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div>
                                            <Image preview={false} src={pythonSixthLineSlideImage11}></Image>
                                            <div className='title' style={{ marginTop: '20px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '40px', color: '#333333' }}>
                                                업무 자동화
                                            </div>
                                            <div style={{ marginTop: '23px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '24px', color: 'rgba(51, 51, 51, 0.9)', lineHeight: '153.02%' }}>
                                                자료를 수집하거나 매일 반복적으로 하는<br></br>
                                                업무 프로세스를<br></br>
                                                자동화하면 업무 효율성을 높일 수 있어요.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '1452px', height: '764px', background: '#fff', display: 'flex' }}>
                                    <div className='left' style={{ width: '745px', height: '100%', paddingTop: '18px' }}>
                                        <Image preview={false} src={pythonSixthLineSlideImage2}></Image>
                                    </div>
                                    <div className='right' style={{ width: '745px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div>
                                            <Image preview={false} src={pythonSixthLineSlideImage21}></Image>
                                            <div className='title' style={{ marginTop: '20px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '40px', color: '#333333' }}>
                                                웹 서버 구축
                                            </div>
                                            <div style={{ marginTop: '23px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '24px', color: 'rgba(51, 51, 51, 0.9)', lineHeight: '153.02%' }}>
                                                파이썬의 웹 프레임워크인 장고(Django)로<br></br>
                                                웹 개발이 가능합니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '1452px', height: '764px', background: '#fff', display: 'flex' }}>
                                    <div className='left' style={{ width: '745px', height: '100%', paddingTop: '18px' }}>
                                        <Image preview={false} src={pythonSixthLineSlideImage3}></Image>
                                    </div>
                                    <div className='right' style={{ width: '745px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div>
                                            <Image preview={false} src={pythonSixthLineSlideImage31}></Image>
                                            <div className='title' style={{ marginTop: '20px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '40px', color: '#333333' }}>
                                                인공지능 기술
                                            </div>
                                            <div style={{ marginTop: '23px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '24px', color: 'rgba(51, 51, 51, 0.9)', lineHeight: '153.02%' }}>
                                            파이썬 라이브러리 텐서플로우<br></br>
                                            (TensorFlow)를 통해<br></br>
                                            ‘알파고’에 활용된 딥러닝 환경을 구축할 수<br></br>
                                            있어요.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '1452px', height: '764px', background: '#fff', display: 'flex' }}>
                                    <div className='left' style={{ width: '745px', height: '100%', paddingTop: '18px' }}>
                                        <Image preview={false} src={pythonSixthLineSlideImage4}></Image>
                                    </div>
                                    <div className='right' style={{ width: '745px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <div>
                                            <Image preview={false} src={pythonSixthLineSlideImage31}></Image>
                                            <div className='title' style={{ marginTop: '20px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '40px', color: '#333333' }}>
                                                데이터 분석
                                            </div>
                                            <div style={{ marginTop: '23px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '24px', color: 'rgba(51, 51, 51, 0.9)', lineHeight: '153.02%' }}>
                                                다양한 파이썬 라이브러리를 활용하면 엄청난<br></br>
                                                양의 데이터를 수집하고, 쉽게 분석할 수 있어<br></br>
                                                요. 분석한 데이터를 그래프 형태로 시각화하여<br></br>
                                                한 눈에 쉽게 파악할 수도 있습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Carousel>
                    </div>
                    </div>
            </div>

            <div className="seventhLine" style={{ width: '100%', height: '1317px', backgroundColor: '#fff' }}>
                <div className='Wrap' style={{ paddingTop: '306px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column',alignItems: 'center' }}> 
                    <div className='title' style={{ fontFamily: 'thisHow', fontWeight: '700', fontSize: '38px', color: '#3888FF' }}>
                        어떤 기업이 파이썬을 사용하고 있을까요?
                    </div>
                    <div style={{ marginTop: '17px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '300', fontSize: '28px', color: 'rgba(55, 55, 55, 0.8)' }}>
                        수많은 기업에서 파이썬을 사용하고 있습니다
                    </div>
                    <div style={{ marginTop: '113px', display: 'flex', justifyContent: 'center'}}>
                        <div style={{ width: '1400px' }}>
                            <Carousel dots={false} arrows autoplay slidesToShow={3}>
                            <div>
                                <div style={{ width: '445px', height: '579px', borderRadius: '44px', border: '1px solid #DDDDDD', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
                                    <div className='top' style={{ borderTopLeftRadius: '44px', borderTopRightRadius: '44px', width: '100%', height: '296px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FAFAFA' }}> 
                                        <div className='title' style={{ paddingTop: '3px', marginTop: '41px', width: '203px', height: '55px', borderRadius: '27px', backgroundColor: '#3888FF', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '30px', color: '#fff', textAlign: 'center' }}>
                                            Google
                                        </div>
                                        <Image preview={false} src={googleLogo} width={213} height={71} style={{ marginTop: '52px' }}></Image>
                                    </div>
                                    <div className='bottom' style={{ borderBottomLeftRadius: '44px', borderBottomRightRadius: '44px', paddingTop: '33px', width: '100%', height: '283px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }} >
                                        <div style={{ width: '297px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '20px', color: '#343434', letterSpacing: '-0.025em', lineHeight: '151.52%' }}>
                                            Google은 파이썬과 C++을 함께 사용하며, 파이썬으로 프로그램의 빠른 전달과 유지 관리가 필요한 부분에는 파이썬을 활용해 코드를 작성합니다. 그리고 파이썬을 C++, java와 함께 공식 서버 언어 중 하나로 채택했습니다
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '445px', height: '579px', borderRadius: '44px', border: '1px solid #DDDDDD', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
                                    <div className='top' style={{ borderTopLeftRadius: '44px', borderTopRightRadius: '44px', width: '100%', height: '296px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FAFAFA' }}> 
                                        <div className='title' style={{ paddingTop: '3px', marginTop: '41px', width: '203px', height: '55px', borderRadius: '27px', backgroundColor: '#FF7474', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '30px', color: '#fff', textAlign: 'center' }}>
                                            instagram
                                        </div>
                                        <Image preview={false} src={instagramLogo} width={128} style={{ marginTop: '18px' }}></Image>
                                    </div>
                                    <div className='bottom' style={{ borderBottomLeftRadius: '44px', borderBottomRightRadius: '44px', paddingTop: '33px', width: '100%', height: '283px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }} >
                                        <div style={{ width: '297px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '20px', color: '#343434', letterSpacing: '-0.025em', lineHeight: '151.52%' }}>
                                        2016년, 인스타그램 엔지니어가 처음부터 끝까지 파이썬으로 작성한 당고(Django) 웹 프레임워크를 배포했다. 그 후 인스타그램은 대규모로 파이썬 개발 유지를 위한 시간과 자원을 아낌없이 투자하기 시작했다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '445px', height: '579px', borderRadius: '44px', border: '1px solid #DDDDDD', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
                                    <div className='top' style={{ borderTopLeftRadius: '44px', borderTopRightRadius: '44px', width: '100%', height: '296px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FAFAFA' }}> 
                                        <div className='title' style={{ paddingTop: '3px', marginTop: '41px', width: '203px', height: '55px', borderRadius: '27px', backgroundColor: '#FFE37E', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '30px', color: '#3E3E3E', textAlign: 'center' }}>
                                            <span>facebook</span>
                                        </div>
                                        <Image preview={false} src={facebookLogo} width={134} style={{ marginTop: '18px' }}></Image>
                                    </div>
                                    <div className='bottom' style={{ borderBottomLeftRadius: '44px', borderBottomRightRadius: '44px', paddingTop: '33px', width: '100%', height: '283px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }} >
                                        <div style={{ width: '297px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '20px', color: '#343434', letterSpacing: '-0.025em', lineHeight: '151.52%' }}>
                                        페이스북 프로덕션 엔지니어는 파이썬을 사내 인기 언어 3위로 만들었다. 파이썬 라이브러리 접근이 쉬운 덕분에 다수 프로덕션 엔지니어가 개선 작업을 집중적으로 처리할 때, 직접 코드를 처음부터 끝까지 작성하지…
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '445px', height: '579px', borderRadius: '44px', border: '1px solid #DDDDDD', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
                                    <div className='top' style={{ borderTopLeftRadius: '44px', borderTopRightRadius: '44px', width: '100%', height: '296px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FAFAFA' }}> 
                                        <div className='title' style={{ paddingTop: '3px', marginTop: '41px', width: '203px', height: '55px', borderRadius: '27px', backgroundColor: '#3888FF', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '30px', color: '#fff', textAlign: 'center' }}>
                                            Google
                                        </div>
                                        <Image preview={false} src={googleLogo} width={213} height={71} style={{ marginTop: '52px' }}></Image>
                                    </div>
                                    <div className='bottom' style={{ borderBottomLeftRadius: '44px', borderBottomRightRadius: '44px', paddingTop: '33px', width: '100%', height: '283px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }} >
                                        <div style={{ width: '297px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '20px', color: '#343434', letterSpacing: '-0.025em', lineHeight: '151.52%' }}>
                                            Google은 파이썬과 C++을 함께 사용하며, 파이썬으로 프로그램의 빠른 전달과 유지 관리가 필요한 부분에는 파이썬을 활용해 코드를 작성합니다. 그리고 파이썬을 C++, java와 함께 공식 서버 언어 중 하나로 채택했습니다
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '445px', height: '579px', borderRadius: '44px', border: '1px solid #DDDDDD', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
                                    <div className='top' style={{ borderTopLeftRadius: '44px', borderTopRightRadius: '44px', width: '100%', height: '296px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FAFAFA' }}> 
                                        <div className='title' style={{ paddingTop: '3px', marginTop: '41px', width: '203px', height: '55px', borderRadius: '27px', backgroundColor: '#FF7474', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '30px', color: '#fff', textAlign: 'center' }}>
                                            instagram
                                        </div>
                                        <Image preview={false} src={instagramLogo} width={128} style={{ marginTop: '18px' }}></Image>
                                    </div>
                                    <div className='bottom' style={{ borderBottomLeftRadius: '44px', borderBottomRightRadius: '44px', paddingTop: '33px', width: '100%', height: '283px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }} >
                                        <div style={{ width: '297px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '20px', color: '#343434', letterSpacing: '-0.025em', lineHeight: '151.52%' }}>
                                        2016년, 인스타그램 엔지니어가 처음부터 끝까지 파이썬으로 작성한 당고(Django) 웹 프레임워크를 배포했다. 그 후 인스타그램은 대규모로 파이썬 개발 유지를 위한 시간과 자원을 아낌없이 투자하기 시작했다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: '445px', height: '579px', borderRadius: '44px', border: '1px solid #DDDDDD', boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}>
                                    <div className='top' style={{ borderTopLeftRadius: '44px', borderTopRightRadius: '44px', width: '100%', height: '296px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FAFAFA' }}> 
                                        <div className='title' style={{ paddingTop: '3px', marginTop: '41px', width: '203px', height: '55px', borderRadius: '27px', backgroundColor: '#FFE37E', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '30px', color: '#3E3E3E', textAlign: 'center' }}>
                                            <span>facebook</span>
                                        </div>
                                        <Image preview={false} src={facebookLogo} width={134} style={{ marginTop: '18px' }}></Image>
                                    </div>
                                    <div className='bottom' style={{ borderBottomLeftRadius: '44px', borderBottomRightRadius: '44px', paddingTop: '33px', width: '100%', height: '283px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }} >
                                        <div style={{ width: '297px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '20px', color: '#343434', letterSpacing: '-0.025em', lineHeight: '151.52%' }}>
                                        페이스북 프로덕션 엔지니어는 파이썬을 사내 인기 언어 3위로 만들었다. 파이썬 라이브러리 접근이 쉬운 덕분에 다수 프로덕션 엔지니어가 개선 작업을 집중적으로 처리할 때, 직접 코드를 처음부터 끝까지 작성하지…
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Carousel>
                        </div>
                </div>  
                </div>  
            </div>
            <Footer />
        </div>
        
    );
}

export default Python;