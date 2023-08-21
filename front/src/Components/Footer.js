const P = ({PText='', PWidth=550}) => {
    if (PText === null) {
        return (<p style={{display: 'inline-block'}}>{PText}</p>); 
    } else { return (
        <p style={{width: PWidth}}>{PText}</p>); }
}

const Footer = () => {

    const handleChange = (event) => {
        window.open(event.target.value);
    }

    return  (
        <div className='Footer'>
            <div className='Wrap'>
                <div className='Logo' style={{width : '140px', height : '27px', padding : '1rem'}}>
                    <div style={{width : '100%', height : '100%', backgroundImage : 'url(https://www.codealive.co.kr/images/creverse_logo.svg)', backgroundSize: 'cover',backgroundPosition: 'center'}}>

                    </div>
                </div>
                <div className='IncWrap' style={{width:'100%', height : '100px'}}>
                    <div className='Inc' style={{width:'60%', height : '70%'}}>
                        <P PWidth='100%' PText='서울특별시 강남구 테헤란로 521, 21층(삼성동, 파르나스타워) | ㈜크레버스 대표이사 : 이충국 | 사업자등록번호 : 211-87-16710'/>
                        <P PWidth='100%' PText='대표전화 : 02-3429-9407 | 통신판매업신고 제 강남-8282호'/>
                    </div>
                    <div className='IncList' onChange={handleChange} style={{width:'40%', height : '70%'}}>
                        <select style={{width: '180px', height : '30px',background : '#343a40', color : 'white', border : 'solid 0.1px white'}}>
                            <option>FAMILY SITE</option>  
                            <option value='https://creverse.com/'>크레버스</option>
                            <option value='https://www.c3coding.com/'>씨큐브코딩</option>
                            <option value='https://www.chungdahm.com/'>LC</option>
                            <option value='https://vlc.chungdahm.com/'>VLC</option>
                            <option value='https://www.cmsedu.co.kr/html/#cms_k_p31.php'>CMS영재교육센터</option>
                            <option value='https://www.cmsedu.co.kr/html/index.php?mb=1#cms_k_p32.php'>영재관</option>
                        </select>    
                    </div>    
                </div>                
            </div>
        </div>
    );
}

export default Footer;