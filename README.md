# leejongwook_movie_app_2021

React JS로 영화 웹 서비스 만들기

_홈페이지로 동작하게 하는 방법_

1. npm i gh-pages 명령어로 gh-pages 설치
2. package.json파일에 "homepage": "유저.github.io/앱" => 소문자로!!띄어쓰기 안됨!!
3. package.json의 scripts에 "deploy": "gh-pages -d build", 하고 npm run build 시 build 파일 생성됨
4. "predeploy": "npm run build" 추가하고 npm run deploy하면 홈페이지 정상 작동함.
   (npm run deploy를 하면 npm run build predeploy가 자동 실행됨)
