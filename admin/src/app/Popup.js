import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const { Header, Content, Footer, Sider, Upload } = Layout;

const Popup = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 리액트 에디터
    const [value, setValue] = useState('');

    // 에디터 모듈 & 포맷
    const modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    };
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    // 사용유무 라디오 버튼 관련
    const [used, setUsed] = useState(false);
    const onUsedChange = (e) => {
        console.log("radio checked", e.target.value);
        setUsed(e.target.value);
    };


    return (
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "50px",
          }}
        ></Header>
        {/* 게시중인 긴급 팝업&팝업 에디터 */}
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: "24px",
              height: "860px",
              display: "flex",
            }}
          >
            <div
              className="popupSearch"
              style={{
                width: "30%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                // border: "1px solid",
                padding: "0px 15px 0px 15px"
              }}
            >
              <div
                className="title"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "32px",
                }}
              >
                <span>게시중인 긴급 팝업</span>
              </div>
              <div
                className="draggableSection"
                style={{ border: "1px solid" }}
              ></div>
            </div>
            <div
              className="Editor"
              style={{
                width: "70%",
                height: "100%",
                // border: "1px solid",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="title"
                style={{
                  display: "flex",
                  height: "60px",
                  alignItems: "center",
                }}
              >
                <div
                  className="popupTitle"
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <span style={{ width: "10%" }}>팝업 타이틀</span>
                  <Input style={{ width: "50%" }}></Input>
                  <div
                    style={{
                      width: "40%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <span>사용 유무</span>
                    <Radio.Group
                      onChange={onUsedChange}
                      value={used}
                      style={{ marginLeft: "50px" }}
                    >
                      <Radio value={true}>사용</Radio>
                      <Radio value={false}>미사용</Radio>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div
                className="detailSection"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "600px",
                //   border: "1px solid",
                  alignItems: "center",
                }}
              >
                <span style={{ width: "10%" }}>팝업 내용</span>
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  modules={modules}
                  formats={formats}
                  style={{ width: "1000px", height: "500px" }}
                ></ReactQuill>
              </div>
              <div
                className="date"
                style={{ display: "flex", alignItems: 'center', height: '60px' }}
              >
                <span style={{ width: "10%" }}>게시 기간</span>
                <div style={{ width: "90%", display: "flex" }}>
                  <DatePicker
                    renderExtraFooter={() => "extra footer"}
                    showTime
                  />
                  <div
                    style={{
                      width: "10px",
                      padding: "0px 50px 0px 50px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span>-</span>
                  </div>
                  <DatePicker
                    renderExtraFooter={() => "extra footer"}
                    showTime
                  />
                </div>
              </div>
              <div className='footerButton'
                style={{ display: "flex", width: "100%", justifyContent: 'center', alignItems: 'center', height: '60px' }}
              >
                <Button>취소</Button>
                <Button  style={{ marginLeft: '20px' }}>저장</Button>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
}

export default Popup;