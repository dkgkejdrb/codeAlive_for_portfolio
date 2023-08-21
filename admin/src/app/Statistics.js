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

// ☆☆☆☆☆☆☆☆☆ 원형차트-평균진도율 ☆☆☆☆☆☆☆☆☆
const avgProgressSeries1 = [94]
const plotOptions1 = {
    radialBar: {
        hollow: {
            size: "94%",
        }
    }, labels: ['평균 진도율']
}

// ☆☆☆☆☆☆☆☆☆ 원형차트-평균수료율 ☆☆☆☆☆☆☆☆☆
const avgProgressSeries2 = [60]
const plotOptions2 = {
    radialBar: {
        hollow: {
            size: "60%",
        }
    }, labels: ['평균 수료율']
}

// ☆☆☆☆☆☆☆☆☆ 원형차트-평균스타포인트 ☆☆☆☆☆☆☆☆☆
const avgProgressSeries3 = [80]
const plotOptions3 = {
    radialBar: {
        hollow: {
            size: "80%",
        }
    }, labels: ['평균 응시 시간']
}

// ☆☆☆☆☆☆☆☆☆ 푼 평균 문제수-평균스타포인트 ☆☆☆☆☆☆☆☆☆
const avgProgressSeries4 = [90]
const plotOptions4 = {
    radialBar: {
        hollow: {
            size: "90%",
        }
    }, labels: ['푼 평균 문제수']
}

// ☆☆☆☆☆☆☆☆☆ 맞춘 문제수-평균스타포인트 ☆☆☆☆☆☆☆☆☆
const avgProgressSeries5 = [60]
const plotOptions5 = {
    radialBar: {
        hollow: {
            size: "60%",
        }
    }, labels: ['맞춘 문제수']
}

// ☆☆☆☆☆☆☆☆☆ 막대차트-평균진도율 ☆☆☆☆☆☆☆☆☆
const barSeries = [{
    data: [75, 90, 85, 80]
}]

const barOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "유닛 명 1",
      "유닛 명 2",
      "유닛 명 3",
      "유닛 명 4",
    ],
  },
};

// ☆☆☆☆☆☆☆☆☆ 표-유닛 평균 진도율 ☆☆☆☆☆☆☆☆☆
const datasource = [
    {
        key: "1",
        no: "1",
        name: "홍길동",
        course1: "70%",
        course2: "73%",
        course3: "86%",
        course4: "95%",
        test: "7/10",
    },
    {
        key: "2",
        no: "1",
        name: "홍길동",
        course1: "70%",
        course2: "73%",
        course3: "86%",
        course4: "95%",
        test: "7/10"
    },
    {
        key: "3",
        no: "1",
        name: "홍길동",
        course1: "70%",
        course2: "73%",
        course3: "86%",
        course4: "95%",
        test: "7/10"
    },
    {
        key: "4",
        no: "1",
        name: "홍길동",
        course1: "70%",
        course2: "73%",
        course3: "86%",
        course4: "95%",
        test: "7/10"
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
      title: "수강생",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "유닛명 1",
      dataIndex: "course1",
      key: "course1",
    },
    {
      title: "유닛명 2",
      dataIndex: "course2",
      key: "course2",
    },
    {
      title: "유닛명 3",
      dataIndex: "course3",
      key: "course3",
    },
    {
      title: "유닛명 4",
      dataIndex: "course4",
      key: "course4",
    },
    {
      title: "TEST",
      dataIndex: "test",
      key: "test",
    },
  ];


  // ☆☆☆☆☆☆☆☆☆ 표-수강생 테스트 결과 ☆☆☆☆☆☆☆☆☆
const datasource2 = [
  {
      key: "1",
      no: "1",
      name: "홍길동",
      q1: "정답",
      q2: "정답",
      q3: "오답",
      q4: "정답",
      q5: "오답",
      q6: "정답",
      q7: "오답",
      q8: "오답",
      q9: "정답",
      q10: "정답",
      score: "90",
      star: "3",
  },
  {
    key: "2",
    no: "2",
    name: "홍길동",
    q1: "오답",
    q2: "정답",
    q3: "정답",
    q4: "오답",
    q5: "오답",
    q6: "정답",
    q7: "오답",
    q8: "정답",
    q9: "정답",
    q10: "정답",
    score: "70",
    star: "2",
},
{
  key: "3",
  no: "1",
  name: "홍길동",
  q1: "정답",
  q2: "정답",
  q3: "오답",
  q4: "정답",
  q5: "오답",
  q6: "정답",
  q7: "오답",
  q8: "오답",
  q9: "정답",
  q10: "정답",
  star: "1",
},
{
key: "4",
no: "2",
name: "홍길동",
q1: "오답",
q2: "정답",
q3: "정답",
q4: "오답",
q5: "오답",
q6: "정답",
q7: "오답",
q8: "정답",
q9: "정답",
q10: "정답",
score: "70",
star: "3",
},
]

// 열
const columns2 = [
  {
    title: "NO",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "1번 문항",
    dataIndex: "q1",
    key: "q1",
    // render(text, record) {
    //   return {
    //     props: {
    //       style: { background: text === "오답"? "red" : "blue"}
    //     },
    //     children: <div>{text}</div>
    //   }
    // },
    onCell: 
    (record) => 
    ({
      style: { background: record.q1 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "2번 문항",
    dataIndex: "q2",
    key: "q2",
    onCell: 
    (record) => 
    ({
      style: { background: record.q2 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "3번 문항",
    dataIndex: "q3",
    key: "q3",
    onCell: 
    (record) => 
    ({
      style: { background: record.q3 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "4번 문항",
    dataIndex: "q4",
    key: "q4",
    onCell: 
    (record) => 
    ({
      style: { background: record.q4 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "5번 문항",
    dataIndex: "q5",
    key: "q5",
    onCell: 
    (record) => 
    ({
      style: { background: record.q5 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "6번 문항",
    dataIndex: "q6",
    key: "q6",
    onCell: 
    (record) => 
    ({
      style: { background: record.q6 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "7번 문항",
    dataIndex: "q7",
    key: "q7",
    onCell: 
    (record) => 
    ({
      style: { background: record.q7 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "8번 문항",
    dataIndex: "q8",
    key: "q8",
    onCell: 
    (record) => 
    ({
      style: { background: record.q8 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "9번 문항",
    dataIndex: "q9",
    key: "q9",
    onCell: 
    (record) => 
    ({
      style: { background: record.q9 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "10번 문항",
    dataIndex: "q10",
    key: "q10",
    onCell: 
    (record) => 
    ({
      style: { background: record.q10 === "오답"? "red" : "blue" },
    })
  },
  {
    title: "점수",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "별",
    dataIndex: "star",
    key: "star",
    width: 50,
    render(text, record) {
      return {
        props: {
          style: { backgroundImage: text === "3"? `url(${starRed})` : `url(${starYellow})`, backgroundRepeat: "no-repeat", backgroundSize: "50%", backgroundPosition: "center" }
        },
        children: <div></div>
      }
    }
    // onCell: 
    // (record) => 
    // ({
    //   style: { backgroundImage: record.star === "3"? `url(${starRed})` : `url(${starYellow})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" },
    // })
  }
];


const Statics = () => {
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
              <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                  {
                    label: "학습 진도",
                    key: "1",
                    // ☆☆☆☆☆☆☆ 여기 이하는 학습 진도가 표시되어야 함 ☆☆☆☆☆☆☆
                    children: (
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
                            height: "150px",
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
                              <div
                                className="categorySelectBox"
                                style={{
                                  width: "300px",
                                  height: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  marginLeft: "50px",
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
                              <Button
                                style={{ width: "160px", height: "80px" }}
                              >
                                검색
                              </Button>
                            </div>
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
                          {/* 바 그래프차트 */}
                          <div
                            className="middle"
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
                                00코스 학습현황
                              </span>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                              }}
                            >
                              {/* 평균 진도율 */}
                              <div
                                className="avgProgress"
                                style={{
                                  width: "33%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <ReactApexChart
                                  options={plotOptions1}
                                  series={avgProgressSeries1}
                                  type="radialBar"
                                  height={350}
                                />
                              </div>
                              {/* 평균 수료율 */}
                              <div
                                className="avgSuccessRate"
                                style={{
                                  width: "33%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <ReactApexChart
                                  options={plotOptions2}
                                  series={avgProgressSeries2}
                                  type="radialBar"
                                  height={350}
                                />
                              </div>
                              {/* 평균 스타포인트 */}
                              <div
                                className="avgStar"
                                style={{
                                  width: "33%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <ReactApexChart
                                  options={plotOptions3}
                                  series={avgProgressSeries3}
                                  type="radialBar"
                                  height={350}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="Middle"
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
                                유닛 평균 진도율
                              </span>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                              }}
                            >
                              {/* 유닛 평균 진도율 - 바차트 */}
                              <ReactApexChart options={barOptions} series={barSeries} type="bar" width={1500} height={350} />
                            </div>
                          </div>
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
                                수강생 평균 유닛 진도율/TEST
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
                              <Table dataSource={datasource} columns={columns} style={{ width: "1500px", marginTop: "10px" }}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  // 테스트 탭
                  {
                    label: "TEST",
                    key: "2",
                    children: (
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
                            height: "150px",
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
                              <div
                                className="categorySelectBox"
                                style={{
                                  width: "300px",
                                  height: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  marginLeft: "50px",
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
                              <Button
                                style={{ width: "160px", height: "80px" }}
                              >
                                검색
                              </Button>
                            </div>
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
                          {/* 파이 - 그래프차트 */}
                          <div
                            className="middle"
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
                                00코스 학습현황
                              </span>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                              }}
                            >
                              {/* 푼 평균 문제수 파이 차트 */}
                              <div
                                className="avgProgress"
                                style={{
                                  width: "50%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <ReactApexChart
                                  options={plotOptions4}
                                  series={avgProgressSeries4}
                                  type="radialBar"
                                  height={350}
                                />
                              </div>
                              {/* 맞춘 문제수 파이 차트 */}
                              <div
                                className="avgSuccessRate"
                                style={{
                                  width: "50%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <ReactApexChart
                                  options={plotOptions5}
                                  series={avgProgressSeries5}
                                  type="radialBar"
                                  height={350}
                                />
                              </div>
                            </div>
                          </div>
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
                                수강생 평균 유닛 진도율/TEST
                              </span>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                              }}
                            >
                              {/* 수강생 테스트 결과 - 표 */}
                              <Table dataSource={datasource2} columns={columns2} style={{ width: "1500px", marginTop: "10px" }}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </Content>
      </Layout>
    );
}

export default Statics;