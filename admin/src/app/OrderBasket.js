import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, Space, Dropdown, message, DatePicker, Select, Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const { Search } = Input;


const { Header, Content, Footer, Sider, Upload } = Layout;

// 표1 - 장바구니 목록 (전체)
const datasource = [
  {
    key: "1",
    no: "1",
    user: "홍*동",
    phoneNumber: "010-1111-****",
    userType: "무료회원",
    count: "2",
    price: "118,000"
  },
  {
    key: "2",
    no: "2",
    user: "홍*동",
    phoneNumber: "010-1111-****",
    userType: "무료회원",
    count: "2",
    price: "118,000"
  },
  {
    key: "3",
    no: "3",
    user: "홍*동",
    phoneNumber: "010-1111-****",
    userType: "무료회원",
    count: "2",
    price: "118,000"
  },
  {
    key: "4",
    no: "4",
    user: "홍*동",
    phoneNumber: "010-1111-****",
    userType: "무료회원",
    count: "2",
    price: "118,000"
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
      title: "예비 구매자",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "예비 구매자 휴대 번호",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "회원 유형",
      dataIndex: "userType",
      key: "userType",
    },
    {
      title: "장바구니",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "장바구니 금액",
      dataIndex: "price",
      key: "price",
    },
  ];

// 표2 - 장바구니 목록 (부분)
const datasource2 = [
  {
    key: "1",
    no: "1",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    dueDate: "2023.03.25",
  },
  {
    key: "2",
    no: "2",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    dueDate: "2023.03.25",
  },
  {
    key: "3",
    no: "3",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    dueDate: "2023.03.25",
  },
  {
    key: "4",
    no: "4",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    dueDate: "2023.03.25",
  },
  {
    key: "5",
    no: "5",
    category: "플레이 AI",
    course: "플레이 AI Pack",
    date: "2023.01.25",
    dueDate: "2023.03.25",
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
      title: "상품 담은 날짜",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "보관 만료일",
      dataIndex: "dueDate",
      key: "dueDate",
    },
  ];


  




const OrderBasket = () => {
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
          장바구니
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
                  className="courseLine"
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
                      회원유형
                    </span>
                    <Radio.Group
                      onChange={onUsedChange}
                      value={used}
                      style={{ marginTop: "10px" }}
                    >
                      <Radio value={true}>전체</Radio>
                      <Radio value={false}>무료회원</Radio>
                      <Radio value={false}>유료회원</Radio>
                      <Radio value={false}>비수강회원</Radio>
                    </Radio.Group>
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
                    placeholder="예비 구매자 명, 휴대번호"
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
                <div
                  className="title"
                  style={{ width: "100%", height: "40px", marginTop: "20px" }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    장바구니 목록
                  </span>
                </div>
                <div className="tableWrap" onClick={showModal}>
                  {/* 장바구니 목록 - 표 */}
                  <Table
                    dataSource={datasource}
                    columns={columns}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Modal
          title={`{사용자 명}님 장바구니`}
          width={1200}
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
        >
          <div
            className="Wrap"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* 모달 > 예비 구매자&휴대 번호 */}
            <div
              className="userName&phoneNumber"
              style={{
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <span style={{ width: "115.19px" }}>예비 구매자</span>
              <Input
                prefix={`{예비 구매자명 표시}`}
                disabled
                style={{ width: "250px" }}
              ></Input>
              <span style={{ width: "115.19px", marginLeft: "212px" }}>
                휴대 번호
              </span>
              <Input
                prefix={`{예비 구매자 휴대번호 번호 표시}`}
                disabled
                style={{ width: "250px" }}
              ></Input>
            </div>
            {/* 모달 > 회원 유형&최근 수강내역 */}
            <div
              className="userName&phoneNumber"
              style={{
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <span style={{ width: "115.19px" }}>예비 구매자</span>
              <Input
                prefix={`{회원 유형 표시}`}
                disabled
                style={{ width: "250px" }}
              ></Input>
              <span style={{ width: "115.19px", marginLeft: "212px" }}>
                최근 수강내역
              </span>
              <Input
                prefix={`{최근 수강내역 표시}`}
                disabled
                style={{ width: "400px" }}
              ></Input>
            </div>
            {/* 모달 > 가입 유형&학부모/자녀 */}
            <div
              className="userName&phoneNumber"
              style={{
                display: "flex",
                marginTop: "40px",
                alignItems: "center",
              }}
            >
              <span style={{ width: "115.19px" }}>가입 유형</span>
              <Input
                prefix={`{가입 유형 표시}`}
                disabled
                style={{ width: "250px" }}
              ></Input>
              <span style={{ width: "115.19px", marginLeft: "212px" }}>
                학부모/자녀
              </span>
              <Input
                prefix={`{자녀명, 학부모명 표시}}`}
                disabled
                style={{ width: "250px" }}
              ></Input>
            </div>
            <div
              className="OrderBasketList"
              style={{
                marginTop: "40px",
                borderTop: "1px solid",
                paddingTop: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                장바구니 목록
              </span>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Table
                  dataSource={datasource2}
                  columns={columns2}
                  style={{ marginTop: "20px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </Modal>
      </Layout>
    );
}

export default OrderBasket;