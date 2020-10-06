# REST API

## API 서버

- 프로그래밍 언어가 제공하는 기능을 수행할 수 있게 만든 인터페이스
- 결과적으로는 우리가 만든 서버에서 HTML이 아니라 JSON응답으로 데이터를 제공



## RESTful AI

### REST

- REpresentational State Transfer
- 로이 필딩 2000년 박사 논문으로
- 자원과 주소로 표현하는 방법론
  - 웹 상에 존재하는 자료를HTTP 위에서 전송하기 위한 인터페이스
  - 네트워크 아키텍쳐
- 자원(URI로 표현)
  - URL
  - URN
- HTTP method로 주소를 표현
  - **GET : 데이터를 조회**
  - **POST : 데이터를 생성**
  - PUT / PATH : 데이터를 수정
  - DELETE : 데이터를 삭제
- HTTP method + 자원(URI)의 표현



---

## Django Rest Framework (DRF)

- Serialization(직렬화)

  - 데이터 구조나 오브젝트 상태를 동일하거나 다른 컴퓨터 환경에 저장하고

    나중에 재구성할 수 있는 포맷으로 변화하는 과정

  - Django에서 Form을 작성하는것과 굉장히 유사.