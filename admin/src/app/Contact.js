import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, Space, Dropdown, message, DatePicker, Select, Table, Tabs } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import ReactApexChart from 'react-apexcharts';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import starRed from "../Assets/starRed.svg";
import starYellow from "../Assets/starYellow.svg";
import starPurple from "../Assets/starPurple.svg";

const { Search } = Input;
const { TextArea } = Input;


const { Header, Content, Footer, Sider, Upload } = Layout;
const { RangePicker } = DatePicker;


const Contact = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const onChange = (key) => {
        console.log(key);
      };


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

        

// ☆☆☆☆☆☆☆☆☆ 표-문의 목록 ☆☆☆☆☆☆☆☆☆
const datasource = [
    {
        key: "1",
        no: "1",
        name: "홍길동",
        phoneNumber: "010-1234-****",
        course: "플레이 파이썬 vol.1",
        numberOfStudents: "30명 이하",
        date: "2022.03.30",
        memo: "O",
    },
    {
        key: "2",
        no: "2",
        name: "홍팔순",
        phoneNumber: "010-1234-****",
        course: "플레이 파이썬 vol.1",
        numberOfStudents: "250명 이하",
        date: "2022.03.30",
        memo: "O",
    },
    {
        key: "3",
        no: "3",
        name: "홍팔순",
        phoneNumber: "010-1234-****",
        course: "플레이 파이썬 vol.1",
        numberOfStudents: "250명 이하",
        date: "2022.03.30",
        memo: "O",
    },
  ]
  
  // 열
  const columns = [
    {
      title: "NO",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "신청자",
      dataIndex: "name",
      key: "name",
      onCell: (record) => ({
        onClick: showModal,
        style: {
          color: "blue",
          cursor: "pointer",
          textDecoration: "underline",
        },
      }),
    },
    {
      title: "신청자 휴대번호",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "코스",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "예상교육인원",
      dataIndex: "numberOfStudents",
      key: "numberOfStudents",
    },
    {
      title: "예상교육시작일",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "관리자 메모",
      dataIndex: "memo",
      key: "memo",
    },
  ];

// ☆☆☆☆☆☆☆☆☆ 표-주문 히스토리 ☆☆☆☆☆☆☆☆☆
const datasource2 = [
  {
    key: "1",
    no: "1",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    duration: "2023.01.25~2023.03.31",
  },
  {
    key: "2",
    no: "2",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    duration: "2023.01.25~2023.03.31",
  },
  {
    key: "3",
    no: "3",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    duration: "2023.01.25~2023.03.31",
  },
];
  
  // 열
  const columns2 = [
    {
      title: "NO",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "카테고리",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "코스",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "상품 주문 날짜",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "수강 기간",
      dataIndex: "duration",
      key: "duration",
    },
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
          도입 문의
        </Header>
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
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* 검색 라인 */}
                <div
                  className="searchLine"
                  style={{
                    width: "100%",
                    height: "200px",
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
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="categorySelectBox"
                        style={{
                          marginTop: "20px",
                          width: "600px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "800",
                          }}
                        >
                          코스
                        </span>
                        {/* API 반영하여 드러나게끔 수정 */}
                        {/* 전체, 플레이 파이썬 팩 스타트, 플레이 파이썬 Pack, 플레이 AI Pack */}
                        <Radio.Group onChange={onUsedChange} value={used}>
                          <Radio value={true}>전체</Radio>
                          <Radio value={false}>플레이파이썬 팩 스타트</Radio>
                          <Radio value={false}>플레이 파이썬 Pack</Radio>
                          <Radio value={false}>플레이 AI Pack</Radio>
                        </Radio.Group>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "800",
                          }}
                        >
                          기간
                        </span>
                        <div
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {/* Start date ~ End date */}
                          <RangePicker style={{ width: "400px" }} />
                        </div>
                      </div>
                      {/* 7, 30, 90일 */}
                      <Radio.Group
                        onChange={onUsedChange}
                        value={used}
                        style={{
                          marginLeft: "50px",
                        }}
                      >
                        <Radio value={true}>7일</Radio>
                        <Radio value={false}>30일</Radio>
                        <Radio value={false}>90일</Radio>
                      </Radio.Group>
                      <Button
                        style={{
                          marginLeft: "20px",
                          width: "160px",
                          height: "80px",
                        }}
                      >
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
                      placeholder="신청자 명, 코스 명"
                      allowClear
                      onSearch={onSearch}
                      style={{ width: "980px", marginRight: "50px" }}
                    ></Search>
                  </div>
                </div>

                {/* 문의 목록 라인 - 표 */}
                <div
                  className="Wrap"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    height: "600px",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <div
                    className="list"
                    style={{
                      width: "100%",
                      height: "600px",
                      padding: "10px 0px 0px 10px",
                    }}
                  >
                    <div
                      className="title"
                      style={{
                        width: "100%",
                        height: "40px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        문의 목록
                      </span>
                      <Button style={{ width: "100px", marginTop: "40px" }}>
                        엑셀다운
                      </Button>
                    </div>
                    <div className="tableWrap">
                      {/* 주문 목록 - 표 */}
                      <Table
                        dataSource={datasource}
                        columns={columns}
                        style={{ width: "100%", marginTop: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Modal
          title={`{000} 기업/학교 문의`}
          width={1200}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          // 모달 취소&저장 버튼
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              닫기
            </Button>,
          ]}
        >
          <div
            className="Wrap"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* 모달 > 신청자 인적 사항 */}
            <span
              style={{ fontSize: "16px", marginTop: "40px", fontWeight: "800" }}
            >
              신청자 인적 사항
            </span>
            <div
              className="inquiryInfo"
              style={{
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <span style={{ width: "115.19px" }}>신청자</span>
              <span style={{ width: "250px" }}>{`{주문자명 표시}`}</span>
              <span style={{ width: "115.19px", marginLeft: "212px" }}>
                기업/학교
              </span>
              <span style={{ width: "250px" }}>{`{000기업 표시}`}</span>
            </div>
            {/* 모달 > 신청자 휴대번호&신청자 이메일 */}
            <div
              className="phoneNumber&email"
              style={{
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
                paddingBottom: "40px",
                borderBottom: "1px solid",
              }}
            >
              <span style={{ width: "115.19px" }}>신청자 휴대번호</span>
              <span style={{ width: "250px" }}>{`{신청자 휴대번호 표시}`}</span>
              <span style={{ width: "115.19px", marginLeft: "212px" }}>
                신청자 이메일
              </span>
              <span style={{ width: "250px" }}>{`{000000@creverse.com}`}</span>
            </div>
            {/* 모달 > 희망 코스 */}
            <span
              style={{ fontSize: "16px", marginTop: "40px", fontWeight: "800" }}
            >
              희망 코스
            </span>
            <div
              className="hope&expctInfo"
              style={{
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <span style={{ width: "115.19px" }}>코스</span>
              <span
                style={{ width: "250px" }}
              >{`{플레이 파이썬 퀵 스타트}`}</span>
              <span style={{ width: "115.19px", marginLeft: "212px" }}>
                예상교육일정
              </span>
              <span style={{ width: "250px" }}>{`{2023.01.25}`}</span>
            </div>
            <div style={{ marginTop: "40px", display: "flex" }}>
              <span style={{ width: "115.19px" }}>예상교육인원</span>
              <span style={{ width: "250px" }}>{`{200명 이하}`}</span>
            </div>

            {/* 주문 히스토리 */}
            <div
              className="inquiryMemo"
              style={{
                marginTop: "40px",
                borderTop: "1px solid",
                paddingTop: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                }}
              >
                주문 히스토리
              </span>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    height: "200px",
                    border: "1px solid",
                  }}
                ></div>
              </div>
              <span
                style={{
                  marginTop: "40px",
                  fontSize: "16px",
                  fontWeight: "800",
                }}
              >
                관리자 히스토리
              </span>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* 관리자 히스토리 */}
                <div
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    minHeight: "200px",
                  }}
                >
                  <TextArea
                    showCount
                    style={{
                      height: 200,
                      resize: "none",
                    }}
                    onChange={onChange}
                    placeholder="disable resize"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Layout>
    );
}

export default Contact;