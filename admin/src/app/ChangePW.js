import { Input, Button, Image } from "antd";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import logoDark from '../Assets/logoDark.svg';
import axios from "axios";

const SERVER_URL = 'http://192.168.54.93:3570/api/v1/admin/user/password';


const ChangePW = () => {
  const navigate = useNavigate();
  // 변경하길 원하는 id
  const [id, setId] = useState("");
  // 기존 패스워드
  const [pw1, setPw1] = useState("");
  // 변경을 원하는 패스워드
  const [pw2, setPw2] = useState("");
  // 변경을 원하는 패스워드
  const [pw3, setPw3] = useState("");

  // 인풋 창에서 ID 받아오기
  const typingId = (e) => {
    setId(e.target.value);
  };

  // 인풋 창에서 기존 PW 받아오기
  const typingPw1 = (e) => {
    setPw1(e.target.value);
  };

  // 인풋 창에서 기존 PW 받아오기
  const typingPw2 = (e) => {
    setPw2(e.target.value);
  };

  // 인풋 창에서 기존 PW 받아오기
  const typingPw3 = (e) => {
    setPw3(e.target.value);
  };

  const CheckLogin = () => {
    axios
    .post(SERVER_URL, {
      userid: id,
      password1: pw1,
      password2: pw2,
      password3: pw3,
    })
    .then((response) => {
      alert("비밀번호가 정상적으로 변경되었습니다!");
      navigate("/");
    })
    .catch((error) => {
      // alert(error.response.data.messages[0]);
      // console.log(error.response.data.messages[0]);
      alert(error);
      console.log(error);
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
        <div
          className="wrap"
          style={{
            marginTop: "10px",
            backgroundColor: "#fff",
            width: "560px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <span>비밀번호 변경</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ width: "150px" }}>ID</span>
            <Input
              style={{ marginLeft: "20px" }}
              width={260}
              onChange={(e) => {
                typingId(e);
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ width: "150px" }}>기존 PW</span>
            <Input
              style={{ marginLeft: "20px" }}
              width={260}
              onChange={(e) => {
                typingPw1(e);
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ width: "150px" }}>변경 PW</span>
            <Input
              style={{ marginLeft: "20px" }}
              width={260}
              onChange={(e) => {
                typingPw2(e);
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ width: "150px" }}>PW 확인</span>
            <Input
              style={{ marginLeft: "20px" }}
              width={260}
              onChange={(e) => {
                typingPw3(e);
              }}
            />
          </div>
          <Button onClick={CheckLogin}>변경</Button>
          <div
            style={{
              fontSize: "12px",
              marginTop: "20px",
              lineHeight: "200%",
            }}
          >
            ※ 비밀번호 잊으신 경우 코드얼라이브<br></br>
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
            에 요청해주세요.
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

export default ChangePW;