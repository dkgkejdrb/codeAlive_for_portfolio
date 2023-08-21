import { useState } from "react";
import Header2 from './Header2';
import introductionFirstLineBackground from '../Assets/introductionFirstLineBackground.png'
import { Image, Card, Modal, Input, Radio, Select, Space, DatePicker, Checkbox } from 'antd';
import imoji1 from '../Assets/imoji1.png';
import chat1 from '../Assets/chat1.png';
import imoji2 from '../Assets/imoji2.png';
import chat2 from '../Assets/chat2.png';
import imoji3 from '../Assets/imoji3.png';
import chat3 from '../Assets/chat3.png';
import imoji4 from '../Assets/imoji4.png';
import chat4 from '../Assets/chat4.png';
import secondLineImage1 from '../Assets/secondLineImage1.png';
import secondLineImage2 from '../Assets/secondLineImage2.png';
import secondLineImage3 from '../Assets/secondLineImage3.png';
import logoGrey from '../Assets/logoGrey.svg';
import introductionThirdLineImage1 from '../Assets/introductionThirdLineImage1.png';
import introductionThirdLineImage2 from '../Assets/introductionThirdLineImage2.png';
import introductionFourthLineImage from '../Assets/introductionFourthLineImage.png';
import introductionFifthLineImage from '../Assets/introductionFifthLineImage.png';
import logoAllWhite from '../Assets/logoAllWhite.svg';
import Footer from "./Footer.js";
import contactBackImage from '../Assets/contactBackImage.png';
import contactDialogue1 from '../Assets/contactDialogue1.png';
import contactDialogue2 from '../Assets/contactDialogue2.png';
import contactDialogue3 from '../Assets/contactDialogue3.png';
import contactThirdLineImage from '../Assets/contactThirdLineImage.png';
import contactFourthLineImage from '../Assets/contactFourthLineImage.png';
import contactFourthLineImage2 from '../Assets/contactFourthLineImage2.png';
import contactFifthLineImage from '../Assets/contactFifthLineImage.png';
import contactFifthLineImage2 from '../Assets/contactFifthLineImage2.png';
import contactSixthLineImage from '../Assets/contactSixthLineImage.png';
import contactSixthLineImage2 from '../Assets/contactSixthLineImage2.png';
import contactEightLineBackImage from "../Assets/contactEightLineBackImage.png";
import contactEightLineBackImage2 from "../Assets/contactEightLineBackImage2.png";
import faqBtnUp from "../Assets/faqBtnUp.png";
import faqBtnDown from "../Assets/faqBtnDown.png";

const { Meta } = Card;

const cardStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center',  width: 566, height: 679, borderRadius: 50, boxShadow: '3px 9px 19px 6px rgba(0, 0, 0, 0.06)'};

const { TextArea } = Input;

const ContactPage = () => {
    // 모달관련
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // 셀렉트 박스(예상교육인원)관련
    const handleChange = () => {

    }

    // 라디오 버튼 관련
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    // 동의 접다 펴기 관련
    const [ isClicked1_1, setIsClicked1_1 ] = useState(false);
    const [ faqBtnBack1_1, setFaqBtnBack1_1 ] = useState('#EEEEEE');
    const [ faqBtnHeight1_1, setFaqBtnHeight1_1] = useState('0');
    const [ faqBtnImage1_1, setFaqBtnImage1_1 ] = useState(`url(${faqBtnDown})`);

    const faqBtnHandler1_1 = (e) => {
        if(isClicked1_1) {
            setIsClicked1_1(false);
            setFaqBtnHeight1_1('0px');
            setFaqBtnImage1_1(`url(${faqBtnDown})`);
            setFaqBtnBack1_1('#EEEEEE');
        } if(!isClicked1_1) {
            setIsClicked1_1(true);
            setFaqBtnHeight1_1('150px');
            setFaqBtnImage1_1(`url(${faqBtnUp})`);
            setFaqBtnBack1_1('#FFF');
        } 
    }

    // 체크박스 관련
    const onChangeCheckBox = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };


    return (
      <div
        className="contact"
        style={{
          width: "100%",
          height: "100%",
          overflow: 'hidden',
        }}
      >
        <Header2 />
        <div
          className="firstLine"
          style={{
            position: "relative",
            width: "100%",
            height: "998px",
            backgroundImage: `url(${contactBackImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingLeft: "310px",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "299px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "600",
              fontSize: "50px",
              lineHeight: "68px",
              color: "#FFF",
            }}
          >
            임직원이 자발적으로 참여하는<br></br>DX교육을 만들어 보세요
          </span>
          <span
            style={{
              position: "absolute",
              top: "460px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "400",
              fontSize: "26px",
              lineHeight: "35px",
              color: "#FFF",
            }}
          >
            15%만 성공한다는 사내교육<br></br>
            참여도와 성과를 향상시키는 성공적인 DX여정을<br></br>
            코드얼라이브와 함께 시작하세요.
          </span>
          {/* 도입 문의하기 버튼 */}
          <div
            className="contactButton"
            style={{
              position: "absolute",
              width: "214px",
              height: "64px",
              top: "650px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "30px",
              color: "#FFF",
              background: "#2D7DF4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={showModal}
          >
            <span>도입 문의하기</span>
          </div>
        </div>
        <div
          style={{
            paddingTop: "86px",
            width: "100%",
            height: "947px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#F4F4F4",
            backgroundSize: "contain",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "700",
              fontSize: "38px",
              lineHeight: "-0.025em",
              color: "#3888FF",
            }}
          >
            회사도 임직원도 모두 만족하는 DX교육은 없을까요?
          </div>
          <div
            style={{
              marginTop: "3px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "400",
              fontSize: "22px",
              color: "#5B5B5B",
              lineHeight: "153.02%",
            }}
          >
            우리에게 게임처럼 지루하지 않고 실시간 인터랙션으로<br></br>
            흥미와 몰입감을 주는 실습 중심 교육이 필요합니다.
          </div>

          <div
            className="chatWrap"
            style={{
              marginTop: "52px",
              width: "1212px",
              height: "527px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", left: "28px" }}>
              <Image
                preview={false}
                src={imoji3}
                width={243.51}
                height={243.51}
                style={{ position: "relative", left: "20px" }}
              ></Image>
              <Image
                preview={false}
                src={contactDialogue1}
                width={313}
                height={120}
                style={{ position: "absolute" }}
              ></Image>
              <span
                className="typingEffect5"
                style={{
                  position: "absolute",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "144.52%",
                  color: "#FFF",
                  top: "29px",
                  left: "310px",
                  textAlign: "center",
                }}
              >
                교육이 업무에 도움이<br></br>되는지 잘 모르겠어요...
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: "0px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "518px",
                  height: "295px",
                  position: "relative",
                  right: "60px",
                }}
              >
                <Image
                  preview={false}
                  src={contactDialogue2}
                  width={313}
                  height={132}
                  style={{}}
                ></Image>
                <Image
                  preview={false}
                  src={imoji1}
                  width={204}
                  height={204}
                  style={{ position: "relative", top: "95px", right: "20px" }}
                ></Image>
              </div>
              <span
                // className="typingEffect typingEffect6"
                className="typingEffect6"
                style={{
                  position: "absolute",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "144.52%",
                  color: "#FFF",
                  top: "65px",
                  left: "-20px",
                }}
              >
                동영상만 시청하는 방식은<br></br>집중도 안 되고 너무 지루해요
              </span>
            </div>
            <div style={{ position: "absolute", top: "210px", left: "80px" }}>
              <Image
                preview={false}
                src={imoji4}
                width={243.51}
                height={243.51}
                style={{ position: "relative", top: "80px", left: "20px" }}
              ></Image>
              <Image
                preview={false}
                src={contactDialogue3}
                width={337}
                height={129}
                style={{ position: "relative", right: "10px" }}
              ></Image>
              <span
                // className="typingEffect typingEffect7"
                className="typingEffect7"
                style={{
                  position: "absolute",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "144.52%",
                  color: "#FFF",
                  top: "90px",
                  left: "255px",
                  textAlign: "center",
                }}
              >
                디지털 교육은 더 어렵게만 느껴져서<br></br>포기하고 싶을 때가
                많아요
              </span>
            </div>
          </div>
        </div>

        <div
          className="thirdLine"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "878px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "700",
              fontSize: "40px",
              color: "#3888FF",
              lineHeight: "145.02%",
              letterSpacing: "-0.025em",
              textAlign: "center",
            }}
          >
            데이터 분석부터 딥러닝까지<br></br>
            새로운 차원의 DX교육을 경험해 보세요
          </div>
          <div
            className="contentsWrap"
            style={{
              marginTop: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={contactThirdLineImage} preview={false}></Image>
          </div>
        </div>

        <div
          className="fourthLine_1"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "812px",
            backgroundColor: "#F8F8F8",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "700",
              fontSize: "40px",
              color: "#3888FF",
              lineHeight: "145.02%",
              letterSpacing: "-0.025em",
              textAlign: "center",
            }}
          >
            이론, 실습, 테스트<br></br>
            따로따로 사용하던 도구를 하나로!
          </div>
          <div
            style={{
              marginTop: "17px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "400",
              fontSize: "22px",
              color: "#5B5B5B",
              lineHeight: "153.02%",
              letterSpacing: "-0.025em",
              textAlign: "center",
            }}
          >
            수업하다 다른 프로그램 켜서 보여주고,<br></br>
            돌아와서 동영상 재생하고 다시 수업하고...<br></br>이 화면 저 화면
            돌아다닐 필요 없이
          </div>
          <div
            className="contentsWrap"
            style={{
              marginTop: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={contactFourthLineImage}
              preview={false}
              style={{ marginTop: "59px" }}
            ></Image>
          </div>
        </div>

        <div
          className="fourthLine_2"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "751px",
            backgroundColor: "rgba(75, 129, 253, 0.8)",
            position: "relative",
          }}
        >
          <Image
            src={contactFourthLineImage2}
            preview={false}
            style={{ marginTop: "-180px" }}
          ></Image>
        </div>

        <div
          className="fifthLine"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "1951px",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* 다섯번째 라인의 첫번째 줄 '우리만의 전용 사이트' */}
          <div
            style={{
              display: "flex",
              width: "1290px",
              height: "388px",
            }}
          >
            <div
              className="left"
              style={{
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              <Image preview={false} src={contactFifthLineImage}></Image>
            </div>
            <div
              className="right"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "50%",
                height: "100%",
                paddingLeft: "218px",
              }}
            >
              <div
                className="ASIS"
                style={{
                  width: "399px",
                  height: "121px",
                  backgroundColor: "rgba(235, 240, 253, 0.5)",
                  borderRadius: "10px",
                  paddingLeft: "33px",
                  paddingTop: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#5B5B5B",
                    lineHeight: "153.02%",
                  }}
                >
                  AS IS<br></br>
                  우리 회사만을 위한 전용 사이트에서<br></br>
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "700",
                      fontSize: "18px",
                      color: "#6B98FF",
                      lineHeight: "153.02%",
                    }}
                  >
                    홈을 꾸미고
                  </span>{" "}
                  클래스를 관리해 보세요.
                </span>
              </div>
              <div
                className="title"
                style={{
                  marginTop: "20px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  fontSize: "40px",
                  color: "#3888FF",
                  lineHeight: "145.02%",
                  letterSpacing: "-0.025em",
                }}
              >
                우리만의 전용 사이트
              </div>
              <div
                className="description"
                style={{
                  marginTop: "10px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "400",
                  fontSize: "22px",
                  color: "#5B5B5B",
                  lineHeight: "145.02%",
                }}
              >
                수업하다 다른 프로그램 켜서 보여주고,<br></br>
                돌아와서 동영상 재생하고 다시 수업하고...<br></br>이 화면 저
                화면 돌아다닐 필요 없이<br></br>
              </div>
            </div>
          </div>

          {/* 다섯번째 라인의 두번째 줄 '학습자 및 진도 관리' */}
          <div
            style={{
              marginTop: "206px",
              width: "1290px",
              height: "349px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "1290px",
                height: "349px",
              }}
            >
              <div
                className="left"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                <div
                  className="ASIS"
                  style={{
                    width: "399px",
                    height: "121px",
                    backgroundColor: "rgba(235, 240, 253, 0.5)",
                    borderRadius: "10px",
                    paddingLeft: "33px",
                    paddingTop: "18px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "400",
                      fontSize: "18px",
                      color: "#5B5B5B",
                      lineHeight: "153.02%",
                    }}
                  >
                    AS IS<br></br>
                    <span
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "700",
                        fontSize: "18px",
                        color: "#6B98FF",
                        lineHeight: "153.02%",
                      }}
                    >
                      우리 회사만을 위한 전용 사이트에서<br></br>
                      홈을 꾸미고 클래스를 관리해 보세요.
                    </span>
                  </span>
                </div>
                <div
                  className="title"
                  style={{
                    marginTop: "20px",
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "700",
                    fontSize: "40px",
                    color: "#3888FF",
                    lineHeight: "145.02%",
                    letterSpacing: "-0.025em",
                  }}
                >
                  학습자 및 진도 관리
                </div>
                <div
                  className="description"
                  style={{
                    marginTop: "10px",
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "400",
                    fontSize: "22px",
                    color: "#5B5B5B",
                    lineHeight: "145.02%",
                  }}
                >
                  실시간 코스 진도율. 학습 시간, 코딩 테스트 까지<br></br>
                  체계적인 학습 관리를 제공합니다.
                </div>
              </div>
              <div
                className="right"
                style={{
                  display: "flex",
                  width: "50%",
                  height: "100%",
                }}
              >
                <Image preview={false} src={contactFifthLineImage2}></Image>
              </div>
            </div>
          </div>

          {/* 다섯번째 라인의 세번째 줄 '우리만의 전용 사이트' */}
          <div
            style={{
              marginTop: "206px",
              display: "flex",
              width: "1290px",
              height: "388px",
            }}
          >
            <div
              className="left"
              style={{
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              <Image preview={false} src={contactFifthLineImage}></Image>
            </div>
            <div
              className="right"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "50%",
                height: "100%",
                paddingLeft: "218px",
              }}
            >
              <div
                className="ASIS"
                style={{
                  width: "399px",
                  height: "121px",
                  backgroundColor: "rgba(235, 240, 253, 0.5)",
                  borderRadius: "10px",
                  paddingLeft: "33px",
                  paddingTop: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#5B5B5B",
                    lineHeight: "153.02%",
                  }}
                >
                  AS IS<br></br>
                  우리 회사만을 위한 전용 사이트에서<br></br>
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "700",
                      fontSize: "18px",
                      color: "#6B98FF",
                      lineHeight: "153.02%",
                    }}
                  >
                    홈을 꾸미고
                  </span>{" "}
                  클래스를 관리해 보세요.
                </span>
              </div>
              <div
                className="title"
                style={{
                  marginTop: "20px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  fontSize: "40px",
                  color: "#3888FF",
                  lineHeight: "145.02%",
                  letterSpacing: "-0.025em",
                }}
              >
                우리만의 전용 사이트
              </div>
              <div
                className="description"
                style={{
                  marginTop: "10px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "400",
                  fontSize: "22px",
                  color: "#5B5B5B",
                  lineHeight: "145.02%",
                }}
              >
                수업하다 다른 프로그램 켜서 보여주고,<br></br>
                돌아와서 동영상 재생하고 다시 수업하고...<br></br>이 화면 저
                화면 돌아다닐 필요 없이<br></br>
              </div>
            </div>
          </div>
        </div>

        <div
          className="sixthLine"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "993px",
            backgroundColor: "#F2F2F2",
          }}
        >
          {/* 여섯번째 라인의 첫번째 줄 '학습현황 관리' */}
          <div
            className="Wrap"
            style={{
              display: "flex",
              width: "1190px",
              height: "345px",
            }}
          >
            <div
              className="left"
              style={{
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              <Image preview={false} src={contactSixthLineImage}></Image>
            </div>
            <div
              className="right"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "50%",
                height: "100%",
                paddingLeft: "98px",
              }}
            >
              <div
                className="ASIS"
                style={{
                  width: "399px",
                  height: "121px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  paddingLeft: "33px",
                  paddingTop: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "FFF",
                    lineHeight: "153.02%",
                  }}
                >
                  AS IS<br></br>
                  우리 회사만을 위한 전용 사이트에서<br></br>
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "700",
                      fontSize: "18px",
                      color: "#6B98FF",
                      lineHeight: "153.02%",
                    }}
                  >
                    홈을 꾸미고
                  </span>{" "}
                  클래스를 관리해 보세요.
                </span>
              </div>
              <div
                className="title"
                style={{
                  marginTop: "20px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  fontSize: "40px",
                  color: "#3888FF",
                  lineHeight: "145.02%",
                  letterSpacing: "-0.025em",
                }}
              >
                학습현황 관리
              </div>
              <div
                className="description"
                style={{
                  marginTop: "10px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "400",
                  fontSize: "22px",
                  color: "#5B5B5B",
                  lineHeight: "145.02%",
                }}
              >
                우리 회사만을 위한 전용 사이트에서<br></br>홈을 꾸미고 클래스를
                관리해 보세요.
              </div>
            </div>
          </div>

          {/* 여섯번째 라인의 두번째 줄 '학습Q&A' */}
          <div
            className="Wrap"
            style={{
              display: "flex",
              width: "1190px",
              height: "345px",
              marginTop: "66px",
            }}
          >
            <div
              className="left"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "50%",
                height: "100%",
              }}
            >
              {/* <div
                className="ASIS"
                style={{
                  width: "399px",
                  height: "121px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  paddingLeft: "33px",
                  paddingTop: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "FFF",
                    lineHeight: "153.02%",
                  }}
                >
                  AS IS<br></br>
                  우리 회사만을 위한 전용 사이트에서<br></br>
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "700",
                      fontSize: "18px",
                      color: "#6B98FF",
                      lineHeight: "153.02%",
                    }}
                  >
                    홈을 꾸미고
                  </span>{" "}
                  클래스를 관리해 보세요.
                </span>
              </div> */}
              <div
                className="title"
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  fontSize: "40px",
                  color: "#3888FF",
                  lineHeight: "145.02%",
                  letterSpacing: "-0.025em",
                }}
              >
                학습 Q&A
              </div>
              <div
                className="description"
                style={{
                  marginTop: "10px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "400",
                  fontSize: "22px",
                  color: "#5B5B5B",
                  lineHeight: "145.02%",
                }}
              >
                코스 수강 중 궁금한 내용은 학습 Q&A를 통해<br></br>질문을 남기면
                학습 튜터의 답변을 제공합니다.
              </div>
            </div>
            <div
              className="right"
              style={{
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              <Image preview={false} src={contactSixthLineImage2}></Image>
            </div>
          </div>
        </div>

        <div
          className="seventhLine"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "930px",
            backgroundColor: "#FFF",
          }}
        >
          <div
            className="title"
            style={{
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "700",
              fontSize: "40px",
              color: "#3888FF",
              letterSpacing: "-0.025em",
            }}
          >
            고객 사례
          </div>
          <div
            className="cardsLine"
            style={{ marginTop: "49px", display: "flex" }}
          >
            {/* 첫번째 카드 */}
            <div
              style={{
                width: "410px",
                height: "573px",
                flexDirection: "column",
                borderRadius: "44px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="top"
                style={{
                  width: "100%",
                  height: "206px",
                  backgroundColor: "#303030",
                  borderRadius: "44px 44px 0px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "900",
                    fontSize: "26px",
                    color: "#FFF",
                    lineHeight: "151.52%",
                    letterSpacing: "-0.025em",
                    width: "274px",
                  }}
                >
                  “임직원들이 많을 수록 할인폭이 커져 높은 할인율에 만족”
                </span>
              </div>
              <div
                className="bottom"
                style={{
                  width: "100%",
                  height: "367px",
                  backgroundColor: "#616161",
                  borderRadius: "0px 0px 44px 44px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "151.52%",
                    letterSpacing: "-0.025em",
                    width: "274px",
                    height: "301px",
                  }}
                >
                  임직원 수가 많고 코딩교육에 대한 관심도도 높은편이라 교육과정
                  운영시 어려움이 많은대, 다양한 수강형태와 수준 높은 강사진을
                  제공하여 직원들의 만족도가 높습니다. 또한 교육 과정 설계 및
                  운영, 결과 분석에 이르기까지 체계적인 기업교육 서비스를
                  제공해주셔서 담당자 입장에서도 만족스럽게 운영하고 있습니다.
                </span>
              </div>
            </div>
            {/* 두번째 카드 */}
            <div
              style={{
                width: "410px",
                height: "573px",
                flexDirection: "column",
                borderRadius: "44px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <div
                className="top"
                style={{
                  width: "100%",
                  height: "206px",
                  backgroundColor: "#303030",
                  borderRadius: "44px 44px 0px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "900",
                    fontSize: "26px",
                    color: "#FFF",
                    lineHeight: "151.52%",
                    letterSpacing: "-0.025em",
                    width: "274px",
                  }}
                >
                  “임직원 문의도 전담매니저가, 교육담당자 제반업무 감소”
                </span>
              </div>
              <div
                className="bottom"
                style={{
                  width: "100%",
                  height: "367px",
                  backgroundColor: "#616161",
                  borderRadius: "0px 0px 44px 44px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "151.52%",
                    letterSpacing: "-0.025em",
                    width: "274px",
                    height: "301px",
                  }}
                >
                  임직원이 많음에도 코딩어라이브의 다양한 학습 컨텐츠와 체계적인
                  강사진 운영으로 모든 임직원분들이 만족하며 교육운영 중입니다.
                  또한 임직원들의 문의사항을 전담 매니저께서 모두 대응해주고
                  계셔서 담당자 입장에서 제반 업무가 줄어들어 매우 만족하고
                  있습니다.
                </span>
              </div>
            </div>
            {/* 세번째 카드 */}
            <div
              style={{
                width: "410px",
                height: "573px",
                flexDirection: "column",
                borderRadius: "44px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="top"
                style={{
                  width: "100%",
                  height: "206px",
                  backgroundColor: "#303030",
                  borderRadius: "44px 44px 0px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "900",
                    fontSize: "26px",
                    color: "#FFF",
                    lineHeight: "151.52%",
                    letterSpacing: "-0.025em",
                    width: "274px",
                  }}
                >
                  “복잡한 절차 없는 0원플랜, 임직원 가족도 최대 할인에 만족”
                </span>
              </div>
              <div
                className="bottom"
                style={{
                  width: "100%",
                  height: "367px",
                  backgroundColor: "#616161",
                  borderRadius: "0px 0px 44px 44px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "151.52%",
                    letterSpacing: "-0.025em",
                    width: "274px",
                    height: "301px",
                  }}
                >
                  코드얼라이브의 가장 큰 장점은 복잡한 절차 없이도 안내된 제휴
                  코드만 있으면 임직원분들이 쉽게 수강할 수 있다는 점입니다.
                  임직원 가족도 혜택을 받을 수 있어 현재 많은 직원 및 직원 가족
                  분들이 만족하며 이용 중입니다. 수강 개월 수가 길면 길수록
                  늘어나는 할인혜택 또한 큰 장점이라고 할 수 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="eighthLine"
          style={{
            width: "100%",
            height: "418px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${contactEightLineBackImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "500",
              fontSize: "38px",
              color: "#FFFFFF",
              lineHeight: "161.52%",
            }}
          ></div>
          <div
            style={{ marginTop: "35px", display: "flex", alignItems: "center" }}
          >
            <Image preview={false} src={logoAllWhite}></Image>
            <span
              style={{
                paddingTop: "20px",
                marginLeft: "20px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "500",
                fontSize: "38px",
                color: "#FFFFFF",
              }}
            >
              기업 교육
            </span>
          </div>
          {/* 도입문의하기 버튼 > 버튼 클릭시, 등록 모달창 팝업 */}
          <div
            className="contactButton"
            style={{
              width: "289px",
              height: "68px",
              border: "1px solid #fff",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              marginTop: "44.46px",
              cursor: "pointer",
            }}
            onClick={showModal}
          >
            <Image preview={false} src={contactEightLineBackImage2}></Image>
          </div>
        </div>

        <Footer />
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={949}
          footer={null}
        >
          <div
            className="Wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="title"
              style={{
                marginTop: "48px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "600",
                fontSize: "24px",
                color: "rgba(73, 73, 73, 0.8)",
              }}
            >
              기업/학교 교육문의 신청
            </div>
            <div
              className="form"
              style={{
                marginTop: "28px",
                width: "703px",
                height: "590px",
                border: "1px solid rgba(67, 118, 234, 0.5)",
                borderRadius: "20px",
              }}
            >
              {/* 첫번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "62.25px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    borderRadius: "20px 0px 0px 0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #C7D8FF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    기업/학교명*
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "547.37px",
                    height: "62.25px",
                    borderBottom: "1px solid #C7D8FF",
                    paddingLeft: "20px",
                  }}
                >
                  <Input style={{ width: "224px" }}></Input>
                </div>
              </div>

              {/* 두번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "62.25px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #C7D8FF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    성함*
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "547.37px",
                    height: "62.25px",
                    borderBottom: "1px solid #C7D8FF",
                    paddingLeft: "20px",
                  }}
                >
                  <Input style={{ width: "224px" }}></Input>
                </div>
              </div>

              {/* 세번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "62.25px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #C7D8FF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    이메일*
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "547.37px",
                    height: "62.25px",
                    borderBottom: "1px solid #C7D8FF",
                    paddingLeft: "20px",
                  }}
                >
                  <Input style={{ width: "324px" }}></Input>
                </div>
              </div>

              {/* 네번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "62.25px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #C7D8FF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    휴대폰 번호*
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "547.37px",
                    height: "62.25px",
                    borderBottom: "1px solid #C7D8FF",
                    paddingLeft: "20px",
                  }}
                >
                  <Input style={{ width: "324px" }}></Input>
                </div>
              </div>

              {/* 다섯번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "62.25px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #C7D8FF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    예상교육인원*
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "547.37px",
                    height: "62.25px",
                    borderBottom: "1px solid #C7D8FF",
                    paddingLeft: "20px",
                  }}
                >
                  <Select
                    defaultValue="lucy"
                    style={{
                      width: "224px",
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "disabled",
                        disabled: true,
                        label: "Disabled",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* 여섯번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "116.99px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #C7D8FF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    희망코스*
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "547.37px",
                    height: "116.99px",
                    borderBottom: "1px solid #C7D8FF",
                    paddingLeft: "20px",
                  }}
                >
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      <Radio value={1}>플레이 파이썬 퀵 스타트</Radio>
                      <Radio value={2}>플레이 파이썬 Pack</Radio>
                      <Radio value={3}>플레이 AI Pack</Radio>
                    </Space>
                  </Radio.Group>
                </div>
              </div>

              {/* 일곱번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "62.25px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #C7D8FF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    예상교육시작일*
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "547.37px",
                    height: "62.25px",
                    borderBottom: "1px solid #C7D8FF",
                    paddingLeft: "20px",
                  }}
                >
                  <DatePicker></DatePicker>
                </div>
              </div>

              {/* 여덟번째 줄 */}
              <div
                className="first"
                style={{
                  display: "flex",
                  height: "99px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "155.63px",
                    height: "100%",
                    backgroundColor: "#6997FF",
                    borderRadius: "0px 0px 0px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    문의사항
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingTop: "5px",
                    width: "547.37px",
                    height: "99px",
                    paddingLeft: "20px",
                  }}
                >
                  <TextArea
                    showCount
                    maxLength={100}
                    style={{
                      width: "500px",
                      height: 70,
                      resize: "none",
                    }}
                    onChange={onChange}
                    placeholder="추가로 문의 또는 요청하실 내용이 있다면 작성해 주세요.(선택) "
                  />
                </div>
              </div>
            </div>
            {/* 개인정보 수집 및 이용에 동의 */}
            <div
              className="q1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "21px",
                marginTop: "27px",
              }}
            >
              <Checkbox onChange={onChange}></Checkbox>
              <span
                style={{
                  width: "258px",
                  marginLeft: "6px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#A4A4A4",
                }}
              >
                개인정보 수집 및 이용에 동의합니다.*
              </span>
              {/* 버튼 */}
              <div
                className="faqBtn"
                style={{
                  marginLeft: "7px",
                  width: "11px",
                  height: "7px",
                  backgroundImage: faqBtnImage1_1,
                  cursor: "pointer",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                onClick={(e) => faqBtnHandler1_1(e)}
              ></div>
            </div>
            {/* 버튼 눌렀을 때, height이 0으로 축소 */}
            <div
              className="a1"
              style={{
                transition: "0.5s ease-in-out",
                height: faqBtnHeight1_1,
                overflow: "hidden",
                marginTop: "10px",
                paddingLeft: "95px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "400",
                fontSize: "12px",
                color: "#A4A4A4",
                lineHeight: "185%",
              }}
            >
              <span>
                ο 수집목적<br></br> : 서비스 제공을 위한 이용자 식별 및 본인여부
                확인<br></br> : 서비스 이용 의사 확인, 계약 이행을 위한 연락민원
                등 고객 고충 처리<br></br> - 수집항목 : 신청자명, 이메일,
                휴대폰번호, 학교 또는 기관명
                <br></br>- 보유기간 : 수신 거부 요청 시까지 또는 미요청 시 수집
                후 1년
                <br></br>※ 서비스 제공을 위해서 필요한 최소한의 개인정보이므로
                동의를 해 주셔야 서비스를 이용하실 수 있습니다.
              </span>
            </div>
            {/* 제출하기 버튼 */}
            <div
              className="Submit"
              style={{
                marginTop: "27px",
                width: "176px",
                height: "52px",
                background: "#6B98FF",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "50px",
              }}
            >
              <span
                style={{
                  fontFamily: "thisHow",
                  fontWeight: "400",
                  fontSize: "17px",
                  color: "#FFF",
                  cursor: "pointer",
                }}
              >
                제출하기
              </span>
            </div>
          </div>
        </Modal>
      </div>
    );
}

export default ContactPage;