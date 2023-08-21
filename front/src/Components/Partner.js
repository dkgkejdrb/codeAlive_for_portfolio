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


const Partner = () => {
    return ( 
        <div className='Partner' id='/#partner'>
            <div className='Wrap'>
                <H1 H1PWidth='100%' H1Title='메타버스 코딩 학습 프로그램' />
                <H2 H2PWidth='100%' H2Title='메타버스 코딩 플랫폼에서 배우는' />
                <H2 H2PWidth='100%' H2Title='파이썬 버추얼 클래스' />
                <H2 H2PWidth='100%' H2Title='codeAlive와 함께 쉽고 재미있게 경험하세요.' />
                <div className='PartnerBtnWrap' style={{width : '100%', height : '15%', marginTop : '40px'}}>
                    <a className='PartnerBtn' href ='https://form.office.naver.com/form/responseView.cmd?formkey=ZmM3NDIzYjQtODBlNy00MTJiLWJjNzktNzQ1MjQ1OTcwZjMz&sourceId=urlshare' target='_blank' style={{fontSize : '1.3rem', color : 'rgb(0, 62, 77)', borderRadius : '45px', backgroundColor : 'white', padding : '1.8rem 6rem 1.8rem 6rem', cursor : 'pointer', textDecoration : 'none'}} >도입문의</a>
                </div>
            </div>
        </div>
    );
}

export default Partner;