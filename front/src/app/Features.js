import Header2 from "./Header2";
import featureFirstLineBackgroundImage from "../Assets/featureFirstLineBackgroundImage.png"
import logoDark from "../Assets/logoDark.svg";
import featuresFristLineImage from "../Assets/featuresFristLineImage.png"
import featuresFristLineImage2 from "../Assets/featuresFristLineImage2.png"
import featuresFristLineImage3 from "../Assets/featuresFristLineImage3.png"
import featuresFristLineImage4 from "../Assets/featuresFristLineImage4.png"
import featuresFristLineImage5 from "../Assets/featuresFristLineImage5.png"
import featuresFristLineImage6 from "../Assets/featuresFristLineImage6.png"
import featuresSecondLineImage from "../Assets/featuresSecondLineImage.png"
import featuresThirdLineImage from "../Assets/featuresThirdLineImage.png"
import featuresFourthLineImage from "../Assets/featuresFourthLineImage.png"
import featuresFourthLineImage2 from "../Assets/featuresFourthLineImage2.png"
import Footer from "./Footer";
import Contact from "./Contact";

import { Image } from "antd";


const Features = () => {

    return (
      <div
        className="features"
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      >
        <Header2 />
        <Contact />
        <div
          style={{ width: "100%", height: "86px", backgroundColor: "#FCFCFC" }}
        ></div>
        <div
          className="firstLine"
          style={{
            width: "100%",
            height: "1153px",
            backgroundColor: "#FBFBFB",
          }}
        >
          <div
            className="Wrap"
            style={{
              width: "100%",
              height: "376px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "409px",
            }}
          >
            <div
              style={{ color: "#457EFF", fontWeight: "600", fontSize: "26px" }}
            >
              code Alive
            </div>
            <div
              style={{ color: "#243256", fontWeight: "400", fontSize: "50px" }}
            >
              기존 교육 프로그램과
            </div>
            {/* 첫번째 span 무엇이 다른가요? */}
            {/* 두번째 span 파란색 아랫줄 효과 */}
            <div
              className="wrap"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#243256",
                  fontWeight: "600",
                  fontSize: "50px",
                  zIndex: "1",
                }}
              >
                무엇이 다른가요?
              </span>
              <span
                className="underline"
                style={{
                  width: "386px",
                  height: "20px",
                  backgroundColor: "#457EFF",
                  position: "absolute",
                  top: "50px",
                  zIndex: "0",
                }}
              ></span>
            </div>
          </div>
          <div
            className="Wrap2"
            style={{
              width: "100%",
              height: "780px",
              display: "flex",
              position: "relative",
            }}
          >
            {/* 왼쪽영역 */}
            <div
              className="left"
              style={{
                width: "60%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image
                preview={false}
                src={featuresFristLineImage3}
                width={928.48}
                style={{ position: "absolute", bottom: "250px", left: "110px" }}
              ></Image>
            </div>

            {/* 오른쪽영역 */}
            <div
              className="right"
              style={{
                paddingTop: "70px",
                paddingLeft: "100px",
                width: "40%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                className="title"
                style={{
                  width: "412px",
                  fontSize: "40px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  color: "#383838",
                  lineHeight: "145%",
                }}
              >
                실시간 인터랙티브<br></br>프로그래밍
              </div>
              <div
                className="subTitle"
                style={{
                  marginTop: "18px",
                  width: "412px",
                  fontSize: "18px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "400",
                  color: "#393939",
                  lineHeight: "153.02%",
                }}
              >
                코드 실행 결과를 텍스트 출력으로 확인하는 기존 실습 교육과 달리
                작성한 코드에 따라 캐릭터, 사물 등의 3D 오브젝트가 실시간으로
                반응하는 인터랙티브 프로그래밍을 즐겨보세요 게임을 하듯 직접
                코드를 짜고 실감 있게 보여지는 실행 결과를 직접 확인하며
                실시간으로 피드백을 받습니다
              </div>
            </div>
          </div>
        </div>

        <div
          className="secondLine"
          style={{
            width: "100%",
            height: "741px",
            display: "flex",
            backgroundColor: "#457EFF",
          }}
        >
          {/* 왼쪽 영역 */}
          <div
            className="left"
            style={{
              paddingLeft: "440px",
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div
              className="title"
              style={{
                width: "412px",
                fontSize: "40px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "700",
                color: "#FFF",
                lineHeight: "145%",
              }}
            >
              메타버스 학습 공간
            </div>
            <div
              className="subTitle"
              style={{
                marginTop: "18px",
                width: "430px",
                fontSize: "18px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "400",
                color: "#FFF",
                lineHeight: "153.02%",
              }}
            >
              하이폴리 그래픽으로 탄생한 현실감 있는 배경과 스토리 기반의 문제
              해결을 통해 몰입도 높은 학습 경험을 제공합니다 유니티 3D 그래픽
              기술이 적용된 메타버스 학습 공간은 파이썬을 쉽고 재미있게 배우는
              완벽한 방법을 제공합니다
            </div>
          </div>

          {/* 오른쪽 영역 */}
          <div
            className="right"
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              preview={false}
              src={featuresFristLineImage4}
              width={847}
            ></Image>
          </div>
        </div>

        <div
          className="thirdLine"
          style={{
            width: "100%",
            height: "893px",
            display: "flex",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          {/* 왼쪽영역 */}
          <div
            className="left"
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              paddingLeft: "311px",
            }}
          >
            <Image
              preview={false}
              src={featuresFristLineImage6}
              width={673}
            ></Image>
          </div>

          {/* 오른쪽 영역 */}
          <div
            className="right"
            style={{
              paddingRight: "137px",
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingLeft: "126px",
            }}
          >
            <Image
              className="hello"
              src={featuresFristLineImage5}
              width={1417}
              style={{ position: "absolute", bottom: "35px", left: "250px" }}
            ></Image>
            <div
              className="title"
              style={{
                width: "527px",
                fontSize: "40px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "700",
                color: "#383838",
                lineHeight: "145%",
              }}
            >
              가이드 러닝
            </div>
            <div
              className="subTitle"
              style={{
                marginTop: "18px",
                width: "527px",
                fontSize: "18px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "400",
                color: "#393939",
                lineHeight: "153.02%",
              }}
            >
              코딩 개념을 적용하는 방법을 시각적, 단계적으로 설명하는 튜토리얼,
              배운 개념을 활용하고 응용하여 문제를 해결하는 Practice, Challenge,
              파이썬 문법 개념을 알려주는 API, 가이드 캐릭터의 힌트 제공 등을
              통해 잘 설계된 안내와 실습 경로를 제공합니다
            </div>
          </div>
        </div>

        <div
          className="fourthLine"
          style={{
            width: "100%",
            height: "722px",
            display: "flex",
            backgroundImage: `url(${featuresFourthLineImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* 왼쪽영역 */}
          <div
            className="left"
            style={{
              paddingLeft: "487px",
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div
              className="title"
              style={{
                width: "412px",
                fontSize: "40px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "700",
                color: "#FFF",
                lineHeight: "145%",
              }}
            >
              올인원 학습 플랫폼
            </div>
            <div
              className="subTitle"
              style={{
                marginTop: "18px",
                width: "527px",
                fontSize: "18px",
                fontFamily: `'Noto Sans', 'sans-serif'`,
                fontWeight: "400",
                color: "#FFF",
                lineHeight: "153.02%",
              }}
            >
              하나의 플랫폼 안에서 개념 이해부터 코드 구현까지<br></br>모든 것이
              가능한 코스웨어를 제공합니다<br></br>
              학습-실습-관리로 이어지는 체계적이고<br></br>통합적인 학습
              플랫폼을 경험할 수 있습니다
            </div>
          </div>
          {/* 오른쪽영역 */}
          <div
            className="right"
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              preview={false}
              src={featuresFourthLineImage}
              width={763}
            ></Image>
          </div>
        </div>

        <Footer />
      </div>
    );
}

export default Features;