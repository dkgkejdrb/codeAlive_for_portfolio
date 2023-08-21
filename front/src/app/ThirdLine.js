import { useState } from 'react';
import { useEffect } from 'react';

import thirdLine_left from '../Assets/thirdLine_left.png'
import thirdLine_right from '../Assets/thirdLine_right.png'
import thirdLineBackground from '../Assets/thirdLineBackground.svg'
import thirdLineBtn from '../Assets/thirdLineBtn.svg'
import thirdLineImage1 from '../Assets/thirdLineImage1.png'
import thirdLineImage2 from '../Assets/thirdLineImage2.png'
import thirdLineImage3 from '../Assets/thirdLineImage3.png'



const style1 = { fontFamily: 'thisHow', fontWeight: '700', fontSize: '36px', lineHeight: '153.02%', color: '#3888FF'}
const style2 = { fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '26px', lineHeight: '153.02%', color: '#1B1B1B'}
const style3 = { fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '30px', lineHeight: '153.02%', color: '#3888FF'}

const ThirdLine = () => {

    return (
        <div className="thirdLine" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 2753, display: 'flex', alignItems: 'center', backgroundImage: `url(${thirdLineBackground})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className='first'
                style={{ display: 'flex', marginTop: '259px', width: '100%', height: "569px" }}>
                    <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}> 
                    <div style={{ marginRight: '60px', width: '575px', display: 'flex', flexDirection: 'column'}}>
                        
                        <div style={{ marginBottom: '31px' }}>
                            <div style={style1}>
                                누구나 가장 쉽고 빠르게
                            </div>
                        </div>
                        <div>
                            <div style={style2}>
                                코드얼라이브는 코딩 초보자도 쉽고 재미있게 파이썬 프로그래밍을 배울 수 있는 실시간 인터랙티브 코딩교육 플랫폼입니다. 유니티 엔진 기반의 혁신적인 비주얼 프로그래밍은 미래를 준비하는 가장 빠른 방법을 안내합니다.
                            </div>
                        </div>
                        <div style={{ marginTop: '48px', display: 'flex'}}>
                            <div style={style3}>
                                더 알아보기
                            </div>
                            <div style={{ marginLeft: '10px' ,width: '53px', height: '53px', backgroundImage: `url(${thirdLineBtn})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='Right' style={{ width: '50%' }}>
                        <div style={{ width: '920px', height: '569px', backgroundImage: `url(${thirdLineImage1})`, backgroundSize:'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
            </div>
            <div className='second'
                style={{ display: 'flex', marginTop: '259px', width: '100%', height: "569px" }}>
                <div style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'flex-end'}}> 
                <div style={{ width: '799px', height: '835px', backgroundImage: `url(${thirdLineImage2})`, backgroundSize:'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    </div>
                </div>
                <div className='Right' style={{ marginLeft: '60px', width: '50%' }}>

                    <div style={{ width: '575px', display: 'flex', flexDirection: 'column'}}>
                    <div style={{ marginBottom: '31px' }}>
                        <div style={style1}>
                            실시간 인터랙티브 프로그래밍
                        </div>
                    </div>
                    <div>
                        <div style={style2}>
                        코드 실행 결과를 텍스트 출력으로 확인하는 기존 실습 교육과 달리 작성한 코드에 따라 캐릭터, 사물 등의 3D 오브젝트가 실시간으로 반응하는 인터랙티브 프로그래밍을 즐겨 보세요.
게임을 하듯 직접 코드를 짜고 실감 있게 보여지는 실행 결과를 직접 확인하며 실시간으로 피드백을 받습니다.
                        </div>
                    </div>
                    <div style={{ marginTop: '48px', display: 'flex'}}>
                        <div style={style3}>
                            더 알아보기
                        </div>
                        <div style={{ marginLeft: '10px' ,width: '53px', height: '53px', backgroundImage: `url(${thirdLineBtn})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='third'
                style={{ display: 'flex', marginTop: '359px', width: '100%', height: "569px" }}>
                    <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}> 
                    <div style={{ marginRight: '60px', width: '575px', display: 'flex', flexDirection: 'column'}}>
                        <div style={{ marginBottom: '31px' }}>
                            <div style={style1}>
                            의지를 불태우게 하는 <br/> 체계적인 학습관리
                            </div>
                        </div>
                        <div>
                            <div style={style2}>
                                뒤처지지 않게 학습 진행률 관리, 학습시간,<br/>스타 포인트, 코딩 테스트 결과    
                            </div>
                        </div>
                        <div style={{ marginTop: '48px', display: 'flex'}}>
                            <div style={style3}>
                                더 알아보기
                            </div>
                            <div style={{ marginLeft: '10px' ,width: '53px', height: '53px', backgroundImage: `url(${thirdLineBtn})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='Right' style={{ width: '50%' }}>
                        <div style={{  width: '656px', height: '656px', backgroundImage: `url(${thirdLineImage3})`, backgroundSize:'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ThirdLine;