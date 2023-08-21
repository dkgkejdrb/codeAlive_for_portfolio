import { Layout, Menu, theme, Image, Button, Modal, Input, Radio, DatePicker, Table } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import starRed from "../Assets/starRed.svg";
import starYellow from "../Assets/starYellow.svg";
import starPurple from "../Assets/starPurple.svg";
import banner from "../Assets/banner.png";
import banner2 from "../Assets/banner2.png";
import banner3 from "../Assets/banner3.png";
import axios from "axios";
import MyPageSlice from './MyPageSlice';
import { useSelector, useDispatch } from 'react-redux';
// 날짜 포맷 관련1
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


import React, { useEffect, useState } from 'react';
const { Header, Content, Footer, Sider, Upload } = Layout;

const { RangePicker } = DatePicker;
// 날짜 포맷 관련2
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';

// 배너 검색 조회 URL
const SERVER_URL_SEARCH = 'http://192.168.54.93:3570/api/v1/admin/banner?title=배너&orderBy=create'

// 배너 상세 조회 URL
const SERVER_URL_SEARCH_DETAIL = 'http://192.168.54.93:3570/api/v1/admin/banner/';


const Banner = () => {
  // 배너 수정 모달 관련
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 배너 목록에서 선택한 행의 데이터
  const [rowData, setRowData] = useState({});
  const showModal = (record) => {
    // 클릭한 행의 id값을 저장하는 변수
    const id = record.id;
    setIsModalOpen(true);
    
    // 클릭한 행의 id값으로 '배너 상세 조회'의 url로 상세 정보 받아오기
    axios
    .get(SERVER_URL_SEARCH_DETAIL + id, {
      headers: {
        Authorization: TOKEN,
      },
    })
    .then((response) => {
      setRowData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 배너 목록 조회 데이터 변수
  const [bannerSearchData, setBannerSearchData] = useState("");

  // ☆☆☆☆☆☆☆☆☆ 표-수강생 테스트 결과 ☆☆☆☆☆☆☆☆☆
  // 데이터
  const datasource = [
    // {
    //   key: "1",
    //   id: "",
    //   imageFile: "",
    //   title: "",
    //   create: "",
    //   displayDateTime: "",
    //   used: "",
    // },
  ];

  // 배너를 조회하기 위한 토큰 정보 받아오기
  const TOKEN = useSelector((state) => {
    return state.MyPageSlice.TOKEN;
  });

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // ★중요 useEffect에서 저장할 상태값을 다룰 때는, 반드시 방어적으로 axios를 호출해야 함
  useEffect(() => {
    if (!bannerSearchData) {
      // 배너 목록 조회
      axios
        .get(SERVER_URL_SEARCH, {
          headers: {
            Authorization: TOKEN,
          },
        })
        .then((response) => {
          // 배너 목록 조회 데이터 변수에 값 저장
          setBannerSearchData(response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    


  }, [bannerSearchData]);

  // ☆☆☆☆☆☆☆☆☆ 표-수강생 테스트 결과 ☆☆☆☆☆☆☆☆☆
  // 열
  const columns = [
    {
      title: "NO",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "배너",
      dataIndex: "imageFile",
      key: "imageFile",
      width: 200,
      onCell: (record) => ({
        style: {
          backgroundImage: record.image,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      }),
    },
    {
      title: "배너 타이틀",
      dataIndex: "title",
      key: "title",
      onCell: (record) => ({
        // onClick: showModal,
        // onClick: event => {console.log(record)},
        // 클릭했을 때, recorde의 key값을 showModal에 던지기
        onClick: event => {
          showModal(record);
        },
        style: {
          color: "blue",
          cursor: "pointer",
          textDecoration: "underline",
        },
      }),
    },
    {
      title: "등록자 등록일 / 수정자 수정일",
      dataIndex: "create",
      key: "create",
    },
    {
      title: "게시 기간",
      dataIndex: "displayDateTime",
      key: "displayDateTime",
    },
    {
      title: "사용 유무",
      dataIndex: "used",
      key: "used",
    },
  ];

  // bannerSerachData가 true인지 검사
  // bannerSerachData로 받아온 값을 datasource에 맵핑
  bannerSearchData &&
    bannerSearchData.length > datasource.length &&
    bannerSearchData.map((course, index) => {
      datasource.push({
        key: index,
        id: course.id,
        imageFile: course.imageFile.path,
        title: course.title,
        create: `${course.create.by} / ${course.create.at}`,
        displayDateTime: `${course.displayDateTime.start} ~ ${course.displayDateTime.end}`,
        used: `${course.used}`,
      });
    });

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

  // 배너 타이틀
  const [title, setTitle] = useState("");
  // 설명
  const [contents, setContents] = useState("");
  // 연결 URL
  const [linkUrl, setLinkUrl] = useState("");

  return (
    <>
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
        >
          <Button onClick={showModal}>등록하기</Button>
          {/* 배너 수정 모달창 */}
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
                width: "30%",
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
                  justifyContent: "space-between",
                }}
              >
                <div className="title">사용중인 배너</div>
                <Button className="saveBtn">저장</Button>
              </div>
              <div
                className="draggableSection"
                style={{ border: "1px solid" }}
              ></div>
            </div>
            <div
              className="bannerDetail"
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
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <span style={{ height: "32px", borderBottom: "2px solid" }}>
                  배너 목록
                </span>
                <Table
                  dataSource={datasource}
                  columns={columns}
                  style={{ width: "100%", marginTop: "10px" }}
                />
              </div>
              <div className="detailSection"></div>
            </div>
          </div>
        </Content>
        <Modal
          title="배너 수정하기"
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
            {/* 모달 > 배너 타이틀 */}
            <div
              className="Bannertitle"
              style={{ display: "flex", marginTop: "40px" }}
            >
              <span style={{ width: "10%" }}>배너 타이틀</span>
              <Input prefix={rowData.title} style={{ width: "50%" }}></Input>
              {console.log(rowData)}
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
            {/* 모달 > 이미지&배경 색상 */}
            <div
              className="backgroundImage&Color"
              style={{ marginTop: "40px" }}
            >
              <div style={{ display: "flex" }}>
                <span style={{ width: "10%" }}>이미지</span>
                {/* <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload> */}
                <div style={{ width: "90%" }}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "10%" }}>배경 색상</span>
                <div style={{ width: "90%" }}>
                  <div>
                    <Input
                      prefix={rowData.backgroundColor}
                      style={{ width: "15%" }}
                    ></Input>
                    <span> {`Ex) #000000`} </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 모달 > 연결 URL */}
            <div className="URL" style={{ display: "flex", marginTop: "40px" }}>
              <span style={{ width: "10%" }}>연결 URL</span>
              <div style={{ width: "50%" }}>
                <Input prefix={rowData.linkUrl}></Input>
                <span>*URL은 “https://” 형태로 등록해주세요.</span>
              </div>

              <div
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <span>아웃링크</span>
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
            {/* 모달 > 타이틀 */}
            <div
              className="title"
              style={{ display: "flex", marginTop: "40px" }}
            >
              <span style={{ width: "10%" }}>타이틀</span>
              <div style={{ width: "50%" }}>
                <Input disabled></Input>
                <span>{`*강조 텍스트는 앞뒤에 EM 태그입력 ex) <em>강조 텍스트</em>`}</span>
              </div>

              <div
                style={{
                  width: "40%",
                  display: "flex",
                }}
              >
                <span style={{ marginLeft: "205px" }}>최대 20자</span>
              </div>
            </div>
            {/* 모달 > 강조색 */}
            <div className="higlightColor" style={{ marginTop: "40px" }}>
              <div style={{ display: "flex" }}>
                <span style={{ width: "10%" }}>강조색</span>
                <div style={{ width: "90%" }}>
                  <div>
                    <Input disabled style={{ width: "15%" }}></Input>
                    <span> {`Ex) #000000`} </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 모달 > 설명 */}
            <div
              className="description"
              style={{ display: "flex", marginTop: "40px" }}
            >
              <span style={{ width: "10%" }}>설명</span>
              <div style={{ width: "50%" }}>
                <Input prefix={rowData.contents}></Input>
              </div>

              <div
                style={{
                  width: "40%",
                  display: "flex",
                }}
              >
                <span style={{ marginLeft: "205px" }}>최대 30자</span>
              </div>
            </div>
            {/* 모달 > 버튼&버튼URL */}
            <div
              className="buttonText&buttonLinkUrl"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "40px",
              }}
            >
              <div className="buttonText" style={{ display: "flex" }}>
                <span style={{ width: "10%" }}>버튼</span>
                <div style={{ width: "50%" }}>
                  <Input disabled></Input>
                </div>

                <div
                  style={{
                    width: "40%",
                    display: "flex",
                  }}
                >
                  <span style={{ marginLeft: "205px" }}>최대 10자</span>
                </div>
              </div>
              <div className="buttonLinkUrl" style={{ display: "flex" }}>
                <span style={{ width: "10%" }}>버튼 URL</span>
                <div style={{ width: "50%" }}>
                  <Input disabled></Input>
                  <span>*URL은 “https://” 형태로 등록해주세요.</span>
                </div>

                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <span>아웃링크</span>
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
            {/* 모달 > 게시 기간 */}
            <div
              className="date"
              style={{ display: "flex", marginTop: "40px" }}
            >
              <span style={{ width: "10%" }}>게시 기간</span>
              <div style={{ width: "90%", display: "flex" }}>
                {
                  rowData.displayDateTime&&
                  <RangePicker
                    showTime
                    // defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
                    defaultValue={[ dayjs(rowData.displayDateTime.start, dateFormat), dayjs(rowData.displayDateTime.end, dateFormat) ]}
                    style={{ width: "400px" }}
                  />
                  // console.log(rowData.displayDateTime.start)
                }
              </div>
            </div>
          </div>
        </Modal>
      </Layout>
    </>
  );
}

export default Banner;