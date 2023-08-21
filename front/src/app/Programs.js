import { Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import program1 from '../Assets/program1.png';
import program2 from '../Assets/program2.png';
import program3 from '../Assets/program3.png';
import btnText from '../Assets/btnText.svg';
import btnImage1 from '../Assets/btnImage1.svg';
import btnImage2 from '../Assets/btnImage2.svg';
import btnImage11 from '../Assets/btnImage11.svg';
import btnImage21 from '../Assets/btnImage21.svg';

const { Meta } = Card;

const Programs = () => {
    const navigate = useNavigate();

    const goToPlayPython = () => {
        navigate("/playpython");
    }

    const goToPlayAi = () => {
        navigate("/playai");
    }

    // 카드 전체 스타일
    const cardStyle = { width: 614.99, height: 681, borderRadius: 30, boxShadow: '4px 10px 29px rgba(0, 0, 0, 0.07)'};

    // 버튼 스타일
    const btnStyle1 = { width: 508, height: 74, background: '#3877AD', borderRadius: '16px', border: 'none', marginTop: 33, marginLeft: 16, cursor: 'pointer'}
    const btnStyle2 = { width: 508, height: 74, background: '#3C5B70', borderRadius: '16px', border: 'none', marginTop: 33, marginLeft: 16, cursor: 'pointer'}
    const btnStyle3 = { width: 462.9, height: 69, background: '#B63EFF', borderRadius: '16px', border: 'none', marginTop: 25, marginLeft: 16, cursor: 'pointer'}

    // 버튼 글자 스타일
    const btnTextStyle = { fontFamily: `'Noto Sans', 'sans-serif'`, fontSize: 31, fontWeight: 700, color: '#fff' }

    const [scale, setScale] = useState({
        image1: 1,
        image2: 1,
        image3: 1,
    });

    // 버튼 이미지 변경
    const [blueBtnImage, setBlueBtnImage] = useState(btnImage1);
    const [yellowBtnImage, setYellowBtnImage] = useState(btnImage2);


    const btnOverHandler = (e) => {
        let className = e.target.className;
        // blueBtn이면, 눌린 버튼 이미지로 변경
        if (className === 'blueBtn') {
            setBlueBtnImage(btnImage21);
        }
        if (className === 'yellowBtn') {
            setYellowBtnImage(btnImage11);
        }
    }

    
    const btnOutHandler = (e) => {
        let className = e.target.className;
        // blueBtn이면, 눌린 버튼 이미지로 변경
        if (className === 'blueBtn') {
            setBlueBtnImage(btnImage1);
        }
        if (className === 'yellowBtn') {
            setYellowBtnImage(btnImage2);
        }
    }

    return (
        <div className='Programs' 
            style={{width: '100%', height: '1158px', display: 'flex', 
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F8F8', 
                    display: 'flex', flexDirection: 'column'}}>
            <div
                style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '38px', color: '#1B1B1B'}}
            >목표에 맞는 코스를 탐색해 보세요</div>
            <div
                style={{ marginTop: '33px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '26px', color: '#404040'}}
            >누구나 쉽게 코딩을 접할 수 있습니다
            </div>
        
        <div
            style={{ marginTop: '71px' ,display: 'flex', }}>

            <Card
                style={cardStyle}
                onMouseOver={()=>{setScale({image1: 1.1, image2: 1, image3: 1})}}
                onMouseOut={()=>{setScale({image1: 1, image2: 1, image3: 1})}}
                cover={<img src={program1}
                    style={{ height: 301, transform: `scale(${scale.image1})`}}/>
                }
            >
                <Meta 
                    title="플레이 파이썬" description="웹/앱 개발, 데이터 분석, 인공지능/머신러닝, 업무 자동화 등으로 나아가기 위한 첫 걸음!">
                </Meta>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <button className='blueBtn' style={{ marginTop: 25, width: 508, height: 104, background: 'transparent', cursor: 'pointer', border: 'none', backgroundImage: `url(${blueBtnImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
                        onMouseOver={(e)=>{btnOverHandler(e)}}
                        onMouseOut={(e)=>{btnOutHandler(e)}}
                        onClick={goToPlayPython}
                    >
                    </button>
                </div>
            </Card>
            <Card
                style={cardStyle}
                onMouseOver={()=>{setScale({image1: 1, image2: 1.1, image3: 1})}}
                onMouseOut={()=>{setScale({image1: 1, image2: 1, image3: 1})}}
                cover={<img src={program2}
                    style={{ height: 301, transform: `scale(${scale.image2})`}}/>
                }
            >
                <Meta 
                    title="플레이 AI" description="웹/앱 개발, 데이터 분석, 인공지능/머신러닝, 업무 자동화 등으로 나아가기 위한 첫 걸음!">
                </Meta>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <button className='yellowBtn' style={{ marginTop: 25, width: 508, height: 104, background: 'transparent', cursor: 'pointer', border: 'none', backgroundImage: `url(${yellowBtnImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
                        onMouseOver={(e)=>{btnOverHandler(e)}}
                        onMouseOut={(e)=>{btnOutHandler(e)}}
                        onClick={goToPlayAi}
                    >
                    </button>
                </div>
            </Card>
        </div>
  </div>
    );
}

export default Programs;