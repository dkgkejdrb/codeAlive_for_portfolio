import Header2 from "../app/Header2";
import { Button, Input, Image, Pagination, Modal  } from "antd";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import QAsearchImage from "../Assets/QAsearchImage.png";

import noticeUpArrow from "../Assets/noticeUpArrow.png"
import noticeDownArrow from "../Assets/noticeDownArrow.png"
import noticeMenuButton from "../Assets/noticeMenuButton.png"


const QA = () => {
  // 검색 입력박스 관련
  const [placeholderImage, setPlaceholderImage] = useState(
    `url(${QAsearchImage})`
  );

  const [value, setValue] = useState("");

  const onSearch = (e) => {
    let _value = e.nativeEvent.path[0].value;
    if (_value.length > 0) {
      setPlaceholderImage("");
    } else {
      setPlaceholderImage(`url(${QAsearchImage})`);
    }
  };

  // 게시판 목록에만 있다면, true
  // 게시판에 항목을 클릭했다면, false
  const [onList, setOnList] = useState(true);

  // 실제 적용시, id 값을 활용해 서버에서 조회하여 뿌려줘야 함
  //
  const listHandler = (e) => {
    setOnList(false);
    console.log(e.target.id);
  };

  // 동라가기 버튼
  const backHandler = () => {
    setOnList(true);
  }

      // QA 가이드 세부 내용 확인
      const [isModalGuideOpen, setIsModalGuideOpen] = useState(false);

      const showModalGuide = (e) => {
        setIsModalGuideOpen(true);
    }

    const handleGuideCancel = () => {
        setIsModalGuideOpen(false);
    };

    const handleGuideOk = () => {
        setIsModalGuideOpen(false);
    };

    const [ totalView, setTotalView ] = useState(false);
    const [ totalBack, setTotalBack ] = useState('#FFF');
    const [ totalColor, setTotalColor ] = useState('#000000');

    const [ informationView, setInformationView ] = useState(false);
    const [ informationBack, setInformationBack ] = useState('#FFF');
    const [ informationColor, setInformationColor ] = useState('#000000');

    const [ webuseView, setWebuseView ] = useState(false);
    const [ webuseBack, setWebuseBack ] = useState('#FFF');
    const [ webuseColor, setWebuseColor ] = useState('#000000');

    const [ purchaseView, setPurchaseView ] = useState(false);
    const [ purchaseBack, setPurchaseBack ] = useState('#FFF');
    const [purchaseColor, setPurchaseColor] = useState("#000000");

        // 처음 FAQ 화면 진입 시, '전체 탭' 클릭한 상태로 출력
        useEffect(() => {
          setTotalView(true);
          setTotalBack("#000000");
          setTotalColor("#FFF");
        }, []);

        const btnHandler = (e) => {
          const id = e.target.id;

          if (id === "tab_total" || id === "tab_total_text") {
            setTotalView(true);
            setInformationView(false);
            setWebuseView(false);
            setPurchaseView(false);
            setTotalBack("#000000");
            setTotalColor("#FFF");
            setInformationBack("#FFF");
            setInformationColor("#000000");
            setWebuseBack("#FFF");
            setWebuseColor("#000000");
            setPurchaseBack("#FFF");
            setPurchaseColor("#000000");
          }
          if (id === "tab_information" || id === "tab_information_text") {
            setTotalView(false);
            setInformationView(true);
            setWebuseView(false);
            setPurchaseView(false);
            setTotalBack("#FFF");
            setTotalColor("#000000");
            setInformationBack("#000000");
            setInformationColor("#FFF");
            setWebuseBack("#FFF");
            setWebuseColor("#000000");
            setPurchaseBack("#FFF");
            setPurchaseColor("#000000");
          }
          if (id === "tab_webuse" || id === "tab_webuse_text") {
            setTotalView(false);
            setInformationView(false);
            setWebuseView(true);
            setPurchaseView(false);
            setTotalBack("#FFF");
            setTotalColor("#000000");
            setInformationBack("#FFF");
            setInformationColor("#000000");
            setWebuseBack("#000000");
            setWebuseColor("#FFF");
            setPurchaseBack("#FFF");
            setPurchaseColor("#000000");
          }
          if (id === "tab_purchase" || id === "tab_purchase_text") {
            setTotalView(false);
            setInformationView(false);
            setWebuseView(false);
            setPurchaseView(true);
            setTotalBack("#FFF");
            setTotalColor("#000000");
            setInformationBack("#FFF");
            setInformationColor("#000000");
            setWebuseBack("#FFF");
            setWebuseColor("#000000");
            setPurchaseBack("#000000");
            setPurchaseColor("#FFF");
          }
        }

  return (
    <div className="notice" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Header2 />
      <Contact />
      <div
        className="Wrap"
        style={{
          width: "100%",
          minHeight: "1017px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FBFBFB",
          paddingBottom: "50px"
        }}
      >
        {/* 공지사항 */}
        <span
          style={{
            marginTop: "224px",
            fontFamily: `'Noto Sans', 'sans-serif'`,
            color: "#2D2D2D",
            fontSize: "35px",
            fontWeight: "600",
          }}
        >
          학습Q&A
        </span>
        <span
          style={{
            fontFamily: `'Noto Sans', 'sans-serif'`,
            color: "#2D2D2D",
            fontSize: "24px",
            fontWeight: "400",
            marginTop: "5px",
          }}
        >
          코드얼라이브 학습자들을 위한 빠른 Q&A
        </span>
        <span
          onClick={showModalGuide}
          style={{
            fontFamily: `'Noto Sans', 'sans-serif'`,
            color: "#6B98FF",
            fontSize: "18px",
            fontWeight: "700",
            textDecoration: "underline",
            cursor: "pointer",
            marginTop: "5px",
          }}
        >
          학습 Q&A 이용안내
        </span>
        {/* 검색란 */}
        <Input
          onChange={(e) => onSearch(e)}
          style={{
            marginTop: "70px",
            width: "891px",
            height: "70px",
            border: "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: "42px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: placeholderImage,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontSize: "24px",
            color: "6F6F6F",
            textAlign: "center",
          }}
        >
          {/* 돋보기 모양 이미지 */}
        </Input>
        <div className="Tabs" style={{ marginTop: "39px", display: "flex" }}>
          <div
            id={"tab_total"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              width: "345px",
              height: "70px",
              border: "1px solid #DFDFDF",
              borderRadius: "16px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "400",
              fontSize: "24px",
              color: totalColor,
              backgroundColor: totalBack,
            }}
            onClick={(e) => btnHandler(e)}
          >
            <span id={"tab_total_text"}>전체</span>
          </div>
          <div
            id={"tab_information"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              width: "345px",
              height: "70px",
              border: "1px solid #DFDFDF",
              borderRadius: "16px",
              marginLeft: "21px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "400",
              fontSize: "24px",
              color: informationColor,
              backgroundColor: informationBack,
            }}
            onClick={(e) => btnHandler(e)}
          >
            <span id={"tab_information_text"}>플레이파이썬</span>
          </div>
          <div
            id={"tab_webuse"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              width: "345px",
              height: "70px",
              border: "1px solid #DFDFDF",
              borderRadius: "16px",
              marginLeft: "21px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "400",
              fontSize: "24px",
              color: webuseColor,
              backgroundColor: webuseBack,
            }}
            onClick={(e) => btnHandler(e)}
          >
            <span id={"tab_webuse_text"}>플레이 AI</span>
          </div>
        </div>
        <div
          className="Contents"
          style={{
            width: "100%",
            height: "100%",
            marginTop: "83px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {totalView ? (
            <div
              style={{
                width: "1314px",
                height: "298px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff",
                border: "1px solid #C3D2F4",
                borderRadius: "25px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "700",
                fontSize: "28px",
                color: "#494949",
              }}
            >
              등록한 질문이 아직 없습니다.
            </div>
          ) : informationView ? (
            <>플레이파이썬</>
          ) : (
            webuseView && <>플레이AI</>
          )}
        </div>

        <Pagination pageSize={10} defaultCurrent={1} style={{ marginTop: "20px" }}></Pagination>
      </div>
      <Footer />
      <Modal
        open={isModalGuideOpen}
        onOk={handleGuideOk}
        onCancel={handleGuideCancel}
        width={810}
        footer={null}
      >
        <div
          className="wrap"
          style={{
            width: "100%",
            paddingTop: "55px",
            paddingBottom: "55px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="title"
            style={{
              fontFamily: "thisHow",
              fontWeight: "700",
              fontSize: "24px",
              color: "#373737",
            }}
          >
            학습 Q&A 이용안내
          </div>
          <div
            className="subTitle"
            style={{
              marginTop: "6px",
              width: "518px",
              fontFamily: `'Noto Sans', 'sans-serif'`,
              fontWeight: "400",
              fontSize: "14px",
              color: "#373737",
              lineHeight: "170.8%",
              textAlign: "center",
            }}
          >
            학습 Q&A은 코드얼라이브 수강생을 위해 준비된 수업 관련 Q&A
            게시판입니다.<br></br>
            수강 코스를 1개라도 신청했다면 수업 관련 질문을 등록할 수 있어요!
            <br></br>
            지금 바로 질문을 등록하고, 빠르게 학습 튜터의 답변을 받아보세요!
          </div>
          <div
            className="box"
            style={{
              marginTop: "36px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "595px",
              height: "211px",
              background: "#E5EBF9",
              borderRadius: "22px",
            }}
          >
            <div
              style={{
                color: "#476CC0",
                fontFamily: "thisHow",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              튜터 답변 시간
            </div>
            <div
              className="boxInBox"
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "518px",
                height: "121px",
                background: "#fff",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "24px",
                  background: "#476CC0",
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                답변 시간: 평일 오전 10시 ~ 오후 17시
              </div>
              <div
                style={{
                  marginTop: "11px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "170.8%",
                  textAlign: "center",
                }}
              >
                코드 얼라이브에 모든 코스에 수업과 관련된 모든 질문!<br></br>꼭
                학습에 관련된 질문이 아니여도 친절한 학습 튜터님의 친절한 답변을
                드립니다. 😊
              </div>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                marginLeft: "85px",
                marginTop: "13px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "170.8%",
                color: "#747474",
              }}
            >
              *평균 30분 이내 답변 드리며, 답변 시간 외 질문은 다음날 오전 중
              답변!<br></br>
              주말/공휴일에는 답변이 어렵습니다.
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default QA;