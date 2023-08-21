import Header3 from "./Header3";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Image } from "antd";
import categoryPythonIcon from "../Assets/categoryPythonIcon.png"
import categoryButtonDialogue from "../Assets/categoryButtonDialogue.png";
import faqBtnUp from "../Assets/faqBtnUp.png";
import faqBtnDown from "../Assets/faqBtnDown.png";
import categoryPythonIcon2 from "../Assets/categoryPythonIcon2.png"
import categoryAiIcon from "../Assets/categoryAiIcon.png";
import { useNavigate } from 'react-router-dom';


const PlayAi = () => {
  // 네비게이션 접기 관련
  const [ btnHeight1_1, setBtnHeight1_1] = useState('0');
  const [ isClicked1_1, setIsClicked1_1 ] = useState(false);
  const [ btnImage1_1, setBtnImage1_1 ] = useState(`url(${faqBtnDown})`);

  const [ btnHeight1_2, setBtnHeight1_2] = useState('0');
  const [ isClicked1_2, setIsClicked1_2 ] = useState(false);
  const [ btnImage1_2, setBtnImage1_2 ] = useState(`url(${faqBtnDown})`);

  const navBtnHandler1_1 = (e) => {
    if(isClicked1_1) {
        setIsClicked1_1(false);
        setBtnHeight1_1('0px');
        setBtnImage1_1(`url(${faqBtnDown})`);
    } if(!isClicked1_1) {
      setIsClicked1_1(true);
      setBtnHeight1_1("288px");
      setBtnImage1_1(`url(${faqBtnUp})`);
    } 
}

const navBtnHandler1_2 = (e) => {
  if(isClicked1_2) {
    setIsClicked1_2(false);
    setBtnHeight1_2('0px');
    setBtnImage1_2(`url(${faqBtnDown})`);
} if(!isClicked1_2) {
    setIsClicked1_2(true);
    setBtnHeight1_2('288px');
    setBtnImage1_2(`url(${faqBtnUp})`);
} 
}

const navigate = useNavigate();
// 플레이 파이썬&플레이 AI 버튼 클릭 시, 웹사이트 이동
const goToPlayPython = () => {
    navigate("/playpython")
}
const goToPlayAi = () => {
    navigate("/playai")
}



  // 탭 관련
  const [introductionBackColor, setIntroductionBackColor] = useState("#86A7F2");
  const [introductionColor, setIntroductionColor] = useState("#fff");
  const [showIntroduction, setShowIntroduction] = useState(true);

  const [featureBackColor, setFeatureBackColor] = useState("#86A7F2");
  const [featureColor, setFeatureColor] = useState("#fff");
  const [showFeature, setShowFeature] = useState(false);

  const [constituentBackColor, setConstituentBackColor] = useState("#86A7F2");
  const [constituentColor, setConstituentColor] = useState("#fff");
  const [showConstituent, setConstituent] = useState(false);

  const [curriculumBackColor, setCurriculumBackColor] = useState("#86A7F2");
  const [curriculumColor, setCurriculumColor] = useState("#fff");
  const [showCurriculum, setcurriculum] = useState(false);  

  const [faqBackColor, setFaqBackColor] = useState("#86A7F2");
  const [faqColor, setFaqColor] = useState("#fff");
  const [showFaq, setFaq] = useState(false); 



  const introductionHandler = () => {
    // 코스 소개 클릭 시, 서버로부터 내용 받아올 것
    setIntroductionBackColor("#fff"); setIntroductionColor("#6287DD"); setFeatureBackColor("#86A7F2"); setFeatureColor("#fff");
    setConstituentBackColor("#86A7F2"); setConstituentColor("#fff"); setCurriculumBackColor("#86A7F2"); setCurriculumColor("#fff");
    setFaqBackColor("#86A7F2"); setFaqColor("#fff");
    setShowIntroduction(true); setShowFeature(false); setConstituent(false); setcurriculum(false); setFaq(false);
  }

  const featureHandler = () => {
    // 특징 클릭 시, 서버로부터 내용 받아올 것
    setIntroductionBackColor("#86A7F2"); setIntroductionColor("#fff"); setFeatureBackColor("#fff"); setFeatureColor("#6287DD");
    setConstituentBackColor("#86A7F2"); setConstituentColor("#fff"); setCurriculumBackColor("#86A7F2"); setCurriculumColor("#fff");
    setFaqBackColor("#86A7F2"); setFaqColor("#fff");
    setShowIntroduction(false); setShowFeature(true); setConstituent(false); setcurriculum(false); setFaq(false);
  }

  const constituentHandler = () => {
    // 구성 클릭 시, 서버로부터 내용 받아올 것
    setIntroductionBackColor("#86A7F2"); setIntroductionColor("#fff"); setFeatureBackColor("#86A7F2"); setFeatureColor("#fff");
    setConstituentBackColor("#fff"); setConstituentColor("#6287DD"); setCurriculumBackColor("#86A7F2"); setCurriculumColor("#fff");
    setFaqBackColor("#86A7F2"); setFaqColor("#fff");
    setShowIntroduction(false); setShowFeature(false); setConstituent(true); setcurriculum(false); setFaq(false);
  }

  const curriculumHandler = () => {
    // 커리큘럼 클릭 시, 서버로부터 내용 받아올 것
    setIntroductionBackColor("#86A7F2"); setIntroductionColor("#fff"); setFeatureBackColor("#86A7F2"); setFeatureColor("#fff");
    setConstituentBackColor("#86A7F2"); setConstituentColor("#fff"); setCurriculumBackColor("#fff"); setCurriculumColor("#6287DD");
    setFaqBackColor("#86A7F2"); setFaqColor("#fff");
    setShowIntroduction(false); setShowFeature(false); setConstituent(false); setcurriculum(true); setFaq(false);
  }

  const faqHandler = () => {
    // FAQ 클릭 시, 서버로부터 내용 받아올 것
    setIntroductionBackColor("#86A7F2"); setIntroductionColor("#fff"); setFeatureBackColor("#86A7F2"); setFeatureColor("#fff");
    setConstituentBackColor("#86A7F2"); setConstituentColor("#fff"); setCurriculumBackColor("#86A7F2"); setCurriculumColor("#fff");
    setFaqBackColor("#fff"); setFaqColor("#6287DD");
    setShowIntroduction(false); setShowFeature(false); setConstituent(false); setcurriculum(false); setFaq(true);
  }
  
  
  useEffect(
    () => {
      // 첫 페이지 진입시, 코스 소개 탭 선택된 상태
      setIntroductionBackColor("#fff"); setIntroductionColor("#6287DD"); setBtnHeight1_2("288px");  setBtnImage1_2(`url(${faqBtnUp})`);
    }, []);

    return (
      <div
        className="playPython"
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      >
        <Header3 />
        <Contact />
        <div
          className="Wrap"
          style={{
            marginBottom: "125px",
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <div
            className="navigation"
            style={{
              width: "343px",
              minHeight: "287px",
              position: "fixed",
              left: "150px",
              top: " 150px",
              backgroundColor: "#FFF",
              boxShadow: "0px 1px 14px rgba(56, 102, 159, 0.23)",
              borderRadius: "25px",
              zIndex: "1,",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            {/* 플레이 파이썬 카테고리 */}
            <div
              className="playPythonCategory"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "232px",
                height: "72px",
                // backgroundColor: "#4E80F2",
                borderRadius: "15px",
              }}
            >
              <Image preview={false} src={categoryPythonIcon2} width={32.82}></Image>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#000",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={goToPlayPython}
              >
                플레이 파이썬
              </span>
              {/* 버튼 */}
              <div
                className="faqBtn"
                style={{
                  marginLeft: "20px",
                  width: "11px",
                  height: "7px",
                  backgroundImage: btnImage1_1,
                  cursor: "pointer",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                onClick={(e) => navBtnHandler1_1(e)}
              ></div>
            </div>
            <div
              className="a1"
              style={{
                transition: "0.5s ease-in-out",
                height: btnHeight1_1,
                overflow: "hidden",
                marginTop: "10px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "400",
                fontSize: "12px",
                color: "#A4A4A4",
                lineHeight: "185%",
              }}
            >
              {/* 여기서 버튼들이 추가되어야 함 */}
              {/* 플레이 파이썬 관련 버튼들 */}
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
            </div>

            {/* 플레이 AI 카테고리 */}
            <div
              className="playPythonCategory"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "232px",
                height: "72px",
                backgroundColor: "#4E80F2",
                borderRadius: "15px",
              }}
            >
              <Image preview={false} src={categoryAiIcon} width={32.82}></Image>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#000",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={goToPlayAi}
              >
                플레이 AI
              </span>
              {/* 버튼 */}
              <div
                className="faqBtn"
                style={{
                  marginLeft: "20px",
                  width: "11px",
                  height: "7px",
                  backgroundImage: btnImage1_2,
                  cursor: "pointer",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                onClick={(e) => navBtnHandler1_2(e)}
              ></div>
            </div>
            <div
              className="a1"
              style={{
                transition: "0.5s ease-in-out",
                height: btnHeight1_2,
                overflow: "hidden",
                marginTop: "10px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "400",
                fontSize: "12px",
                color: "#A4A4A4",
                lineHeight: "185%",
              }}
            >
              {/* 여기서 버튼들이 추가되어야 함 */}
              {/* 플레이 파이썬 관련 버튼들 */}
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
              <div
                className="categoryNavBtn"
                style={{
                  width: "232px",
                  height: "72px",
                  border: "1px solid #E8F0FB",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3888FF",
                  }}
                >
                  플레이 파이썬 Vol.1
                </span>
              </div>
            </div>
          </div>
          <div
            className="contentsWrap"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingLeft: "450px",
              paddingTop: "150px",
            }}
          >
            {/* 여기 밑으로 맵핑해야하는 컴퍼넌트임 */}
            <>
              {/* 요약 소개 상단 */}
              <div
                style={{
                  width: "1276px",
                  height: "554px",
                  backgroundColor: "#fff",
                  backgroundColor: "#FFF",
                  boxShadow: "0px 1px 14px rgba(56, 102, 159, 0.23)",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="icon&title"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image
                    preview={false}
                    src={categoryPythonIcon}
                    width={55.7}
                  ></Image>
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "700",
                      fontSize: "32px",
                      fontColor: "#343434",
                    }}
                  >
                    {`{플레이파이썬 Vol. 1}`}
                  </span>
                </div>
                <div
                  className="summary"
                  style={{
                    marginTop: "42px",
                    width: "887px",
                    height: "303px",
                    display: "flex",
                  }}
                >
                  <div
                    className="left"
                    style={{
                      width: "50%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "500",
                        fontSize: "24px",
                        color: "#494949",
                      }}
                    >
                      <span>수강기간 : </span>
                      <span>{`{수강신청일로부터 4주}`}</span>
                    </div>
                    <div
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "500",
                        fontSize: "24px",
                        color: "#494949",
                      }}
                    >
                      <span>상품 구성 : </span>
                      <span>{`{4Unit, 1Test}`}</span>
                    </div>
                    <div
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "500",
                        fontSize: "24px",
                        color: "#494949",
                      }}
                    >
                      <span>난이도 : </span>
                      <span>{`{초급}`}</span>
                    </div>
                    {/* 태그 모음 라인 */}
                    <div className="tagsLine" style={{ marginTop: "7px" }}>
                      {/* 서버로부터 태그 text받아와서 스타일링 */}
                      <div className="tag">
                        <span
                          style={{
                            padding: "5px 10px 5px 10px",
                            backgroundColor: "rgba(152, 184, 255, 0.2)",
                            borderRadius: "14.5px",
                            fontFamily: `'Noto Sans', 'sans-serif'`,
                            fontWeight: "500",
                            fontSize: "17px",
                            color: "#494949",
                          }}
                        >
                          <span>{`{#초보}`}</span>
                        </span>
                      </div>
                    </div>
                    {/* 강의금액, 할인금액 */}
                    <div style={{ marginTop: "16px" }}>
                      <span
                        style={{
                          fontFamily: `'Noto Sans', 'sans-serif'`,
                          fontWeight: "400",
                          fontSize: "23px",
                          color: "#373737",
                          textDecoration: "line-through",
                        }}
                      >
                        {`{59,000원}`}
                      </span>
                      <span
                        style={{
                          fontFamily: `'Noto Sans', 'sans-serif'`,
                          fontWeight: "600",
                          fontSize: "23px",
                          color: "#373737",
                        }}
                      >
                        {`{최대10%할인 54,000원}`}
                      </span>
                    </div>
                    {/* 수강신청하기 버튼 */}
                    <div
                      style={{
                        marginTop: "38px",
                        width: "314px",
                        height: "64px",
                        backgroundColor: "#484D58",
                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.09)",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        position: "relative",
                        flexDirection: "column",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: `'Noto Sans', 'sans-serif'`,
                          fontWeight: "500",
                          fontSize: "24px",
                          color: "#fff",
                        }}
                      >
                        수강신청하기
                      </span>
                      {/* 4주 내내 무제한 학습! 태그 */}
                      <Image
                        preview={false}
                        src={categoryButtonDialogue}
                        width={150}
                        style={{ position: "absolute", bottom: "40px" }}
                      ></Image>
                    </div>
                  </div>
                  {/* 코스 요약 이미지 */}
                  <div
                    className="right"
                    style={{ width: "50%", height: "100%" }}
                  >
                    <div
                      style={{
                        width: "447px",
                        height: "298px",
                        backgroundColor: "green",
                        borderRadius: "26px",
                      }}
                    >
                      <Image width={447}></Image>
                    </div>
                  </div>
                </div>
              </div>
              {/* 하단 */}
              <div
                style={{
                  marginTop: "38px",
                  width: "1276px",
                  minHeight: "554px",
                  backgroundColor: "#fff",
                  backgroundColor: "#FFF",
                  boxShadow: "0px 1px 14px rgba(56, 102, 159, 0.23)",
                  borderRadius: "25px",
                }}
              >
                <div
                  className="Tabs"
                  style={{
                    width: "100%",
                    height: "81px",
                    backgroundColor: "#86A7F2",
                    borderRadius: "25px 25px 0px 0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* 코스 소개 버튼 */}
                  <div
                    onClick={introductionHandler}
                    style={{
                      backgroundColor: introductionBackColor,
                      color: introductionColor,
                      width: "137px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "55px",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "700",
                        fontSize: "22px",
                      }}
                    >
                      코스 소개
                    </span>
                  </div>

                  {/* 특징 버튼 */}
                  <div
                    onClick={featureHandler}
                    style={{
                      backgroundColor: featureBackColor,
                      color: featureColor,
                      width: "137px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "55px",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "700",
                        fontSize: "22px",
                      }}
                    >
                      특징
                    </span>
                  </div>

                  {/* 구성 버튼 */}
                  <div
                    onClick={constituentHandler}
                    style={{
                      backgroundColor: constituentBackColor,
                      color: constituentColor,
                      width: "137px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "55px",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "700",
                        fontSize: "22px",
                      }}
                    >
                      구성
                    </span>
                  </div>

                  {/* 커리큘럼 버튼 */}
                  <div
                    onClick={curriculumHandler}
                    style={{
                      backgroundColor: curriculumBackColor,
                      color: curriculumColor,
                      width: "137px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "55px",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "700",
                        fontSize: "22px",
                      }}
                    >
                      커리큘럼
                    </span>
                  </div>

                  {/* FAQ 버튼 */}
                  <div
                    onClick={faqHandler}
                    style={{
                      backgroundColor: faqBackColor,
                      color: faqColor,
                      width: "137px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "55px",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "700",
                        fontSize: "22px",
                      }}
                    >
                      FAQ
                    </span>
                  </div>
                </div>
                {/* 관리자 영역에서 등록한 이미지들 표시, 나중에 <></> 전부 <Image />로 교체 */}
                {showIntroduction ? (
                  <>코스소개</>
                ) : showFeature ? (
                  <>특징</>
                ) : showConstituent ? (
                  <>구성</>
                ) : showCurriculum ? (
                  <>커리큘럼</>
                ) : (
                  showFaq && <>FAQ</>
                )}
              </div>
            </>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default PlayAi;