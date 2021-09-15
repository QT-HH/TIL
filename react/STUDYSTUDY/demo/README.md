# 영화 사이트

> JS로 완성 후 TS로 리팩토링해보깅



## <초기 개발환경 셋업 과정>

```shell
npx create-react-app demo-movies
npm install redux
npm install @reduxjs/toolkit
npm install redux-saga
npm install react-router-dom
```



import 상대경로를 절대경로로 변경

- root폴더 아래에 jsconfig.json 생성후 baseUrl설정 추가후 vsCode 재시작

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

// https://oyeahhh.tistory.com/176
```



