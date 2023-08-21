import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, DatePicker, Tabs, Select, Table } from 'antd';
import { UploadOutlined, SearchOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
const { Header, Content, Footer, Sider, Upload } = Layout;
const { Search } = Input;


// ☆☆☆☆☆☆☆☆☆ 표-Branch History ☆☆☆☆☆☆☆☆☆
const datasource = [
  {
    key: "1",
    ID: "test1",
    name: "홍*동",
    phoneNumber: "010-1234-123*",
  },
  {
    key: "1",
    ID: "test1",
    name: "홍*동",
    phoneNumber: "010-1234-123*",
  },
  {
    key: "1",
    ID: "test1",
    name: "홍*동",
    phoneNumber: "010-1234-123*",
  },
  {
    key: "1",
    ID: "test1",
    name: "홍*동",
    phoneNumber: "010-1234-123*",
  },
];
  
  // 열
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "성명",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "휴대 번호",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];



// ☆☆☆☆☆☆☆☆☆ 표-Branch History ☆☆☆☆☆☆☆☆☆
const datasource2 = [
  {
    key: "1",
    date: "2023.01.25",
    brand: "CODEALIVE",
    branch: "노원중계",
    state: "Active"
  },
  {
    key: "2",
    date: "2023.01.25",
    brand: "CODEALIVE",
    branch: "서초",
    state: "Active"
  },
  {
    key: "3",
    date: "2023.01.25",
    brand: "CODEALIVE",
    branch: "대치",
    state: "Active"
  },
  {
    key: "4",
    date: "2023.01.25",
    brand: "CODEALIVE",
    branch: "목동",
    state: "Active"
  },
];
  
  // 열
  const columns2 = [
    {
      title: "날짜",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "브랜드",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "브랜치",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "상태",
      dataIndex: "state",
      key: "state",
    },
  ];


  // ☆☆☆☆☆☆☆☆☆ 표- 편성정보 TAB ☆☆☆☆☆☆☆☆☆
const datasource3 = [
  {
    key: "1",
    no: "1",
    year: "2022",
    category: "플레이 AI",
    course: "플레이 AI VOL.2",
    duration: "2022.08.15 ~ 2022.09.15",
    state: "환불"
  },
  {
    key: "2",
    no: "2",
    year: "2022",
    category: "플레이 AI",
    course: "플레이 AI VOL.2",
    duration: "2022.08.15 ~ 2022.09.15",
    state: "완료"
  },
];
  
  // 열
  const columns3 = [
    {
      title: "NO",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "수강 년도",
      dataIndex: "year",
      key: "year",
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
      title: "수강기간",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "결제상태",
      dataIndex: "state",
      key: "환불",
    },
  ];


const User = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 모달 관련
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

  // 라디오 버튼 관련
  const [used, setUsed] = useState(false);
  const onUsedChange = (e) => {
    console.log("radio checked", e.target.value);
    setUsed(e.target.value);
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

  // 검색창
  const onSearch = (value) => console.log(value);

  return (
    <Layout className="site-layout">
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Search
          placeholder="성명, ID, 휴대 번호"
          allowClear
          onSearch={onSearch}
          style={{ width: "600px", marginRight: "50px" }}
        ></Search>
        <Button onClick={showModal} style={{ marginRight: "50px" }}>
          등록하기
        </Button>
        <Modal
          title="관리자 계정 생성"
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
        >
          <div
            className="Wrap"
            style={{
              display: "flex",
              height: "200px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="ID" style={{ display: "flex" }}>
              <span>ID</span>
              <Input style={{ width: "300px", marginLeft: "20px" }}></Input>
            </div>
            <div className="PW" style={{ display: "flex", marginTop: "50px" }}>
              <span>PW</span>
              <Input style={{ width: "300px", marginLeft: "18px" }}></Input>
            </div>
          </div>
        </Modal>
      </Header>
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
          }}
        >
          <div
            className="bannerSearch"
            style={{
              width: "40%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              // border: "1px solid",
              padding: "0px 15px 0px 15px",
            }}
          >
            <div
              className="title&saveBtn"
              style={{
                display: "flex",
                alignItems: "center",
                height: "32px",
                justifyContent: "space-between",
              }}
            >
              <div className="title" style={{ fontSize: "16px" }}>
                회원 리스트
              </div>
            </div>
            <div className="userList">
              <Table
                dataSource={datasource}
                columns={columns}
                style={{ width: "600px", marginTop: "10px" }}
              />
            </div>
          </div>
          <div
            className="bannerDetail"
            style={{
              width: "60%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: "기본 정보 TAB",
                  key: "1",
                  // ☆☆☆☆☆☆☆ 여기 이하는 기본 정보 TAB 표시되어야 함 ☆☆☆☆☆☆☆
                  children: (
                    <div
                      style={{
                        width: "100%",
                        height: "800px",
                      }}
                    >
                      <span className="loginLog">최근 로그인: 2023.01.01</span>
                      {/* 회원 정보 확인 구역 */}
                      <div
                        className="contentsBox"
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginTop: "30px",
                        }}
                      >
                        <div>
                          <div
                            className="name&userType"
                            style={{ display: "flex" }}
                          >
                            <div style={{ display: "flex" }}>
                              <div> 이름 </div>
                              <Input
                                disabled
                                style={{ marginLeft: "45px", width: "200px" }}
                              ></Input>
                            </div>
                            <div
                              style={{ marginLeft: "100px", display: "flex" }}
                            >
                              <div> 회원 유형 </div>
                              <Input
                                disabled
                                style={{ marginLeft: "45px", width: "200px" }}
                              ></Input>
                            </div>
                          </div>
                          <div
                            className="email"
                            style={{ marginTop: "20px", display: "flex" }}
                          >
                            <div> 이메일 </div>
                            <Input
                              disabled
                              style={{ marginLeft: "30px", width: "400px" }}
                            ></Input>
                          </div>
                          <div
                            className="ID"
                            style={{ marginTop: "20px", display: "flex" }}
                          >
                            <div> 로그인 ID </div>
                            <Input
                              disabled
                              style={{ marginLeft: "13px", width: "400px" }}
                            ></Input>
                          </div>
                          <div
                            className="PhoneNumber"
                            style={{ marginTop: "20px", display: "flex" }}
                          >
                            <div> 휴대번호 </div>
                            <Input
                              disabled
                              style={{ marginLeft: "15px", width: "400px" }}
                            ></Input>
                          </div>
                          <div
                            className="regiType&parentChildType"
                            style={{ marginTop: "20px", display: "flex" }}
                          >
                            <div style={{ display: "flex" }}>
                              <div> 가입 유형 </div>
                              <Input
                                disabled
                                style={{ marginLeft: "12px", width: "200px" }}
                              ></Input>
                            </div>
                            <div
                              style={{ display: "flex", marginLeft: "100px" }}
                            >
                              <div> 학부모/자녀 </div>
                              <Select
                                defaultValue="lucy"
                                style={{
                                  width: 200,
                                  marginLeft: "30px",
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
                          </div>
                          <div
                            className="regiType&parentChildType"
                            style={{ marginTop: "20px", display: "flex" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div> Branch History </div>
                              <Table
                                dataSource={datasource2}
                                columns={columns2}
                                style={{ width: "800px", marginTop: "10px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "편성 정보 TAB",
                  key: "2",
                  // ☆☆☆☆☆☆☆ 여기 이하는 편성 정보 TAB 표시되어야 함 ☆☆☆☆☆☆☆
                  children: (
                    <div
                      style={{
                        width: "100%",
                        height: "800px",
                      }}
                    >
                      <Table
                        dataSource={datasource3}
                        columns={columns3}
                        style={{ width: "800px", marginTop: "10px" }}
                      />
                    </div>
                  ),
                },
              ]}
            ></Tabs>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default User;