import fourthLinebackground from '../Assets/fourthLinebackground.png'
import { Carousel } from 'antd';
import logo1 from '../Assets/logo1.png'
import logo2 from '../Assets/logo2.png'
import logo3 from '../Assets/logo3.png'
import logo4 from '../Assets/logo4.png'
import logoBelt from '../Assets/logoBelt.png'
import logoBelt2 from '../Assets/logoBelt2.png'

const contentStyle = {

    height: '88px',
}

const FourthLine = () => {
    return (
        <div className='fourthLine'
            style={{ width: '100%', height: '720px', backgroundImage: `url(${fourthLinebackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* <Carousel autoplay pauseOnHover={false} dots={false} autoplaySpeed={5000} speed={5000} infinite={true} easing={'linear'}>
                <div>
                    <div style={{height: '88px', backgroundImage: `url(${logoBelt2})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                </div>
                <div>
                    <div style={{height: '88px', backgroundImage: `url(${logoBelt2})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                </div>
            </Carousel> */}

            <div id="slider">
                <div className="image-box">
                    <div><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                {/* 복제 */}
                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>

                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                    <div className="clone"><div style={{width:'370px', height: '88px', backgroundImage: `url(${logo4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
                </div>
            </div>

        </div>
    );
}

export default FourthLine;