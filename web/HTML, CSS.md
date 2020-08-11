##  HTML

* 웹 페이지를 작성하기 위한 언어, 웹 컨텐츠의 의미와 구조를 정의

* html의 기본 구조 <! DOCTYPE html>

  ```
  <! DOCTYPE html> # html 문서 정의
  <html>
    <head> </head> # 해당 html 문서의 정보를 담고 있다.
      			 # 제목, 문자의 인코딩, 외부 로딩 파일 지정
      			 # 브라우저에는 나타나지 않음
    <body> </body> # 브라우저 화면에 실질적으로 나타나는 정보
      			 # 
  </html>
  ```

  * DOM tree : 부모, 형제 관계
  * 요소(element) : 태그와 컨텐츠로 구성
    * 태그 별로 속성이 있는데 사용하는 속성은 다르다.
    * 시멘틱 태그 : 의미론적 요소를 담은 태그
      * 개발자 및 사용자 뿐만 아니라 검색엔진 등에 의미있는 정보의 그룹으로 표현 가능
    * 그룹 컨텐츠 : 
      * p, hr, ol, ul, li, pre, blockquote, div
    * 텍스트 관련 : 
      * a, b, i, strong, em, span, br, img
    * 테이블 관련 :
      * tr, td, th, thead, tbody, tfoot, caption
    * form : 서버에 처리될 데이터를 제공하는 역할
      * input : 다양한 타입을 가지는 입력 데이터 필드
        * 공통 속성 : name, placeholder, required, autofocus
        * type : text, radio, checkbox, date, password, ...
        * label 태그 : 서식 입력 요소의 캡션

```html
<input type="button">  -> 그냥 버튼
<input type="submit">  -> 서버에 데이터 전달
<button> </button>     -> 버튼+서브밋
```



---



## CSS

* CSS : 스타일, 레이아웃 등을 통해서 문서를 표시하는 방법을 지정하는 언어

* CSS 적용 방법

  1. inline : 관리하기 힘듦. for test

     `<div style="background-color: red;"><div>`

  2. 내부 참조 방식 : 하나의 html에서만 적용. for study, test

     `<style> h1 { color: red;} </style>`

  3. 외부 참조 방식 : css 정의를 파일 단위로 묶어서 필요한 html 문서마다 적용이 가능. 유지보수가 쉬움, 파일을 따로 만들어서 관리를 해야 하기 때문에 css파일을 잘 챙겨야 한다.

* CSS 정의하는 방법 

  ```
  선택자 {
    속성: 속성값;
    속성2: 속성속성;
  }
  ```

* 선택자 : 특정한 요소를 선택해서 스타일링을 하기 위해 반드시 필요함.

  * 기초 선택자

    * 타입(요소, 태그) 선택자, 아이디 선택자, 클래스 선택자, 전체 선택자

  * 고급 선택자

    * 자손 선택자 : 하위의 모든 요소에 영향(띄워쓰기로 구분)

      선택자1 선택자 2 { 속성: 속성값;} `article p {  color: red;}`

    * 직계 자손 선택자 : 바로 아래의 요소 ( >로 구분)

      선택자1 > 선택자2 { 속성: 속성값;} `div > p { color: blue;}`

    * 형제 요소 선택자 : 같은 레벨에 있는 요소 (~로 구분)

      선택자1 ~ 선택자2 { 속성: 속성값;} `p ~ section { color: yellow;}`

    * 인접 형제 요소 선택자 : 바로 붙어 있는 형제 요소 ( +로 구분)

      선택자1 + 선택자2 {속성: 속성값;} `div + p {  color: purple;}`

*  CSS  적용 우선순위

  1. 중요도 `!important`로 나타냄. 사용시 디버깅이 어렵다.

  2. 우선 순위 

     1. 인라인 : 태그에 직접 스타일을 지정

     2. 아이디 선택자

     3. 클래스 선택자

     4. 속성 선택자

        * 셀렉터[속성] : 해당 속성을 가진 요소를 선택
        * 셀렉터[속성=속성값] : 해당 속성 값을 가진 요소를 선택

     5. 수도 클래스 선택자

        * 셀렉터:hove : 해당 셀렉터 위에 마우스를 오버했을 때

     6. 요소(타입, 태그) 선택자

        > 범용(*) 선택자, (' ', +, ~, >) 결합자는 우선순위에 영향을 미치지 않음.

  3. 코드에 정의된 순서

* CSS 단위

  *  px, %(기준사이즈에서 배율), em(상속 받은 사이즈에서 배수), rem(root size에서 배수)
  * vw(뷰포트 너비의 1%), vh(뷰포트 높이의 1%), vmin(뷰포트에서 가로세로 중에서 짧은 쪽의 1%), vmax(뷰포트 가로세로중에서 긴 쪽의 1%)
  * Hex(#), rgb, hsl, rgba, hsla

* Box Model

  * margin : 바깥 여백
  * border : 테두리
  * padding : 안쪽 여백
  * content : 글이나 이미지 등의 실제 요소
  * box-sizing
    * content-box : default 값, 컨텐츠 영역의 크기
    * border-box : 박스 모델 테두리 기준으로 크기 조절

* 마진 상쇄

  * 수직 간의 형제 요소에서 주로 발생
  * margin  대신 padding을 이용해서 해결 가능

* CSS Display

  * block
    * div, ul, ol, li, p, hr, form
  * inline
    * span, a, img, input, label, b, em, i, strong
    * 컨텐트의 너비만큼 공간을 차지
    * width, height, margin-top, margin-bottom은 지정할 수 없음.
  * inline-block
    * 컨텐츠 너비만큼 공간을 차지
    * width, height, margin-top, margin-bottom을 지정가능
  * none : 공간을 없애버림.
    * `visiblity : hidden`은 공간을 차지하나 화면에 표시만 안함.

* CSS position

  * static : 기본적인 배치 순서에 따름(기본 값)
  * relative : static 위치를 기준으로 이동
  * absolute : static 속성이 아닌 가장 가까운 부모/ 조상 요소를 기준으로 이동
    * 기본적인 배치 순서에서 제외된다.
  * fixed : 부모 요소와 관계 없이 __브라우저__를 기준으로 위치.
  * sticky : relative처럼 기본 배치 순서는 가지고 있음
    * 화면 밖으로 벗어나면 fixed처럼 위치에 고정되어 있음.
    * 부모의 영역이 화면 밖으로 벗어나면 다시 일반적인 흐름을 따른다.

