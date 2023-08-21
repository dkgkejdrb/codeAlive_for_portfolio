import footerLogo from '../Assets/footerLogo.svg'

const Footer = () => {

    return (
        <div className="footer"
            style={{ width: '100%', height: '442px', backgroundColor: '#F4F4F4', }}>
                <div className='wrap' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className='logo' style={{ marginLeft: '386px' ,width: '376.18px', height: '77.5px', backgroundImage: `url(${footerLogo})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                    <div className='firstLine' style={{ marginLeft: '386px', marginTop: '26.5px', display: 'flex', width: '100%', height: '34px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '22px', color: '#424242' }}>
                        <div style={{ width : '630px', borderRight: '1px solid rgba(66, 66, 66, 0.5)' }}>
                        서울특별시 강남구 테헤란로 521, 21층(삼성동, 파르나스타워)
                        </div>
                        <div style={{ width : '350px', paddingLeft: '30px', borderRight: '1px solid rgba(66, 66, 66, 0.5)' }}>
                        ㈜크레버스 대표이사 : 이충국
                        </div>
                        <div style={{ width : '400px', paddingLeft: '30px' }}>
                        사업자등록번호 : 211-87-16710
                        </div>
                    </div>
                    <div className='secondLine' style={{ marginLeft: '386px', marginTop: '9.59px', display: 'flex', width: '100%', height: '34px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '22px', color: '#424242' }}>
                        <div style={{ width: '260px', borderRight: '1px solid rgba(66, 66, 66, 0.5)' }}>
                        대표전화 : 02-3429-9407
                        </div>
                        <div style={{ paddingLeft: '30px' }}>
                        통신판매업신고 제 강남-8282호
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Footer;