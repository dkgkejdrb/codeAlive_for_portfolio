import fifthLineBackground from '../Assets/fifthLineBackground.png'
import fifthLineContactBtn from '../Assets/fifthLineContactBtn.svg'

import { useNavigate } from 'react-router-dom';

const FifthLine = () => { 

    const navigate = useNavigate();

    const buttonHandler = () => {
        navigate("/contact")
    };
    

    return (
        <div
            className='fifthLine' 
            style={{ display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center', width: '100%', height: '418px', backgroundImage: `url(${fifthLineBackground})` }}>
            <div style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '38px', letterSpacing: '-0.045rem', color: '#fff' }}>
                우리학교, 기업을 위한 앞선 디지털 교육을 시작해 보세요
            </div>
            <div 
                onClick={buttonHandler}
                style={{ marginTop: '13px', cursor: 'pointer', border: `1px solid rgba(255, 255, 255, 0.8)`, width: '289px', height: '68px', backgroundImage: `url(${fifthLineContactBtn})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'  }}>
            </div>
        </div>
    );
}

export default FifthLine;