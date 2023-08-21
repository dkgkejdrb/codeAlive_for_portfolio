import React, {useEffect, useState} from 'react';

const H1 = ({H1Title='', H1PWidth=647}) => {
    if(H1PWidth === null) { 
        return (<h1 style={{display: 'inline-block'}}>{H1Title}</h1>); 
    } else { 
        return (<h1 style={{width: H1PWidth}}>{H1Title}</h1>); }
}

const H1_1 = ({H1_1Title='', H1_1PWidth=400}) => {
    if(H1_1PWidth === null) { 
        return (<h1 style={{display: 'inline-block'}}>{H1_1Title}</h1>); 
    } else { 
        return (<h1 style={{width: H1_1PWidth, fontSize : '28px', paddingTop : '18px'}}>{H1_1Title}</h1>); }
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



const Features = () => {
    return (
        <div className='Features' id='/#features'>
            <div className='Title'>
                <H1 H1PWidth={1200} 
                H1Title='실시간 인터랙티브 메타버스 코딩교육 플랫폼'
                />
                <P H1PWidth={1200}
                PText='창의력과 문제해결능력을 향상시키는 혁신적인 접근법'
                />
            </div>
            <div className='Contents'>
                <SelectScreen />
            </div>
        </div>
    );
}

const SelectScreen = () => {
    const [picture, setPicture] = useState(1);

    useEffect(() => {
        setPicture(<FirstPicture />);
    }, []);
    
    const FirstPicture = () => {
        return (
            <div
            className='Picture'
            style={{
                backgroundImage: 'url(https://www.codealive.co.kr/images/main/img_platform.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
            }}>
            <br></br>
            <br></br>
            <p>학습-실습-프로젝트, 하나의 플랫폼 안에서 파이썬 개념 학습부터 코드구현까지<br></br>모든 것이 가능한 코스웨어</p>   
            </div>
        );
    }

    const SecondPicture = () => {
        return (
            <div
            className='Picture'
            style={{
                backgroundImage: 'url(https://www.codealive.co.kr/images/main/img_platform2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
        }}>
        <br></br>
        <br></br>
        <p>작성한 코드에 따라 실시간으로 반응하는<br></br>오브젝트를 통해 몰입 경험 극대화</p>    
        </div>
        );
    }

    const ThirdPicture = () => {
        return (
            <div
            className='Picture'
            style={{
                backgroundImage: 'url(https://www.codealive.co.kr/images/main/img_platform3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
        }}>
        <br></br>
        <br></br>
        <p>플레이그라운드로 파이썬 프로그래밍을 배우는 완벽한 방법을 제공합니다.<br></br>유니티 실시간 3D 개발 플랫폼을 통해 전문가 수준의 게임과 소프트웨어를 만들 수 있습니다.</p>                
        </div>
        );
    }

    const [circleColor1, setColor1] = useState(''); 
    const [circleColor2, setColor2] = useState('');
    const [circleColor3, setColor3] = useState('');
    const [circleFontColor1, setFontColor1] = useState(''); 
    const [circleFontColor2, setFontColor2] = useState('');
    const [circleFontColor3, setFontColor3] = useState('');
    const HandleValue = (event, num) => {
        if(num === 1) {
            setPicture(<FirstPicture />);
            setColor1('rgb(0, 62, 77)');
            setColor2('');
            setColor3('');
            setFontColor1('white');
            setFontColor2('grey');
            setFontColor3('grey');
        } else if(num === 2) {  
            setPicture(<SecondPicture />);
            setColor1('');
            setColor2('rgb(0, 62, 77)');
            setColor3('');
            setFontColor1('grey');
            setFontColor2('white');
            setFontColor3('grey');
        } else { 
            setPicture(<ThirdPicture />);
            setColor1('');
            setColor2('');
            setColor3('rgb(0, 62, 77)');
            setFontColor1('grey')
            setFontColor2('grey')
            setFontColor3('white')
        }
        event.preventDefault();
    }
    
    return (
        <div className='Wrap'>
            <div className='Left'>
                <a className='1' href='#' onClick={(event) => HandleValue(event, 1)}>
                    <div id='CircleNumber' style={{backgroundColor : circleColor1}} > 
                        <div style={{color : circleFontColor1}}>1</div> 
                    </div>
                    <H1_1 H1_1Title='단계별 학습'/>
                </a>
                <a className='2' href='#' onClick={(event) => HandleValue(event, 2)}>
                    <div style={{backgroundColor : circleColor2}} id='CircleNumber'> 
                        <div style={{color : circleFontColor2}}>2</div> 
                    </div>
                    <H1_1 H1_1Title='인터랙티브 콘텐츠'/>
                </a>
                <a className='3' href='#' onClick={(event) => HandleValue(event, 3)}>
                    <div style={{backgroundColor : circleColor3}} id='CircleNumber'> 
                        <div style={{color : circleFontColor3}}>3</div> 
                    </div>
                    <H1_1 H1_1Title='비주얼 프로그래밍'/>
                </a>
            </div>
            <div className='Right'>
                <div className='Screen'>
                    {picture}
                </div>
            </div>
        </div>
    );
}

export default Features; 