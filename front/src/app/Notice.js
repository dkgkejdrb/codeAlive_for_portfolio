import Header2 from "../app/Header2";
import { Button, Input, Image, Pagination  } from "antd";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import noticePlaceholderImage from "../Assets/noticePlaceholderImage.png";
import noticeUpArrow from "../Assets/noticeUpArrow.png"
import noticeDownArrow from "../Assets/noticeDownArrow.png"
import noticeMenuButton from "../Assets/noticeMenuButton.png"


const Notice = () => {
  // 검색 입력박스 관련
  const [placeholderImage, setPlaceholderImage] = useState(
    `url(${noticePlaceholderImage})`
  );

  const [value, setValue] = useState("");

  const onSearch = (e) => {
    let _value = e.nativeEvent.path[0].value;
    if (_value.length > 0) {
      setPlaceholderImage("");
    } else {
      setPlaceholderImage(`url(${noticePlaceholderImage})`);
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

  return (
    <div className="notice" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Header2 />
      <Contact />
      {onList ? (
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
          }}
        >
          {/* 공지사항 */}
          <div
            style={{ marginTop: "25px", color: "#2D2D2D", fontSize: "40px", fontWeight: "600",  }}
          >
            공지사항
          </div>
          {/* 검색란 */}
          <Input
            onChange={(e) => onSearch(e)}
            style={{
              marginTop: "9px",
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
          {/* 공지사항 목록 */}
          <div
            style={{
              width: "1562px",
              height: "366px",
              //   border: "1px solid",
              marginTop: "64px",
            }}
          >
            {/* 테이블헤더 */}
            <div
              className="tableHeader"
              style={{
                width: "100%",
                height: "91px",
                borderBottom: "1px solid #C5C5C5",
                display: "flex",
                // paddingLeft: "80px",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  width: "217px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "700",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  NO
                </span>
              </div>
              <div
                style={{
                  width: "800px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "700",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  제목
                </span>
              </div>
              <div
                style={{
                  width: "217px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "700",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  등록일
                </span>
              </div>
            </div>
            {/* 첫번째 행 */}
            {/* API 연결하여 보여줘야 하는 행, 이거는 전시용. */}
            <div
              className="list firstRow"
              style={{
                width: "100%",
                height: "91px",
                borderBottom: "1px solid #C5C5C5",
                display: "flex",
                // paddingLeft: "80px",
                justifyContent: "space-evenly",
              }}
            >
              {/* 마우스 오버 시, 이미지 변경 */}
              <div
                style={{
                  width: "217px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "300",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  2
                </span>
              </div>
              {/* 마우스 오버 시, 밑줄 */}
              <div
                id="2"
                className="title"
                onClick={(e) => {
                  listHandler(e);
                }}
                style={{
                  width: "800px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "300",
                }}
              >
                <span
                  id="2"
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  크레버스 재원생을 위한 신규 이벤트!
                </span>
              </div>
              <div
                style={{
                  width: "217px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "300",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  2023-01-25
                </span>
              </div>
            </div>

            {/* 두번째 행 */}
            {/* API 연결하여 보여줘야 하는 행, 이거는 전시용. */}
            <div
              className="list firstRow"
              style={{
                width: "100%",
                height: "91px",
                borderBottom: "1px solid #C5C5C5",
                display: "flex",
                // paddingLeft: "80px",
                justifyContent: "space-evenly",
              }}
            >
              {/* 마우스 오버 시, 이미지 변경 */}
              <div
                style={{
                  width: "217px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "300",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  1
                </span>
              </div>
              {/* 마우스 오버 시, 밑줄 */}
              <div
                id="1"
                className="title"
                onClick={(e) => {
                  listHandler(e);
                }}
                style={{
                  width: "800px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "300",
                }}
              >
                <span
                  id="1"
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  코드 얼라이브 신규 오픈!
                </span>
              </div>
              <div
                style={{
                  width: "217px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "300",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                >
                  2023-01-23
                </span>
              </div>
            </div>
          </div>
          <Pagination pageSize={10} defaultCurrent={1}></Pagination>
        </div>
      ) : (
        <div
          className="Wrap"
          style={{
            width: "100%",
            minHeight: "1112px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FBFBFB",
          }}
        >
          {/* 공지사항 */}
          <div
            style={{
              marginTop: "29px",
              color: "#2D2D2D",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            공지사항
          </div>

          {/* 선택한 공지사항의 제목&등록일 */}
          <div
            style={{
              marginTop: "50px",
              width: "1562px",
              height: "71px",
              borderTop: "1px solid #C5C5C5",
              borderBottom: "1px solid #C5C5C5",
              display: "flex",
              alignItems: "center",
              paddingLeft: "55px",
              paddingRight: "55px",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "500",
                fontSize: "22px",
                color: "#000000",
              }}
            >
              제목
            </span>
            <span
              style={{
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "500",
                fontSize: "22px",
                color: "#000000",
              }}
            >
              2023.01.20
            </span>
          </div>

          {/* 선택한 공지사항의 본문 */}
          <div
            style={{
              width: "1562px",
              minHeight: "418px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "55px",
            }}
          >
            본문 내용
          </div>

          {/* 윗글&아랫글& 등록일 */}
          <div
            style={{
              width: "1562px",
              height: "132px",
              border: "1px solid #C5C5C5",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "50%",
                display: "flex",
                alignItems: "center",
                paddingLeft: "55px",
              }}
            >
              <Image preview={false} src={noticeUpArrow}></Image>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#000000",
                  marginLeft: "57px",
                  width: "100px",
                }}
              >
                윗글
              </span>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#000000",
                  marginLeft: "257px",
                  width: "850px",
                }}
              >
                크레버스 재원생을 위한 신규 이벤트!
              </span>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#000000",
                }}
              >
                등록일
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "50%",
                display: "flex",
                alignItems: "center",
                paddingLeft: "55px",
              }}
            >
              <Image preview={false} src={noticeDownArrow}></Image>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#000000",
                  marginLeft: "57px",
                  width: "100px",
                }}
              >
                아랫글
              </span>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#000000",
                  marginLeft: "257px",
                  width: "850px",
                }}
              >
                크레버스 재원생을 위한 신규 이벤트!
              </span>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#000000",
                }}
              >
                등록일
              </span>
            </div>
            {/* 목록 버튼 */}
            <div 
                onClick={backHandler}
                style={{ marginTop: "26px", width: "196px", height: "74px", border: '1px solid rgba(197, 197, 197, 0.5)', borderRadius: "9px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
              <Image src={noticeMenuButton}></Image>
              <span
                style={{
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#000000",
                  marginLeft: "13px",
                }}
              >
                목록
              </span>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Notice;