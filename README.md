## NOTICE

※ 본 소스코드에는 회사의 자산과 민감한 정보는 전부 제거하였으며, 본인(이동규)이 직접 기여하여 작성한 코드만을 업로드하였습니다.

------



## 1. 프로젝트 제목 및 설명

### 제목:

- codeAlive-B2C 웹 구축

### 설명:

- [codeAlive](https://www.codealive.co.kr/)(Creverse와 Unity가 공동 개발한 파이썬 교육프로그램)의 사업 확장을 위한, B2C용 LMS
  - **root > front: 일반 사용자(학생, 학부모 등)가 이용하는 화면을 구성하는 소스코드**
  - **root > admin: 관리자가 관리자 기능을 사용하기 위해 이용하는 화면을 구성하는 소스코드**


------



## 2. 본인 기여

- 일반 사용자 / 관리자의 프론트 메인 개발

------



## 3. 기술 스택 및 사용된 도구

### 언어 :

- JavaScript(ES6+): 최신 ECMAScript 표준을 사용한 프로그래밍.

### 프레임워크 및 도구:

- react: 프레임워크
- react-router: SPA(Single Page Application) 라우팅 관리
- react-redux: 전역 상태 관리
- react-quill: 사용자 에디터 1
- react-quilljs: 사용자 에디터 2
- pixi.js: 메인배너의 2D 웹 그래픽 효과에 사용
- antd: UI 컴포넌트로 사용
- apexcharts:사용자 학습정보의 차트와 그래프에 사용

### 백엔드 통신:

- axios: HTTP 클라이언트 라이브러리
- Postman: API 테스팅

### 배포:

- Azure StaticWebApp: Azure 클라우드의 정적웹 배포서비스
