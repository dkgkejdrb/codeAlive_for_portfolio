import { Input, Button, Image } from "antd";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import logoDark from '../Assets/logoDark.svg';
import axios from "axios";
import MyPageSlice from "./MyPageSlice";
import { useSelector, useDispatch } from 'react-redux';
const SERVER_URL = 'http://192.168.54.93:3570/api/v1/admin/user/login';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 인풋 창에서 ID 받아오기
  const typingId = (e) => {
    setId(e.target.value);
  };

  // 인풋 창에서 PW 받아오기
  const typingPw = (e) => {
    setPw(e.target.value);
  };

  // 로그인 버튼 클릭시, 관리자 아이디인지 체크
  const CheckLogin = () => {
    axios
      .post(SERVER_URL, {
        userid: id,
        password: pw,
      })
      .then((response) => {
        dispatch(MyPageSlice.actions.setTOKEN(response.data));
        alert("환영합니다!");
        navigate("/mypage");
        // 슬라이스로 토큰 던지기

      })
      .catch((error) => {
        alert(error.response.data.messages[0]);
        console.log(error.response.data.messages[0]);
      });
  };

  const ChangePW = () => {
    navigate("/changepw");
  };

  const ChangePWInfo = () => {
    navigate("/redirect", {
      state: {
        url: "https://www.notion.so/5397603e24124054aac86cb8faaa0734",
      },
    });
  };

  return (
    <div
      className="Login"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="Wrap"
        style={{
          backgroundColor: "#EEEEEE",
          width: "600px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={logoDark} preview={false} width={200} />
        <div
          className="wrap"
          style={{
            marginTop: "50px",
            backgroundColor: "#fff",
            width: "560px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            ID
            <Input
              style={{ marginLeft: "20px" }}
              placeholder="아이디를 입력해주세요"
              onChange={(e) => {
                typingId(e);
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            PW
            <Input
              style={{ marginLeft: "12px" }}
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                typingPw(e);
              }}
            />
          </div>
          <Button onClick={CheckLogin}>로그인</Button>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                marginRight: "20px",
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
              onClick={ChangePW}
            >
              비밀번호 변경
            </div>
          </div>
          <div
            style={{
              fontSize: "12px",
              marginTop: "20px",
              lineHeight: "200%",
            }}
          >
            ※ 본 페이지는 코드얼라이브 관리자 페이지입니다.<br></br>※ 본 페이지
            서비스 계정 신청은
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={ChangePWInfo}
            >
              노션 계정신청페이지
            </span>
            에 요청해주세요.<br></br>※ 서비스 이용은 코딩콘텐츠팀에 문의하여
            주시기 바랍니다.<br></br>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <span>COPYRIGHT (C) 2022 BY creverse.</span>
        </div>
      </div>
    </div>
  );
}

export default Login;