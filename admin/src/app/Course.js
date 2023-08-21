import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, Space, Dropdown, message, DatePicker, Select, Table, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const { Search } = Input;


const { Header, Content, Footer, Sider, Upload } = Layout;

// 체크박스 관련
const onChange = () => {

}



// ☆☆☆☆☆☆☆☆☆ 표-상품 목록 ☆☆☆☆☆☆☆☆☆
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  // getCheckboxProps: (record) => ({
  //   disabled: record.name === 'Disabled User',
  //   name: record.name,
  // }),
};

const datasource = [
  {
    key: "1",
    no: "1",
    category: "플레이 파이썬",
    course: "플레이 파이썬 Vol1",
    price: "59,000",
    countingSelling: "280",
    countingQ: "335",
    user: "홍길동",
    date: "2022.01.25",
    Ruser: "고길동",
    Rdate: "수정일",
    use: "사용"
  },
  {
    key: "2",
    no: "2",
    category: "플레이 파이썬",
    course: "플레이 파이썬 Vol1",
    price: "59,000",
    countingSelling: "280",
    countingQ: "335",
    user: "홍길동",
    date: "2022.01.25",
    Ruser: "고길동",
    Rdate: "수정일",
    use: "사용"
  },
  {
    key: "3",
    no: "3",
    category: "플레이 파이썬",
    course: "플레이 파이썬 Vol1",
    price: "59,000",
    countingSelling: "280",
    countingQ: "335",
    user: "홍길동",
    date: "2022.01.25",
    Ruser: "고길동",
    Rdate: "수정일",
    use: "사용"
  },
  {
    key: "4",
    no: "4",
    category: "플레이 파이썬",
    course: "플레이 파이썬 Vol1",
    price: "59,000",
    countingSelling: "280",
    countingQ: "335",
    user: "홍길동",
    date: "2022.01.25",
    Ruser: "고길동",
    Rdate: "수정일",
    use: "사용"
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
      title: "정가",
      dataIndex: "price",
      key: "59,000",
    },
    {
      title: "판매개수",
      dataIndex: "countingSelling",
      key: "countingSelling",
    },
    {
      title: "질문개수",
      dataIndex: "countingQ",
      key: "countingQ",
    },
    {
      title: "등록자",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "등록일",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "수정자",
      dataIndex: "Ruser",
      key: "Ruser",
    },
    {
      title: "수정일",
      dataIndex: "Rdate",
      key: "Rdate",
    },
    {
      title: "사용유무",
      dataIndex: "use",
      key: "use",
    },
  ];


const Course = () => {

  // 체크박스 상태 관련
  const [selectionType, setSelectionType] = useState('checkbox');

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
          상품 관리
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
                    className="courseSelectBox"
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
                      상태
                    </span>
                    <Radio.Group
                      onChange={onUsedChange}
                      value={used}
                      style={{ marginTop: "10px" }}
                    >
                      <Radio value={true}>전체</Radio>
                      <Radio value={false}>사용</Radio>
                      <Radio value={false}>미사용</Radio>
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
                    placeholder="성명, ID, 휴대 번호"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: "980px", marginRight: "50px" }}
                  ></Search>
                </div>
              </div>
              <div
                className="list"
                style={{
                  marginTop: "20px",
                  width: "100%",
                  height: "600px",
                  padding: "10px 0px 0px 10px",
                }}
              >
                <div
                  className="title&Buttons"
                  style={{ width: "100%", height: "80px" }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    상품 목록
                  </span>
                  <Button style={{ marginLeft: "200px" }} onClick={showModal}>
                    등록
                  </Button>
                  <Modal
                    title="상품 등록/수정"
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
                      {/* 모달 > 코스명 */}
                      <div
                        className="Coursetitle"
                        style={{ display: "flex", marginTop: "40px" }}
                      >
                        <span style={{ width: "10%" }}>코스 명</span>
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
                      {/* 모달 > 코스 카테고리&코스 난이도 */}
                      <div
                        className="CourseCategory"
                        style={{ display: "flex", marginTop: "40px" }}
                      >
                        <span style={{ width: "10%" }}>코스 카테고리</span>
                        <div style={{ width: "40%" }}>
                          {/* 실제 API 받아서 받아 적용해야 함 */}
                          <Select
                            defaultValue="lucy"
                            style={{
                              width: 250,
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

                        <span style={{ width: "10%" }}>코스 난이도</span>
                        <div style={{ width: "40%" }}>
                          {/* 실제 API 받아서 받아 적용해야 함 */}
                          <Select
                            defaultValue="lucy"
                            style={{
                              width: 250,
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
                      {/* 모달 > 상세 페이지 썸네일&마이 페이지 썸네일&수료증 배경 이미지 */}
                      <div
                        className="backgroundImage&Color"
                        style={{ marginTop: "40px" }}
                      >
                        <div style={{ display: "flex" }}>
                          <span style={{ width: "200px" }}>
                            상세 페이지 썸네일<br></br>
                            <span style={{ fontSize: "12px" }}>
                              *가이드 사이즈: 400*300
                            </span>
                          </span>
                          {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>등록</Button>
                    </Upload> */}
                          <div style={{ width: "350px" }}>
                            <Button>등록</Button>
                          </div>
                          <span style={{ width: "200px" }}>
                            마이 페이지 썸네일<br></br>
                            <span style={{ fontSize: "12px" }}>
                              *가이드 사이즈: 400*300
                            </span>
                          </span>
                          {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>등록</Button>
                    </Upload> */}
                          <div style={{ width: "350px" }}>
                            <Button>등록</Button>
                          </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "10px" }}>
                          <span style={{ width: "200px" }}>
                            수료증 배경 이미지
                          </span>
                          {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>등록</Button>
                    </Upload> */}
                          <div style={{ width: "350px" }}>
                            <Button>등록</Button>
                          </div>
                        </div>
                      </div>
                      {/* 모달 > 강의 자료 */}
                      <div
                        className="URL"
                        style={{ display: "flex", marginTop: "40px" }}
                      >
                        <div style={{ display: "flex" }}>
                          <span style={{ width: "200px" }}>
                            강의 자료<br></br>
                            <span
                              style={{ fontSize: "12px" }}
                            >{`{여기에 업로드 자료 파일명 공개}`}</span>
                          </span>
                          {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>등록</Button>
                    </Upload> */}
                          <div style={{ width: "350px" }}>
                            <Button>등록</Button>
                          </div>
                        </div>
                      </div>
                      {/* 모달 > 수강 기간 */}
                      <div
                        className="title"
                        style={{
                          display: "flex",
                          marginTop: "40px",
                          height: "64px",
                        }}
                      >
                        <div
                          className="Wrap"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column",
                          }}
                        >
                          <div className="top" style={{ display: "flex" }}>
                            <span style={{ width: "115.19px" }}>수강 기간</span>
                            <Input style={{ width: "250px" }}></Input>
                            <span style={{ marginLeft: "15px" }}>일</span>
                            <div
                              style={{
                                width: "40%",
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <span>복습</span>
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
                          <div
                            className="bottom"
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              paddingRight: "168px",
                            }}
                          >
                            <span style={{ width: "78px" }}>복습 일</span>
                            <Input style={{ width: "250px" }}></Input>
                            <span style={{ marginLeft: "15px" }}>일</span>
                          </div>
                        </div>
                      </div>
                      {/* 모달 > 수강료 */}
                      <div className="Price" style={{ marginTop: "40px" }}>
                        <div style={{ display: "flex" }}>
                          <span style={{ width: "10%" }}>수강료</span>
                          <Input style={{ width: "250px" }}></Input>
                        </div>
                      </div>
                      {/* 모달 > 기간할인율&할인기간 */}
                      <div
                        className="enrolledDiscountRate"
                        style={{ marginTop: "40px" }}
                      >
                        <div style={{ display: "flex" }}>
                          <span style={{ width: "115.19px" }}>기간 할인율</span>
                          <Input style={{ width: "250px" }}></Input>

                          <span
                            style={{ width: "115.19px", marginLeft: "265px" }}
                          >
                            할인 기간
                          </span>
                          <div style={{ width: "400px", display: "flex" }}>
                            <DatePicker
                              renderExtraFooter={() => "extra footer"}
                              showTime
                            />
                            <div
                              style={{
                                width: "10px",
                                padding: "0px 10px 0px 10px",
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
                      </div>

                      {/* 모달 > 재원생할인율 */}
                      <div
                        className="enrolledDiscountRate"
                        style={{ marginTop: "40px" }}
                      >
                        <div style={{ display: "flex" }}>
                          <span style={{ width: "115.19px" }}>
                            재원생 할인율
                          </span>
                          <Input style={{ width: "250px" }}></Input>
                        </div>
                      </div>

                      {/* 모달 > 태그 */}
                      <div
                        className="enrolledDiscountRate"
                        style={{
                          marginTop: "40px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div className="top" style={{ display: "flex" }}>
                          <span style={{ width: "115.19px" }}>태그</span>
                          <Input style={{ width: "576px" }}></Input>
                        </div>
                        <div
                          className="bottom"
                          style={{ fontSize: "12px", marginLeft: "115.19px" }}
                        >
                          *텍스트,텍스트로 태그 값 입력
                        </div>
                      </div>

                      {/* 모달 > 상픔 소개 */}
                      <div
                        className="Description&Editor"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "40px",
                        }}
                      >
                        <div className="buttonText" style={{ display: "flex" }}>
                          <span style={{ width: "115.19px" }}>상품 소개</span>
                          {/* 에디터 들어갈 자리 */}
                          <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            modules={modules}
                            formats={formats}
                            style={{ width: "1000px", height: "200px" }}
                          ></ReactQuill>
                        </div>
                      </div>
                      {/* 모달 > 코스 소개 내용 */}
                      <div
                        className="courseDescription"
                        style={{ display: "flex", marginTop: "80px" }}
                      >
                        <div style={{ display: "flex", marginTop: "10px" }}>
                          <span style={{ width: "200px" }}>코스 소개</span>
                          {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>등록</Button>
                    </Upload> */}
                          <div style={{ width: "150px" }}>
                            <Button>등록</Button>
                          </div>
                          <span>{`{코스 소개 내용 들어갈 자리}`}</span>
                        </div>
                      </div>
                      {/* 모달 > 코스 특징 내용 */}
                      <div
                        className="courseDescription"
                        style={{ display: "flex", marginTop: "40px" }}
                      >
                        <div style={{ display: "flex", marginTop: "10px" }}>
                          <span style={{ width: "200px" }}>특징 내용</span>
                          {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>등록</Button>
                    </Upload> */}
                          <div style={{ width: "150px" }}>
                            <Button>등록</Button>
                          </div>
                          <span>{`{특징 내용 들어갈 자리}`}</span>
                        </div>
                      </div>
                      {/* 모달 > 코스 구성 내용 */}
                      <div
                        className="courseDescription"
                        style={{ display: "flex", marginTop: "40px" }}
                      >
                        <div style={{ display: "flex", marginTop: "10px" }}>
                          <span style={{ width: "200px" }}>구성 내용</span>
                          {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>등록</Button>
                    </Upload> */}
                          <div style={{ width: "150px" }}>
                            <Button>등록</Button>
                          </div>
                          <span>{`{구성 내용 들어갈 자리}`}</span>
                        </div>
                      </div>
                      {/* 모달 > 커리큘럼 */}
                      <div
                        className="enrolledDiscountRate"
                        style={{
                          marginTop: "40px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div className="top" style={{ display: "flex" }}>
                          <span style={{ width: "115.19px" }}>커리큘럼</span>
                          <Input
                            placeholder={"URL"}
                            style={{ width: "576px" }}
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  <Button style={{ marginLeft: "20px" }}>삭제</Button>
                </div>
                <div className="tableWrap" style={{ width: "100%" }}>
                  {/* 상품 목록 - 표 */}
                  <Table
                    rowSelection={{
                      type: selectionType,
                      ...rowSelection
                    }}
                    dataSource={datasource}
                    columns={columns}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
}

export default Course;