import React, {useEffect, useState} from 'react';

const H1 = ({H1Title='', H1PWidth=647}) => {
    if(H1PWidth === null) { 
        return (<h1 style={{display: 'inline-block'}}>{H1Title}</h1>); 
    } else { 
        return (<h1 style={{width: H1PWidth}}>{H1Title}</h1>); }
}

const H2 = ({H2Title='', H2PWidth=262}) => {
    if(H2PWidth === null) {
        return (<h2 style={{display: 'inline-block'}}>{H2Title}</h2>); 
    } else {
        return (
            <h2 style={{width: H2PWidth}}>{H2Title}</h2>); }
}

const P = ({PText='', PWidth=550}) => {
    if (PText === null) {
        return (<p style={{display: 'inline-block'}}>{PText}</p>); 
    } else { return (
        <p style={{width: PWidth}}>{PText}</p>); }
}

const Review = ({sliderWidth}) => {
    const sliderHeight = parseInt(sliderWidth) * 0.28;
    const sliderElementsWidth = parseInt(sliderWidth)*0.38-100;
    const sliderSpeed = parseInt(sliderWidth) * 0.43;

    const [Step, SetStep] = useState(0);
    const [transitionTime, SetTransitionTime] = useState(0.2);
   
    const listItems = [
        {
            key : '#444(1)',
            text : `"codeAlive는 정말 재미있습니다. 저는 함수, 루프, 조건문을 배웠고 멋진 프로젝트를 만들었습니다. 또한 그로 인해 디지털 큐레이터라는 미래를 꿈꾸게 되었습니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile.png)',
            user : '배정빈 | 아주중3'
        },

        {
            key : '#111',
            text : `"코딩을 중학교에 올라와서 시작했는데 codeAlive는 파이썬을 정말 쉽고 흥미롭게 배울 수 있습니다. 아이가 복잡한 코드로 스스로 게임작품을 만드는 것을 보니 놀랍습니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile2.png)',
            user : '서이 Mom | 늘푸른중1'
        },

        {
            key : '#222',
            text : `"제 아들은 codeAlive를 정말 좋아합니다. 스크래치를 하다가 파이썬을 혼자 하기 시작했는데 어려워서 코딩을 그만뒀어요. codeAlive를 만나 파이썬을 재미있고 체계적으로 배울 수 있어 정말 다행입니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile3.png)',
            user : '서준 Dad | 방배초6'
        },

        {
            key : '#333',
            text : `"codeAlive를 사용할 기회가 있어서 정말 기뻤습니다. 우리반 학생들은 모두 여학생이지만 이렇게 높은 참여를 이끌어 내는 프로그램은 지금까지 없었습니다. 텍스트 코딩이 처음인 아이들도 쉽게 이해할 수 있도록 잘 설계된 안내와 코스는 훌륭한 도구라고 생각됩니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile4.png)',
            user : '이지현 | 중등교사'
        },

        {
            key : '#444',
            text : `"codeAlive는 정말 재미있습니다. 저는 함수, 루프, 조건문을 배웠고 멋진 프로젝트를 만들었습니다. 또한 그로 인해 디지털 큐레이터라는 미래를 꿈꾸게 되었습니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile.png)',
            user : '배정빈 | 아주중3'
        },

        {
            key : '#111(1)',
            text : `"코딩을 중학교에 올라와서 시작했는데 codeAlive는 파이썬을 정말 쉽고 흥미롭게 배울 수 있습니다. 아이가 복잡한 코드로 스스로 게임작품을 만드는 것을 보니 놀랍습니다.'"`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile2.png)',
            user : '서이 Mom | 늘푸른중1'
        }
    ];

    useEffect(() => {
        SetStep(-sliderSpeed);    
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextHandler();

        }, 4000);

        return () => clearInterval(timer);
    }, [Step]);


    const sliderList = listItems.map((list) => 
        <div id='SliderElements' 
        className={list.key} 
        key={list.key}
        style={{
            flexDirection: 'column',
            width: `${sliderElementsWidth}px`,
            height: '70%', 
            transform: `translateX(${Step}px)`,
            transition: `${transitionTime}s ease-in-out`
            }}>
            {list.text}
            <div id='Profile' style={{width : '100%', height : '100%'}}>
                <div style={{width:'100px', height:'100px', backgroundPosition : 'center'}}> 
                    <div style={{width:'100%', height:'100%', backgroundSize : 'cover', backgroundImage : list.url}}></div>
                </div>
                <div style={{}}>
                    {list.user}
                </div>
            </div>
        </div>
    );

    const prevHandler = () => {
        if(Step >= 0) {
            SetTransitionTime(0);
            SetStep(-(sliderSpeed*(listItems.length-2))) // *4
            replaceLastSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step+sliderSpeed);
        }
    }

    const replaceLastSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0.2);
            SetStep(-(sliderSpeed*(listItems.length-3))); // *3
        }, 150, transitionTime)
    }

    const nextHandler = () => {
        if(Step <= -2400) { // *4
            SetTransitionTime(0.2);
            SetStep(Step-sliderSpeed);
            replaceFirstSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step-sliderSpeed);
        }
    }

    const replaceFirstSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0);
            SetStep(-(sliderSpeed)); // *0
        }, 150, transitionTime)
    }

    const SliderNavHandler = () => {
        if(Step === -sliderSpeed * 0)
        {
            return (
                <div className='Wrap'>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 1)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 2)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 3)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } 
        else {
            return (
                <div className='Wrap'>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );            
        }
    }

    return (
        <div className='Review' id='/#review'>
            <div className='Wrap'>
                <H1 H1Title='모두가 CodeAlive를 좋아하는 이유' H1PWidth='100%'/>

                <div className='SliderWrap'>
                    <a className='PrevBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={prevHandler}>&#60;</a>
                    <div className='Slider' style={{width : sliderWidth, height : `${sliderHeight}px`}}>
                        <div className='SliderList'>
                            {sliderList}
                        </div>
                    </div>
                    <a className='NextBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={nextHandler}>&#62;</a>
                </div>
                <div className='SliderNav'> 
                    <SliderNavHandler />
                </div>                    
            </div>
        </div>
    );
}

export default Review;