import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, Space, Dropdown, message, DatePicker, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const { Header, Content, Footer, Sider, Upload } = Layout;

const Notice = () => {
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

    // 최상위글 드랍다운
    // API에 맞춰 조회되게 바꿔야 함
    const items = [
        {
          label: '1st menu item',
          key: '1',
        
        },
        {
          label: '2nd menu item',
          key: '2',
        
        },
        {
          label: '3rd menu item',
          key: '3',
        },
        {
          label: '4rd menu item',
          key: '4',
        },
      ];

      const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      };

      const menuProps = {
        items,
        onClick: handleMenuClick,
      };

    // 셀렉트 박스
    const handleChange = (value) => {
      console.log(`selected ${value}`);
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
              className="Editor"
              style={{
                width: "100%",
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
                  <span style={{ width: "10%" }}>타이틀</span>
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
                  <span style={{ width: "10%" }}>최상위글</span>
                  {/* <Input style={{ width: "50%" }}></Input> */}
                  <Select
                      defaultValue="lucy"
                      style={{
                        width: 250,
                        marginTop: "10px",
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
                    ></Select>
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
                className="footerButton"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60px",
                }}
              >
                <Button>취소</Button>
                <Button style={{ marginLeft: "20px" }}>저장</Button>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
}

export default Notice;