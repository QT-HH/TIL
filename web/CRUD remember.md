## Loading CRUD

* 가상 환경 설정
  * `python -m venv venv`
  * vscode에서 interpreter 설정
  * 가상환경 설정
    1. vscode 새로운 창 오픈
    2. `source venv/Scripts/acrivate 실행
  * pip list로 깨끗한지 확인
  * `pip install django`

---

* 준비단계
  * 프로젝트 생성
    * `django-admin startproject 프로젝트명`
    * `mange.py`가 있는 폴더로 이동
    * `python manage.py runserver`로 로켓 확인
  * 앱 생성
    * `python manage.py startapp 앱이름`
    * 바로 `settings.py` 열어서 앱을 등록
  * url 분리 작업
  * 공통적으로 사용할 base.html 생성
    * TEMPLATE에 있는 DIRS 에 폴더의 위치를 등록

---

* 간단한 페이지 작성 방법!!!
  * `urls.py -> views.py -> templates/html파일` 루틴으로 모든 장고 기능 작성을 할 것임.
  * `html`에서 값을 보여주고 싶을 때는 `views.py`에서 `render의 세번째 인자`로 `dictionary 형태`를 가지는 값을 넘겨주면 됨 (변수명을 보통 context로 한다)
    * html에서 부여줄 때는 `{{보내는 키명}}`으로 나타낼 수 있다.
  * Variable Route
    * 주소 중 일부를 변수로 사용, 즉 패턴에 있는 주소 값을 변수에 저장할 수 있다.
    * 즉, 내가 원하는 값을 주소로 전달할 수 있다.
    * `urls.py`에서는 주소 패턴에 `<타입:변수명>` wjddml
      * str,int
    * `views.py`에서는 함수 매개변수 명을 정해주는데 반드시 `urls.py`에서 설정한 변수명으로 해야함

---

* Models 사용
  * class를 작성한다
  * `python manage.py makemigrations` : DB 설계 도면을 생성
  * `python manage.py migrate` : DB 생성하기
* Admin 페이지 사용해보기
  * `admin.py`에 내가 만든 모델을 등록
  * 관리자 계정을 생성, `python manage.py createsuperuser`



---

* CRUD (Form 없이)
  * Read
    * 전체 목록 읽어오기(index)
      * QuerySet 형태로 데이터를 받아옴.
    * 하나의 목록만 읽어오기(detail)
      * 해당 데이터의 pk값이 필요 => variable route를 이용해서 전달
      * Object 형태로 데이터를 받아옴
  * Create
    * request