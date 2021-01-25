# ReactJS로 영화 웹 서비스 만들기

## 소개

전반적으로 ReactJS를 활용하며, 영화 데이터를 API 서버에서 불러와서 메인 페이지에 간략하게 출력하고, 내비게이션을 두어 url을 옮겨 다닐 수 있게 하였다. 또한 영화에 대한 자세한 설명을 보기 위해 영화 클릭시 하나의 영화에 대한 페이지를 구성했다.

---

## 목적

ReactJS에 대해 기초를 다지며, 사용방법과 구성에 대해 파악하기 위하여 진행한 개인프로젝트.

---

## 도구

ReactJS, CSS, VS Code, Git

---

## 사용한 기술

- npm 패키지 관리자
- API 서버통신 : fetch가 아닌 axios를 사용하여 영화데이터 불러옴.
- gh-pages : 웹 호스팅
- react-router-dom : url과 컴포넌트 경로설정(HashRouter)
- async await : 영화데이터를 불어오는 작업을 비동기로 처리(기다리는 동안 loading 표시)

---

_홈페이지로 동작하게 하는 방법_

1. npm i gh-pages 명령어로 gh-pages 설치
2. package.json파일에 "homepage": "유저.github.io/앱" => 소문자로!!띄어쓰기 안됨!!
3. package.json의 scripts에 "deploy": "gh-pages -d build", 하고 npm run build 시 build 파일 생성됨
4. "predeploy": "npm run build" 추가하고 npm run deploy하면 홈페이지 정상 작동함.
   (npm run deploy를 하면 npm run build predeploy가 자동 실행됨)

-참고 : https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
