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

const IframeWrap = ({IframeWrapSrc=''}) => {
    return (
        <div className='IframeWrap'>
            <iframe src={IframeWrapSrc}></iframe>
        </div>
    );
}

const Introduction = () => {
    return (
        <div className='Introduction' id='/#intro'>
            <div className='Left'>
                <IframeWrap IframeWrapSrc={'https://www.youtube.com/embed/IeGj7s_KuFg'}/>
            </div>
            <div className='Right'>
                <H1 H1PWidth={647} 
                    H1Title='파이썬을 쉽게 배우는 혁신적인 방법'/>
                <P PWidth={550} 
                    PText='codeAlive는 코딩 초보자도 쉽고 재미있게 파이썬 프로그래밍을 배울 수 있는 실시간 인터랙티브 코딩교육 플랫폼입니다.
                            유니티 엔진 기반의 혁신적인 비주얼 프로그래밍은 미래를 준비하는 가장 빠른 방법을 안내합니다.' />
            </div>
        </div>
    );
}

export default Introduction; 