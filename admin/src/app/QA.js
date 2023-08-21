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


const { Header, Content, Footer, Sider, Upload } = Layout;
const { RangePicker } = DatePicker;

const QA = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

// ☆☆☆☆☆☆☆☆☆ 표-유닛 평균 진도율 ☆☆☆☆☆☆☆☆☆
const datasource = [
    {
      key: "1",
      no: "1",
      name: "홍길동",
      course: "플레이 파이썬 Vol1",
      title: "구글 폰트에서 select this style 이 안보여요",
      qTime: "2023-01-25T10:05",
      duration: "2023-01-01 ~ 2023-03-02",
      finished: "X",
      aTime: "2023-01-25T12:15",
      rDone: "Y",
      show: "Y",
    },
    {
      key: "2",
      no: "2",
      name: "홍길동",
      course: "플레이 파이썬 Vol1",
      title: "구글 폰트에서 select this style 이 안보여요",
      qTime: "2023-01-25T10:05",
      duration: "2023-01-01 ~ 2023-03-02",
      finished: "X",
      aTime: "2023-01-25T12:15",
      rDone: "Y",
      show: "Y",
    },
    {
      key: "3",
      no: "3",
      name: "홍길동",
      course: "플레이 파이썬 Vol1",
      title: "구글 폰트에서 select this style 이 안보여요",
      qTime: "2023-01-25T10:05",
      duration: "2023-01-01 ~ 2023-03-02",
      finished: "X",
      aTime: "2023-01-25T12:15",
      rDone: "Y",
      show: "Y",
    },
  ];
    
    // 열
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
        title: "질문 제목",
        dataIndex: "title",
        key: "title",
        // render: (text) => {
        //   return {
        //     onClick: {showModal},
        //     props: {
        //       style: {
        //         color: "blue",
        //         cursor: "pointer",
        //         textDecoration: "underline",
        //       },
        //     },
        //     children: <div>{text}</div>,
        //   };
        // },
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
        title: "질문 시간",
        dataIndex: "qTime",
        key: "qTime",
      },
      {
        title: "코스 시작일/종료일",
        dataIndex: "duration",
        key: "duration",
      },
      {
        title: "수료",
        dataIndex: "finished",
        key: "finished",
      },
      {
        title: "최초 답변 시간",
        dataIndex: "aTime",
        key: "aTime",
      },
      {
        title: "답변 완료",
        dataIndex: "rDone",
        key: "rDone",
      },
      {
        title: "노출",
        dataIndex: "show",
        key: "show",
      },
    ];


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
          학습 통계
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
                    height: "180px",
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
                    className="searcLine"
                    style={{
                      width: "90%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
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
                          width: "300px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "50px",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          코스
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

                      {/* 전체, 수료 완료, 미수료 */}
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          수료여부
                        </span>
                        <Radio.Group
                          onChange={onUsedChange}
                          value={used}
                          style={{ marginTop: "10px" }}
                        >
                          <Radio value={true}>전체</Radio>
                          <Radio value={false}>수료 완료</Radio>
                          <Radio value={false}>미수료</Radio>
                        </Radio.Group>
                      </div>

                      {/* 답변 */}
                      <div
                        style={{
                          marginLeft: "20px",
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
                          수료여부
                        </span>
                        <Radio.Group
                          onChange={onUsedChange}
                          value={used}
                          style={{ marginTop: "10px" }}
                        >
                          <Radio value={true}>전체</Radio>
                          <Radio value={false}>답변 완료</Radio>
                          <Radio value={false}>답변 미완료</Radio>
                        </Radio.Group>
                      </div>

                      <Button style={{ width: "160px", height: "80px" }}>
                        검색
                      </Button>
                    </div>

                    {/* 검색창 */}
                    <Search
                      placeholder="성명, 코스명"
                      allowClear
                      onSearch={onSearch}
                      style={{ width: "980px", marginLeft: "50px", marginTop: "10px" }}
                    ></Search>
                  </div>
                </div>

                {/* 코스 학습현황 라인 - 파이차트&막대그래프 */}
                <div
                  className="piesLine"
                  style={{
                    marginTop: "50px",
                    width: "100%",
                    height: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <div
                    className="Bottom"
                    style={{
                      width: "100%",
                      height: "400px",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "800",
                        }}
                      >
                        학습 Q&A 목록
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                      }}
                    >
                      {/* 수강생 평균 유닛 진도율 - 표 */}
                      <Table
                        dataSource={datasource}
                        columns={columns}
                        style={{ width: "1500px", marginTop: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            title="학습 Q&A 답변 확인"
            width={600}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            // 모달 취소&저장 버튼
            footer={[
              <Button key="cancel" onClick={handleCancel}>
                취소
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                저장
              </Button>,
            ]}
          ></Modal>
        </Content>
      </Layout>
    );
}

export default QA;