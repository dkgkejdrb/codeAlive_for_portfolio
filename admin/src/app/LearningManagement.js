import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, Space, Dropdown, message, DatePicker, Select, Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const { Search } = Input;


const { Header, Content, Footer, Sider, Upload } = Layout;

// ☆☆☆☆☆☆☆☆☆ 테이블-회원의 수강 목록 ☆☆☆☆☆☆☆☆☆
// 요약에 들어가는 테이블 행(데이터)
const datasource = [
    {
        key: "1",
        no: "1",
        name: "홍길동",
        course: "플레이 파이썬 vol.1",
        progress: "50%",
        test: "N",
        codeachieve: "35/80",
        startEndDate: "2022.10.15/2022.10.17",
        finished: "N"
    },
    {
        key: "2",
        no: "2",
        name: "홍길동",
        course: "플레이 파이썬 vol.1",
        progress: "50%",
        test: "N",
        codeachieve: "35/80",
        startEndDate: "2022.10.15/2022.10.17",
        finished: "N"
    },
    {
        key: "3",
        no: "3",
        name: "홍길동",
        course: "플레이 파이썬 vol.1",
        progress: "50%",
        test: "N",
        codeachieve: "35/80",
        startEndDate: "2022.10.15/2022.10.17",
        finished: "N"
    },
  ]
  
  // 요약에 들어가는 테이블 열
  const columns = [
    {
      title: "NO",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "수강생",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "코스",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "진도율",
      dataIndex: "progress",
      key: "progress",
    },
    {
      title: "테스트",
      dataIndex: "test",
      key: "test",
    },
    {
      title: "코드어치브",
      dataIndex: "codeachieve",
      key: "codeachieve",
    },
    {
      title: "코스 시작일 / 종료일",
      dataIndex: "startEndDate",
      key: "starEndDate",
    },
    {
      title: "수료",
      dataIndex: "finished",
      key: "finished",
    },
  ];








const LearningManagement = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 사용유무 라디오 버튼 관련
    const [used, setUsed] = useState(false);
    const onUsedChange = (e) => {
        console.log("radio checked", e.target.value);
        setUsed(e.target.value);
    };

    const onSearch = (value) => console.log(value);

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
  
      // 파일업로드관련
      // 회사 들어가면 API 반영하여 작업
      const props = {
        name: "file",
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        headers: {
          authorization: "authorization-text",
        },
        onChange(info) {
          if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === "done") {
            // message.success(`${info.file.name} file uploaded successfully`);
            console.log(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === "error") {
            // message.error(`${info.file.name} file upload failed.`);
            console.log(`${info.file.name} file upload failed.`);
          }
        },
      };

    // 셀렉트 박스
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

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
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
        ];


    return (
      <Layout className="site-layout">
        <Header
          style={{
            paddingLeft: "40px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            paddingRight: "50px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          학습 관리
        </Header>
        {/* 게시중인 긴급 팝업&팝업 에디터 */}
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* 오른쪽 구역의 높이 */}
          <div
            style={{
              padding: "24px",
              height: "860px",
              display: "flex",
            }}
          >
            <div
              className="Wrap"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="search"
                style={{
                  width: "100%",
                  height: "300px",
                  border: "1px solid",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <span>검색</span>
                </div>
                <div
                  className="userLine"
                  style={{
                    width: "90%",
                    height: "220px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "400px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      회원 타입
                    </span>
                    <Radio.Group
                      onChange={onUsedChange}
                      value={used}
                      style={{ marginTop: "10px" }}
                    >
                      <Radio value={true}>전체 회원</Radio>
                      <Radio value={false}>수강중 회원</Radio>
                      <Radio value={false}>수강 완료 회원</Radio>
                    </Radio.Group>
                  </div>
                  <div
                    className="categorySelectBox"
                    style={{
                      width: "300px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      카테고리
                    </span>
                    {/* API 반영하여 드러나게끔 수정 */}
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
                  </div>
                  <div
                    className="finishStudy"
                    style={{
                      width: "300px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      수료여부
                    </span>
                    {/* API 반영하여 드러나게끔 수정 */}
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
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button style={{ width: "160px", height: "80px" }}>
                      검색
                    </Button>
                  </div>
                </div>
                <div
                  className="searchLine"
                  style={{
                    width: "90%",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Search
                    placeholder="성명, 코스명"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: "980px", marginRight: "50px" }}
                  ></Search>
                </div>
              </div>
              <div
                className="list"
                style={{
                  width: "100%",
                  height: "600px",
                  padding: "10px 0px 0px 10px",
                }}
              >
<Table dataSource={datasource} columns={columns} />

              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
}

export default LearningManagement;