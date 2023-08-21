import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, DatePicker, Table } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
const { Header, Content, Footer, Sider, Upload } = Layout;

// ☆☆☆☆☆☆☆☆☆ 테이블1-요약 ☆☆☆☆☆☆☆☆☆
// 요약에 들어가는 테이블 행(데이터)
const datasource1 = [
  {
    key: '2',
    students: "1100명",
    orders: "150건",
    category: "2개",
    course: "8개",
    qna: "5건",
  },
]

// 요약에 들어가는 테이블 열
const columns1 = [
  {
    title: "현재 수강생",
    dataIndex: "students",
    key: "students",
  },
  {
    title: "주문 건수",
    dataIndex: "orders",
    key: "orders",
  },
  {
    title: "등록 카테고리",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "진행중인 코스",
    dataIndex: "course",
    key: "course",
  },
  {
    title: "학습Q&A",
    dataIndex: "qna",
    key: "qna",
  },
]


// ☆☆☆☆☆☆☆☆☆ 라인차트 ☆☆☆☆☆☆☆☆☆
const series1 = [
  {
    name: "회원수",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }
]

const options1 = {
  chart: {
    height: 300,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
}


// ☆☆☆☆☆☆☆☆☆ 테이블2-요약 ☆☆☆☆☆☆☆☆☆
// 요약에 들어가는 테이블 행(데이터)
const datasource2 = [
  {
    key: '1',
    no: '1',
    orderDate: '2022.01.02',
    course: '플레이 AI',
    price: '59,000',
    purchase: '59,000',
    methods: '카드',
    state: '완료',
  },
  {
    key: '2',
    no: '2',
    orderDate: '2022.01.02',
    course: '플레이 AI',
    price: '59,000',
    purchase: '59,000',
    methods: '카드',
    state: '완료',
  },
  {
    key: '3',
    no: '3',
    orderDate: '2022.01.02',
    course: '플레이 AI',
    price: '59,000',
    purchase: '59,000',
    methods: '카드',
    state: '완료',
  },
  {
    key: '4',
    no: '4',
    orderDate: '2022.01.02',
    course: '플레이 AI',
    price: '59,000',
    purchase: '59,000',
    methods: '카드',
    state: '완료',
  },
]

// 요약에 들어가는 테이블 열
const columns2 = [
  {
    title: "NO",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "주문일",
    dataIndex: "orderDate",
    key: "orderDate",
  },
  {
    title: "코스",
    dataIndex: "course",
    key: "course",
  },
  {
    title: "판매가",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "결제 금액",
    dataIndex: "purchase",
    key: "purchase",
  },
  {
    title: "결제 방식",
    dataIndex: "methods",
    key: "methods",
  },
  {
    title: "결제 상태",
    dataIndex: "state",
    key: "state",
  },
]




const Dashboard = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 라디오 버튼 관련
    const [used, setUsed] = useState(false);
    const onUsedChange = (e) => {
      console.log('radio checked', e.target.value);
      setUsed(e.target.value);
    };

    return (
      <Layout className="site-layout">
        {/* 사용 중인 배너&배너 목록 */}
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
              flexDirection: "column",
            }}
          >
            <div
              className="summary"
              style={{ width: "100%", height: "150px", borderBottom: "1px solid" }}
            >
              <div className="title&radioBtn" style={{ display: "flex" }}>
                <span style={{ fontSize: "16px" }}>요약</span>
                <div>
                  <Radio.Group
                    onChange={onUsedChange}
                    value={used}
                    style={{ marginLeft: "50px" }}
                  >
                    <Radio value={true}>7일</Radio>
                    <Radio value={false}>30일</Radio>
                    <Radio value={false}>90일</Radio>
                  </Radio.Group>
                </div>
              </div>
              <div>
                <Table
                  dataSource={datasource1}
                  columns={columns1}
                  pagination={false}
                ></Table>
              </div>
            </div>
            <div
              className="graph"
              style={{
                marginTop: "60px",
                width: "100%",
                height: "400px",
                borderBottom: "1px solid"
              }}
            >
              <div className="title&radioBtn" style={{ display: "flex" }}>
                <span style={{ fontSize: "16px" }}>최근 회원 가입</span>
                <div>
                  <Radio.Group
                    onChange={onUsedChange}
                    value={used}
                    style={{ marginLeft: "50px" }}
                  >
                    <Radio value={true}>7일</Radio>
                    <Radio value={false}>30일</Radio>
                    <Radio value={false}>90일</Radio>
                  </Radio.Group>
                </div>
              </div>
              <ReactApexChart
                options={options1}
                series={series1}
                type="line"
                height={300}
              ></ReactApexChart>
            </div>
            <div
              className="table"
              style={{
                marginTop: "60px",
                width: "100%",
                height: "300px",
              }}
            >
              <Table
                dataSource={datasource2}
                columns={columns2}
              ></Table>
            </div>
          </div>
        </Content>
      </Layout>
    );
}

export default Dashboard;